"use client";

import { useState } from "react";

export default function LoginPage() {
    const [password, setPassword] = useState("");

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        const res = await fetch("/api/login", {
            method: "POST",
            body: JSON.stringify({ password }),
        });

        if (res.ok) {
            window.location.href = "/admin";
        } else {
            alert("Incorrect password");
        }
    };

    return (
        <div style={{ padding: "40px" }}>
            <h1>Admin Login</h1>

            <form onSubmit={handleSubmit} style={{ marginTop: "20px" }}>
                <input
                    type="password"
                    placeholder="Enter Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    style={{ padding: "8px", width: "200px" }}
                />
                <button
                    type="submit"
                    style={{ marginLeft: "10px", padding: "8px 12px" }}
                >
                    Login
                </button>
            </form>
        </div>
    );
}


