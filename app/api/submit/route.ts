import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export async function POST(req: Request) {
    try {
        const body = await req.json();

        const supabase = createClient(
            process.env.PUBLIC_SUPABASE_URL!,
            process.env.PUBLIC_SUPABASE_ANON_KEY!
        );

        const { data, error } = await supabase
            .from("land_leads")
            .insert([body]);

        if (error) throw error;

        return NextResponse.json({ message: "Success", data });
    } catch (err: any) {
        return NextResponse.json(
            { error: err.message },
            { status: 500 }
        );
    }
}

