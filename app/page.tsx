export default function HomePage() {
    return (
        <main className="min-h-screen bg-white">
            {/* HERO SECTION */}
            <section className="w-full bg-gradient-to-b from-blue-600 to-blue-500 text-white py-24 px-6 text-center">
                <h1 className="text-5xl font-bold mb-6">
                    Sell Your Land Fast – Guaranteed Buyer Leads
                </h1>
                <p className="text-xl max-w-2xl mx-auto mb-10 opacity-90">
                    Build your own instant buyer list and start generating offers within days,
                    not months. No agents. No waiting. No stress.
                </p>

                <a
                    href="#join"
                    className="inline-block bg-white text-blue-600 font-semibold py-3 px-8 rounded-lg shadow-lg hover:bg-gray-100 transition"
                >
                    Build My Buyer List →
                </a>
            </section>

            {/* VALUE SECTION */}
            <section id="join" className="py-20 px-8 max-w-5xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-6">How It Works</h2>

                <div className="grid md:grid-cols-3 gap-10 mt-12">
                    <div className="p-6 border rounded-xl shadow-sm">
                        <h3 className="text-xl font-semibold mb-3">1. Enter Your Land Info</h3>
                        <p className="text-gray-600">
                            Submit your details so buyers know exactly what you’re offering.
                        </p>
                    </div>

                    <div className="p-6 border rounded-xl shadow-sm">
                        <h3 className="text-xl font-semibold mb-3">2. Get Added to Buyer List</h3>
                        <p className="text-gray-600">
                            We match your property to investors actively buying land.
                        </p>
                    </div>

                    <div className="p-6 border rounded-xl shadow-sm">
                        <h3 className="text-xl font-semibold mb-3">3. Receive Offers Fast</h3>
                        <p className="text-gray-600">
                            Buyers contact you directly — no middlemen or commissions.
                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
}
