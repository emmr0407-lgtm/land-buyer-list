import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST(request: Request) {
    const { password } = await request.json();

    // Compare against your environment variable
    if (password === process.env.ADMIN_PASSWORD) {

        // Set login cookie
        cookies().set("admin-auth", "true", {
            httpOnly: true,
            path: "/",
            maxAge: 60 * 60 * 24, // 24 hours
        });

        return NextResponse.json({ success: true });
    }

    // Wrong password
    return NextResponse.json({ success: false }, { status: 401 });
}
