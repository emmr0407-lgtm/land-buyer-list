import { NextResponse } from "next/server";

export async function POST(req: Request) {
    const { password } = await req.json();

    // Check password
    if (password === process.env.ADMIN_PASSWORD) {
        const response = NextResponse.json({ success: true });

        // ✅ Correct cookie handling
        response.cookies.set("admin-auth", "true", {
            httpOnly: true,
            path: "/",
        });

        return response;
    }

    return NextResponse.json({ success: false }, { status: 401 });
}

