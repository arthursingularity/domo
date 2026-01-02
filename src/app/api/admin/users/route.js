import { NextResponse } from 'next/server'
import { prisma } from '../../../../lib/prisma'
import { authenticate } from '../../../../lib/middleware/auth'
import { authorize } from '../../../../lib/middleware/autorize'

export async function GET(req) {
  const auth = authenticate(req)
  if (auth.error) return auth.error

  const forbidden = authorize(auth.user, ['ADMIN'])
  if (forbidden) return forbidden

  const users = await prisma.user.findMany({
    select: {
      id: true,
      name: true,
      email: true,
      cpf: true,
      type: true,
      createdAt: true,
      updatedAt: true,
    },
  })

  return NextResponse.json({ success: true, users })
}