import { NextResponse } from "next/server";

export function middleware(request: Request) {
    const isAdminPage = request.url.includes("/admin");
    const adminPassword = process.env.ADMIN_PASSWORD;

    // If user is going to /admin and is NOT logged in
    if (isAdminPage && !request.headers.get("cookie")?.includes(`admin-auth=${adminPassword}`)) {
        return NextResponse.redirect(new URL("/login", request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/admin/:path*"],
};


