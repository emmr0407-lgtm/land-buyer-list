import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST(request: Request) {
    const cookieStore = cookies();
    cookieStore.set("auth", "", {
        expires: new Date(0),
        path: "/",
    });

    return NextResponse.redirect(new URL("/login", request.url));
}
