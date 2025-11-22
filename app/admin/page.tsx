"use client";

import { useState, useEffect } from "react";
import { supabase } from "../../lib/supabaseClient";
import LeadsTable from "../components/LeadsTable";
import { exportToCSV } from "../../lib/exportToCSV";

const ADMIN_PASSWORD = "secret123"; // You can change this

export default function AdminPage() {
    const [authenticated, setAuthenticated] = useState(false);
    const [passwordInput, setPasswordInput] = useState("");
    const [leads, setLeads] = useState([]);
    const [loading, setLoading] = useState(true);

    const handleLogin = () => {
        if (passwordInput === ADMIN_PASSWORD) {
            setAuthenticated(true);
            localStorage.setItem("admin-auth", "true");
        } else {
            alert("Incorrect password");
        }
    };

    useEffect(() => {
        const auth = localStorage.getItem("admin-auth");
        if (auth === "true") {
            setAuthenticated(true);
        }
    }, []);

    useEffect(() => {
        if (authenticated) {
            const fetchLeads = async () => {
                const { data } = await supabase
                    .from("buyers")
                    .select("*")
                    .order("created_at", { ascending: false });

                setLeads(data || []);
                setLoading(false);
            };

            fetchLeads();
        }
    }, [authenticated]);

    if (!authenticated) {
        return (
            <div style={{ maxWidth: "400px", margin: "80px auto", textAlign: "center" }}>
                <h1>Admin Login</h1>

                <input
                    type="password"
                    placeholder="Enter password"
                    value={passwordInput}
                    onChange={(e) => setPasswordInput(e.target.value)}
                    style={{ padding: "10px", width: "100%", marginTop: "20px" }}
                />

                <button
                    onClick={handleLogin}
                    style={{
                        marginTop: "20px",
                        padding: "10px",
                        background: "#000",
                        color: "#fff",
                        cursor: "pointer",
                        width: "100%"
                    }}
                >
                    Login
                </button>
            </div>
        );
    }

    const handleDownload = () => {
        exportToCSV(leads);
    };

    return (
        <div style={{ maxWidth: "800px", margin: "60px auto" }}>
            <h1>Admin Dashboard</h1>

            <button
                onClick={handleDownload}
                style={{
                    padding: "8px 16px",
                    background: "#0070f3",
                    color: "#fff",
                    border: "none",
                    borderRadius: "4px",
                    cursor: "pointer",
                    marginTop: "20px"
                }}
            >
                Download CSV
            </button>

            {loading ? (
                <p style={{ marginTop: "20px" }}>Loading leads…</p>
            ) : (
                <LeadsTable leads={leads} />
            )}
        </div>
    );
}

