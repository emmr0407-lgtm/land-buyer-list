"use client";

import { useState } from "react";

export default function Home() {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [location, setLocation] = useState("");
    const [acreage, setAcreage] = useState("");
    const [budget, setBudget] = useState("");
    const [saving, setSaving] = useState(false);

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setSaving(true);

        try {
            const response = await fetch("/api/submit", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name,
                    phone,
                    email,
                    location,
                    acreage,
                    budget,
                }),
            });

            const json = await response.json();

            if (!response.ok) {
                alert("Error: " + json.error);
            } else {
                alert("Success! Your info was saved.");
            }
        } catch (err: any) {
            alert("Error: " + err.message);
        }

        setSaving(false);
    }

    return (
        <div style={{ maxWidth: "700px", margin: "50px auto" }}>
            <h1 style={{ textAlign: "center", marginBottom: "30px" }}>
                Join the Land Buyers List
            </h1>

            <form onSubmit={handleSubmit}>
                <input
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    style={inputStyle}
                />

                <input
                    placeholder="Phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                    style={inputStyle}
                />

                <input
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    style={inputStyle}
                />

                <input
                    placeholder="Location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    required
                    style={inputStyle}
                />

                <input
                    placeholder="Desired Acreage"
                    value={acreage}
                    onChange={(e) => setAcreage(e.target.value)}
                    required
                    style={inputStyle}
                />

                <input
                    placeholder="Budget Range"
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                    required
                    style={inputStyle}
                />

                <button type="submit" style={buttonStyle} disabled={saving}>
                    {saving ? "Saving..." : "Submit"}
                </button>
            </form>
        </div>
    );
}

const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "12px",
    marginBottom: "15px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    fontSize: "16px",
};

const buttonStyle: React.CSSProperties = {
    width: "100%",
    padding: "14px",
    background: "#333",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    fontSize: "18px",
    cursor: "pointer",
};
