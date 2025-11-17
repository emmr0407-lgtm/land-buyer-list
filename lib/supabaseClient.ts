import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// Debug: make sure env vars are actually loaded
if (!supabaseUrl || !supabaseKey) {
    console.error("❌ Supabase env vars missing", {
        supabaseUrl,
        hasKey: !!supabaseKey,
    });
} else {
    console.log("✅ Supabase env vars loaded", {
        urlStartsWith: supabaseUrl.slice(0, 30),
        keyLength: supabaseKey.length,
    });
}

export const supabase = createClient(supabaseUrl!, supabaseKey!);
