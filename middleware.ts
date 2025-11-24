import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
    const isLoggedIn = req.cookies.get("auth")?.value === "true";

    // Protect /admin routes
    if (req.nextUrl.pathname.startsWith("/admin") && !isLoggedIn) {
        const loginUrl = new URL("/login", req.url);
        return NextResponse.redirect(loginUrl);
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/admin/:path*", "/admin"],
};
