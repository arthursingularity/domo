import jwt from 'jsonwebtoken'
import { NextResponse } from 'next/server'

export function authenticate(req) {
  const authHeader = req.headers.get('authorization')

  if (!authHeader) {
    return {
      error: NextResponse.json(
        { success: false, message: 'Token não fornecido' },
        { status: 401 }
      ),
    }
  }

  const [, token] = authHeader.split(' ')

  if (!token) {
    return {
      error: NextResponse.json(
        { success: false, message: 'Token inválido' },
        { status: 401 }
      ),
    }
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    return { user: decoded }
  } catch {
    return {
      error: NextResponse.json(
        { success: false, message: 'Token expirado ou inválido' },
        { status: 401 }
      ),
    }
  }
}
