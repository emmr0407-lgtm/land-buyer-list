// app/layout.tsx
import "./globals.css";
import React from "react";

export const metadata = {
    title: "Land Buyers List",
    description: "Join the Land Buyers List",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}



