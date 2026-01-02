import { NextResponse } from "next/server"

export async function POST() {
  const response = NextResponse.json({
    success: true,
    message: "Logout realizado com sucesso",
  })

  // 🔥 REMOVE O COOKIE JWT
  response.cookies.set("token", "", {
    httpOnly: true,
    expires: new Date(0),
    path: "/", // MUITO IMPORTANTE
  })

  return response
}
