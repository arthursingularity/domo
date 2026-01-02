import { NextResponse } from 'next/server'

export function authorize(user, allowedTypes = []) {
  if (!allowedTypes.includes(user.type)) {
    return NextResponse.json(
      { success: false, message: 'Acesso negado' },
      { status: 403 }
    )
  }
}