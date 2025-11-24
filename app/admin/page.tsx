"use client";

import { useEffect, useState } from "react";

export default function AdminPage() {
    const [leads, setLeads] = useState([]);

    useEffect(() => {
        async function fetchLeads() {
            const res = await fetch("/api/export");
            const data = await res.json();
            setLeads(data);
        }
        fetchLeads();
    }, []);

    const thStyle: React.CSSProperties = {
        textAlign: "left",
        borderBottom: "2px solid #ddd",
        padding: "8px",
        fontWeight: "bold",
    };

    const tdStyle: React.CSSProperties = {
        padding: "8px",
        borderBottom: "1px solid #ddd",
    };

    return (
        <div style={{ padding: "40px" }}>
            <h1>Admin Dashboard</h1>

            <table style={{ width: "100%", borderCollapse: "collapse", marginTop: "20px" }}>
                <thead>
                    <tr>
                        <th style={thStyle}>Name</th>
                        <th style={thStyle}>Email</th>
                        <th style={thStyle}>Phone</th>
                        <th style={thStyle}>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {leads.map((lead: any, index: number) => (
                        <tr key={index}>
                            <td style={tdStyle}>{lead.name}</td>
                            <td style={tdStyle}>{lead.email}</td>
                            <td style={tdStyle}>{lead.phone}</td>
                            <td style={tdStyle}>{lead.created_at}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

