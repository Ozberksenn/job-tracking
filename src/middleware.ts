import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("token")?.value;

  const isAuthPage = request.nextUrl.pathname.startsWith("/login");

  // Eğer token yoksa login sayfasına yönlendir
  if (!token && !isAuthPage) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // Eğer token varsa ve login sayfasına gidiyorsa dashboard'a at
  if (token && isAuthPage) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next|static|favicon.ico).*)"],
};