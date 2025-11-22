type Lead = {
    id: string;
    name: string | null;
    email: string | null;
    phone: string | null;
    created_at: string | null;
};

type LeadsTableProps = {
    leads: Lead[];
};

export default function LeadsTable({ leads }: LeadsTableProps) {
    if (!leads || leads.length === 0) {
        return <p>No leads found.</p>;
    }

    return (
        <table
            style={{
                width: "100%",
                borderCollapse: "collapse",
                marginTop: "20px"
            }}
        >
            <thead>
                <tr>
                    <th style={cellHeaderStyle}>Name</th>
                    <th style={cellHeaderStyle}>Email</th>
                    <th style={cellHeaderStyle}>Phone</th>
                    <th style={cellHeaderStyle}>Created At</th>
                </tr>
            </thead>
            <tbody>
                {leads.map((lead) => (
                    <tr key={lead.id}>
                        <td style={cellStyle}>{lead.name}</td>
                        <td style={cellStyle}>{lead.email}</td>
                        <td style={cellStyle}>{lead.phone}</td>
                        <td style={cellStyle}>
                            {lead.created_at
                                ? new Date(lead.created_at).toLocaleString()
                                : ""}
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

const cellHeaderStyle: React.CSSProperties = {
    borderBottom: "2px solid #000",
    padding: "8px",
    textAlign: "left"
};

const cellStyle: React.CSSProperties = {
    borderBottom: "1px solid #ddd",
    padding: "8px",
    fontSize: "14px"
};
