export default function Home() {
    return (
        <main className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-gray-800 px-6">
            <section className="text-center max-w-2xl">
                <h1 className="text-5xl font-bold mb-6">
                    Land Buyer List
                </h1>

                <p className="text-lg mb-8">
                    Submit your details and get instant access to motivated land buyers.
                </p>

                <a
                    href="/submit"
                    className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                    Get Started
                </a>
            </section>
        </main>
    );
}
