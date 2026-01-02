import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

export async function POST(req) {
  try {
    const { email, password } = await req.json()

    if (!email || !password) {
      return NextResponse.json(
        { success: false, message: "E-mail e senha são obrigatórios." },
        { status: 400 }
      )
    }

    const user = await prisma.user.findUnique({
      where: { email },
    })

    if (!user || !user.passwordHash) {
      return NextResponse.json(
        { success: false, message: "E-mail não encontrado." },
        { status: 401 }
      )
    }

    const validPassword = await bcrypt.compare(password, user.passwordHash)

    if (!validPassword) {
      return NextResponse.json(
        { success: false, message: "Senha inválida ou incorreta." },
        { status: 401 }
      )
    }

    const token = jwt.sign(
      {
        id: user.id,
        email: user.email,
        role: user.role,
      },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    )

    const response = NextResponse.json({
      success: true,
      message: "Login realizado com sucesso",
    })

    response.cookies.set("token", token, {
      httpOnly: true,
      path: "/",
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
    })

    return response

  } catch (error) {
    console.error("Erro no login:", error)

    return NextResponse.json(
      { success: false, message: "Erro inesperado. Tente novamente." },
      { status: 500 }
    )
  }
}
