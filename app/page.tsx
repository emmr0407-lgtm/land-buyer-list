export default function HomePage() {
    return (
        <div style={{ maxWidth: "500px", margin: "80px auto", textAlign: "center" }}>
            <h1>Land Buyer List</h1>
            <p>Join the list to get notified about land opportunities.</p>

            <a
                href="/submit"
                style={{
                    marginTop: "30px",
                    display: "inline-block",
                    padding: "10px 20px",
                    background: "#000",
                    color: "#fff",
                    textDecoration: "none",
                    borderRadius: "4px"
                }}
            >
                Join Buyer List
            </a>
        </div>
    );
}

