import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST() {
    cookies().set("admin-auth", "", {
        path: "/",
        expires: new Date(0),
    });

    return NextResponse.json({ success: true });
}

