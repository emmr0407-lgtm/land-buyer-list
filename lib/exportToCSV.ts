export function exportToCSV(leads: any[]) {
    const headers = ["Name", "Email", "Phone", "Created At"];

    const rows = leads.map((lead) => [
        lead.name || "",
        lead.email || "",
        lead.phone || "",
        lead.created_at || ""
    ]);

    const csvContent = [
        headers.join(","),
        ...rows.map((row) => row.join(","))
    ].join("\n");

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "buyers.csv");
    document.body.appendChild(link);

    link.click();
    document.body.removeChild(link);
}
