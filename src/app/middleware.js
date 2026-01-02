import { NextResponse } from "next/server"
import { jwtVerify } from "jose"

const SECRET = new TextEncoder().encode(process.env.JWT_SECRET)

export async function middleware(req) {
    const token = req.cookies.get("token")?.value
  
    console.log("TOKEN NO MIDDLEWARE:", token)
  
    if (!token) {
      return NextResponse.redirect(new URL("/entrar", req.url))
    }
  
    try {
      await jwtVerify(token, SECRET)
      return NextResponse.next()
    } catch {
      return NextResponse.redirect(new URL("/entrar", req.url))
    }
  }
  

export const config = {
    matcher: ["/sistema/:path*"],
  }