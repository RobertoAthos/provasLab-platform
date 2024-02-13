import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
    const token = request.cookies.get("access_token")?.value;
    const url = request.nextUrl.pathname
  
    const signinURL = new URL("/auth/signin", request.url);
  
    if (!token) {
      if (url === "/auth/signin" || url === "/") {
        return NextResponse.next();
      }
      return NextResponse.redirect(signinURL);
    }
}  

export const config = {
  matcher: ["/platform/:path*"],
  runtime: "nodejs",
};