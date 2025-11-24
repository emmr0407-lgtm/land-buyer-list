import { NextResponse } from "next/server";

export function middleware(request: Request) {
    const isAdmin = request.url.includes("/admin");
    const loggedIn = request.headers.get("cookie")?.includes("auth=true");

    if (isAdmin && !loggedIn) {
        return NextResponse.redirect(new URL("/login", request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/admin/:path*"],
};





