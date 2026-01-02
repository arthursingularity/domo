import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

export async function POST(req) {
  const { email } = await req.json()

  // Validação básica
  if (!email) {
    return NextResponse.json(
      { success: false, message: "Email é obrigatório." },
      { status: 400 }
    )
  }

  // Busca o usuário no banco de dados
  const user = await prisma.user.findUnique({
    where: { email },
    select: { id: true } // Retorna apenas o ID (não expõe dados sensíveis)
  })

  // Retorna se o email existe ou não
  return NextResponse.json({
    success: true,
    exists: !!user, // Converte para boolean (true se encontrou, false se não)
  })
}