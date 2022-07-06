import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
  const session = await getToken({
    req,
    secret: process.env.SECRET
  })
  console.log('entered on middleware');

  if (!session) {
    
    // return new Response("Auth required", {
    //   status: 401,
    //   headers: {
    //     "WWW-Authenticate": 'Bsic realm="Secure Area"'
    //   }
    // })
    console.log('error');
    
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/api/protected/:path*']
}