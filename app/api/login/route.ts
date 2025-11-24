import { NextResponse } from "next/server";

export async function POST(req: Request) {
    const { password } = await req.json();

    // Check the password against your env var
    if (password === process.env.ADMIN_PASSWORD) {
        const res = NextResponse.json({ success: true });

        // Set an auth cookie
        res.cookies.set("auth", "true", {
            httpOnly: true,
            path: "/",
        });

        return res;
    }

    return NextResponse.json({ success: false }, { status: 401 });
}


