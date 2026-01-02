import { prisma } from '@/lib/prisma'
import bcrypt from 'bcrypt'
import { NextResponse } from 'next/server'

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

function isValidCPF(cpf) {
  return /^\d{11}$/.test(cpf)
}

export async function POST(req) {
  try {
    const { name, email, password, phone, cpf, role } = await req.json()

    const allowedRoles = ['CLIENT', 'PROFESSIONAL']

    if (role && !allowedRoles.includes(role)) {
      return NextResponse.json(
        { success: false, message: 'Tipo de usuário inválido' },
        { status: 400 }
      )
    }

    if (!name || !email || !password || !cpf || !phone) {
      return NextResponse.json(
        { success: false, message: 'Nome, e-mail, senha e CPF são obrigatórios' },
        { status: 400 }
      )
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { success: false, message: 'E-mail inválido' },
        { status: 400 }
      )
    }

    if (!isValidCPF(cpf)) {
      return NextResponse.json(
        { success: false, message: 'CPF inválido' },
        { status: 400 }
      )
    }

    if (password.length < 6) {
      return NextResponse.json(
        { success: false, message: 'Senha deve ter no mínimo 6 caracteres' },
        { status: 400 }
      )
    }

    const existingUser = await prisma.user.findFirst({
      where: {
        OR: [{ email }, { cpf }]
      }
    })

    if (existingUser) {
      return NextResponse.json(
        { success: false, message: 'E-mail ou CPF já cadastrado' },
        { status: 409 }
      )
    }

    const passwordHash = await bcrypt.hash(password, 10)

    const user = await prisma.user.create({
      data: {
        name,
        email,
        cpf,
        phone,
        passwordHash,
        role: role || 'CLIENT'
      }
    })

    if (user.role === 'PROFESSIONAL') {
      await prisma.professionalProfile.create({
        data: {
          userId: user.id,
          professionalName: user.name,
          city: '',
          state: ''
        }
      })
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Usuário criado com sucesso',
        user: {
          id: user.id,
          name: user.name,
          email: user.email,
          role: user.role
        }
      },
      { status: 201 }
    )

  } catch (error) {
    console.error(error)

    return NextResponse.json(
      { success: false, message: 'Erro interno do servidor' },
      { status: 500 }
    )
  }
}