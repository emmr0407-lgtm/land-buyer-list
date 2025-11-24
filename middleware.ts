import { NextResponse } from "next/server";

export function middleware(request: Request) {
    const isAdminPage = request.url.includes("/admin");
    const hasAuthCookie = request.headers.get("cookie")?.includes("admin-auth=true");

    // If user is going to /admin and NOT logged in, redirect to /login
    if (isAdminPage && !hasAuthCookie) {
        return NextResponse.redirect(new URL("/login", request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/admin/:path*"],
};





