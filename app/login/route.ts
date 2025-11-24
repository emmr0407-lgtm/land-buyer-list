import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST(request: Request) {
    const { password } = await request.json();

    if (password === process.env.ADMIN_PASSWORD) {
        cookies().set("auth", "true", {
            httpOnly: true,
            path: "/",
            maxAge: 60 * 60 * 24 // 24 hours
        });

        return NextResponse.json({ success: true });
    }

    return NextResponse.json({ success: false }, { status: 401 });
}


