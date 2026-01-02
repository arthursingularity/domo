import { NextResponse } from "next/server"
import jwt from "jsonwebtoken"
import { prisma } from "@/lib/prisma"

export async function GET(req) {
  try {
    const token = req.cookies.get("token")?.value

    if (!token) {
      return NextResponse.json(
        { authenticated: false },
        { status: 401 }
      )
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET)

    const user = await prisma.user.findUnique({
      where: { id: decoded.id },
      select: {
        id: true,
        name: true,
        cpf: true,
        phone: true,
        email: true,
        isVerified: true,
        role: true,
      },
    })

    if (!user) {
      return NextResponse.json(
        { authenticated: false },
        { status: 401 }
      )
    }

    return NextResponse.json({
      authenticated: true,
      user,
    })
  } catch (err) {
    return NextResponse.json(
      { authenticated: false },
      { status: 401 }
    )
  }
}
