// app/api/login/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function POST(request: NextRequest) {
    try {
        const { password } = await request.json();

        if (password === process.env.ADMIN_PASSWORD) {
            // This is the correct way in Next.js 15+ / 16+
            // No need to await – cookies().set() is specially proxied
            cookies().set('auth', 'true', {
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production',
                sameSite: 'strict',
                path: '/',
                maxAge: 60 * 60 * 24, // 24 hours
            });

            return NextResponse.json({ success: true, authenticated: true });
        }

        return NextResponse.json({ error: 'Invalid password' }, { status: 401 });
    } catch (err) {
        return NextResponse.json({ error: 'Bad request' }, { status: 400 });
    }
}
    }
}


