import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST() {
    const cookieStore = cookies();
    cookieStore.set("auth", "", {
        expires: new Date(0),
        path: "/",
    });

    return NextResponse.json({ success: true });
}