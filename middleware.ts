import { NextResponse } from "next/server";

export function middleware(request: any) {
    const password = request.cookies.get("admin_auth")?.value;
    const isLoggedIn = password === process.env.ADMIN_PASSWORD;

    // If user is not logged in and trying to access /admin
    if (!isLoggedIn && request.nextUrl.pathname.startsWith("/admin")) {
        const loginUrl = new URL("/login", request.url);
        return NextResponse.redirect(loginUrl);
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/admin", "/admin/:path*"],
};

