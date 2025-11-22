"use client";

import { useState } from "react";
import { supabase } from "../../lib/supabaseClient";

export default function SubmitPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const { data, error } = await supabase
            .from("buyers")
            .insert({
                name: formData.name,
                email: formData.email,
                phone: formData.phone
            });

        if (error) {
            console.error("Supabase insert error:", error);
            alert(`Submission failed: ${error.message}`);
            return;
        }

        alert("Submission received!");
        setFormData({ name: "", email: "", phone: "" });
    };

    return (
        <div style={{ maxWidth: "400px", margin: "50px auto" }}>
            <h1>Land Buyer Submission</h1>

            <form onSubmit={handleSubmit}>
                <label>Name</label>
                <input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />

                <label>Email</label>
                <input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />

                <label>Phone</label>
                <input
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                />

                <button type="submit" style={{ marginTop: "20px" }}>
                    Submit
                </button>
            </form>
        </div>
    );
}



