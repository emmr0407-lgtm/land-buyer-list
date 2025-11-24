"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";

interface Lead {
    id: string;
    name: string;
    email: string;
    phone: string;
    created_at: string;
}

export default function AdminPage() {
    const [leads, setLeads] = useState<Lead[]>([]);
    const [loading, setLoading] = useState(true);

    const fetchLeads = async () => {
        const { data, error } = await supabase
            .from("buyers")
            .select("*")
            .order("created_at", { ascending: false });

        if (!error && data) {
            setLeads(data as Lead[]);
        }

        setLoading(false);
    };

    useEffect(() => {
        fetchLeads();
    }, []);

    return (
        <div style={{ padding: "40px" }}>
            <h1 style={{ fontSize: "32px", fontWeight: "bold", marginBottom: "20px" }}>
                Buyer Leads
            </h1>

            {loading ? (
                <p>Loading...</p>
            ) : leads.length === 0 ? (
                <p>No leads found.</p>
            ) : (
                <table
                    style={{
                        width: "100%",
                        borderCollapse: "collapse",
                        border: "1px solid #ddd",
                    }}
                >
                    <thead>
                        <tr style={{ background: "#f5f5f5", textAlign: "left" }}>
                            <th style={thStyle}>Name</th>
                            <th style={thStyle}>Email</th>
                            <th style={thStyle}>Phone</th>
                            <th style={thStyle}>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {leads.map((lead) => (
                            <tr key={lead.id}>
                                <td style={tdStyle}>{lead.name}</td>
                                <td style={tdStyle}>{lead.email}</td>
                                <td style={tdStyle}>{lead.phone}</td>
                                <td style={tdStyle}>
                                    {new Date(lead.created_at).toLocaleString()}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}

const thStyle = {
    padding: "10px",
    borderBottom: "2px solid #000",
    fontWeight: "bold",
};

const tdStyle = {
    padding: "8px",
    borderBottom: "1px solid #ddd",
};
