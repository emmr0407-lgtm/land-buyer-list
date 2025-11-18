import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabaseClient";

export async function POST(req: Request) {
    try {
        // Parse JSON body
        const body = await req.json();

        const {
            name,
            phone,
            email,
            location,
            acreage,
            budget
        } = body;

        // Validate required fields (basic check)
        if (!name || !phone || !email) {
            return NextResponse.json(
                { error: "Missing required fields" },
                { status: 400 }
            );
        }

        // Insert into Supabase
        const { error } = await supabase
            .from("buyer")
            .insert([
                {
                    name,
                    phone,
                    email,
                    location,
                    acreage,
                    budget
                }
            ]);

        if (error) {
            console.error("❌ Supabase Insert Error:", error);
            return NextResponse.json(
                { error: error.message },
                { status: 500 }
            );
        }

        return NextResponse.json(
            { message: "Success" },
            { status: 200 }
        );

    } catch (err: any) {
        console.error("❌ Route Error:", err);
        return NextResponse.json(
            { error: "Invalid JSON or server error" },
            { status: 500 }
        );
    }
}
