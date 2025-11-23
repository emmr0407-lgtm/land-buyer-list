"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";

type Buyer = {
    id: string;
    name?: string;
    email?: string;
    phone?: string;
    created_at?: string;
};

export default function AdminPage() {
    const [buyers, setBuyers] = useState<Buyer[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    const fetchBuyers = async () => {
        setLoading(true);

        const { data, error } = await supabase
            .from("buyers")
            .select("*")
            .order("created_at", { ascending: false });

        if (error) {
            console.error("Error fetching buyers:", error);
            setBuyers([]);
        } else {
            setBuyers(data || []);
        }

        setLoading(false);
    };

    useEffect(() => {
        fetchBuyers();
    }, []);

    return (
        <div style={{ padding: "2rem" }}>
            <h1 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "1rem" }}>
                Admin Dashboard
            </h1>

            {loading ? (
                <p>Loading buyers...</p>
            ) : buyers.length === 0 ? (
                <p>No buyers found.</p>
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
                        {buyers.map((buyer) => (
                            <tr key={buyer.id}>
                                <td style={tdStyle}>{buyer.name || "-"}</td>
                                <td style={tdStyle}>{buyer.email || "-"}</td>
                                <td style={tdStyle}>{buyer.phone || "-"}</td>
                                <td style={tdStyle}>
                                    {buyer.created_at
                                        ? new Date(buyer.created_at).toLocaleDateString()
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



