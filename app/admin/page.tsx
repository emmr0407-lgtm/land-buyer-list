"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";

type Lead = {
    id: string;
    name?: string;
    email?: string;
    phone?: string;
    created_at?: string;
};

export default function AdminPage() {
    const [leads, setLeads] = useState<Lead[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    const fetchLeads = async () => {
        setLoading(true);

        const { data, error } = await supabase
            .from("leads")
            .select("*")
            .order("created_at", { ascending: false });

        if (error) {
            console.error("Error fetching leads:", error);
            setLeads([]);
        } else {
            setLeads(data || []);
        }

        setLoading(false);
    };

    useEffect(() => {
        fetchLeads();
    }, []);

    return (
        <div style={{ padding: "2rem" }}>
            <h1 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "1rem" }}>
                Admin Dashboard
            </h1>

            {loading ? (
                <p>Loading leads...</p>
            ) : leads.length === 0 ? (
                <p>No leads found.</p>
            ) : (
                <table
                    style={{
                        width: "100%",
                        borderCollapse: "collapse",
                        marginTop: "1rem",
                    }}
                >
                    <thead>
                        <tr>
                            <th style={thStyle}>Name</th>
                            <th style={thStyle}>Email</th>
                            <th style={thStyle}>Phone</th>
                            <th style={thStyle}>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {leads.map((lead) => (
                            <tr key={lead.id}>
                                <td style={tdStyle}>{lead.name || "-"}</td>
                                <td style={tdStyle}>{lead.email || "-"}</td>
                                <td style={tdStyle}>{lead.phone || "-"}</td>
                                <td style={tdStyle}>
                                    {lead.created_at
                                        ? new Date(lead.created_at).toLocaleDateString()
                                        : "-"}
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
    textAlign: "left" as const,
    borderBottom: "2px solid #ddd",
    padding: "8px",
    fontWeight: "bold",
};

const tdStyle = {
    borderBottom: "1px solid #eee",
    padding: "8px",
};


