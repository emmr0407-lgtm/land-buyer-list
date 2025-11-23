import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export async function POST(req: Request) {
    try {
        const body = await req.json();

        const supabase = createClient(
            process.env.NEXT_PUBLIC_SUPABASE_URL!,
            process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
        );

        const { data, error } = await supabase
            .from("buyers")
            .insert([body]);

        if (error) throw error;

        return NextResponse.json({ message: "Success", data });
    } catch (err: any) {
        console.error("Submit API Error:", err.message);
        return NextResponse.json(
            { error: err.message },
            { status: 500 }
        );
    }
}


