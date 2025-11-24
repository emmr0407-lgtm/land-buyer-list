"use client";

import { useState } from "react";

export default function LoginPage() {
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleLogin = async () => {
        const res = await fetch("/api/login", {
            method: "POST",
            body: JSON.stringify({ password }),
        });

        if (res.ok) {
            window.location.href = "/admin";
        } else {
            setError("Invalid password");
        }
    };

    return (
        <div style={{ padding: "2rem", maxWidth: "400px", margin: "auto" }}>
            <h1 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "1rem" }}>
                Admin Login
            </h1>
            <input
                type="password"
                placeholder="Enter admin password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{
                    width: "100%",
                    padding: "8px",
                    marginBottom: "1rem",
                    border: "1px solid #ccc",
                    borderRadius: "6px",
                }}
            />
            <button
                onClick={handleLogin}
                style={{
                    padding: "8px 16px",
                    backgroundColor: "#000",
                    color: "#fff",
                    border: "none",
                    cursor: "pointer",
                    borderRadius: "6px",
                    fontWeight: "bold",
                    width: "100%",
                }}
            >
                Login
            </button>
            {error && <p style={{ color: "red", marginTop: "1rem" }}>{error}</p>}
        </div>
    );
}

