import { NextResponse } from "next/server";

export function middleware(request: Request) {
    const isAdminPage = request.url.includes("/admin");
    const adminPassword = process.env.ADMIN_PASSWORD;

    // Check cookie
    const cookieHeader = request.headers.get("cookie");
    const isLoggedIn = cookieHeader?.includes(`admin-auth=${adminPassword}`);

    // If going to /admin and NOT logged in → redirect to /login
    if (isAdminPage && !isLoggedIn) {
        return NextResponse.redirect(new URL("/login", request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/admin/:path*"],
};



