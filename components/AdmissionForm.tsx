"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaPaperPlane, FaUser, FaEnvelope, FaPhone, FaGraduationCap, FaCheckCircle } from "react-icons/fa";

export default function AdmissionForm() {
    const [formData, setFormData] = useState({
        fullName: "",
        fatherName: "",
        email: "",
        phone: "",
        program: "Pre-Medical",
        matricCheck: false,
        marks: "",
    });

    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Simulate API call
        setTimeout(() => {
            setIsSubmitted(true);
        }, 1000);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    if (isSubmitted) {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white p-10 rounded-3xl shadow-2xl text-center max-w-lg mx-auto border-t-4 border-[#DAA520]"
            >
                <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-5xl mx-auto mb-6">
                    <FaCheckCircle />
                </div>
                <h2 className="text-3xl font-black text-[#800000] mb-4 uppercase">Application Received!</h2>
                <p className="text-gray-600 mb-8 text-lg">
                    Thank you for applying to Sir Adamjee Institute. Our admissions team will review your details and contact you shortly for the next steps.
                </p>
                <button
                    onClick={() => setIsSubmitted(false)}
                    className="text-[#800000] font-bold hover:underline"
                >
                    Submit Another Application
                </button>
            </motion.div>
        );
    }

    return (
        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.1)] border border-gray-100 max-w-3xl mx-auto relative overflow-hidden">
            {/* Decorative Blob */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#DAA520] opacity-5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

            <h2 className="text-3xl font-black text-[#800000] uppercase mb-2">Online Application</h2>
            <p className="text-gray-500 mb-8">Fill in the details below to start your admission process.</p>

            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div className="grid md:grid-cols-2 gap-6">
                    {/* Full Name */}
                    <div className="space-y-2">
                        <label className="text-sm font-bold text-gray-700 uppercase tracking-wider flex items-center gap-2">
                            <FaUser className="text-[#DAA520]" /> Full Name
                        </label>
                        <input
                            type="text"
                            name="fullName"
                            required
                            value={formData.fullName}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-[#800000] focus:ring-2 focus:ring-[#800000]/20 outline-none transition-all"
                            placeholder="Enter student's name"
                        />
                    </div>

                    {/* Father's Name */}
                    <div className="space-y-2">
                        <label className="text-sm font-bold text-gray-700 uppercase tracking-wider flex items-center gap-2">
                            <FaUser className="text-[#DAA520]" /> Father's Name
                        </label>
                        <input
                            type="text"
                            name="fatherName"
                            required
                            value={formData.fatherName}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-[#800000] focus:ring-2 focus:ring-[#800000]/20 outline-none transition-all"
                            placeholder="Enter father's name"
                        />
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    {/* Email */}
                    <div className="space-y-2">
                        <label className="text-sm font-bold text-gray-700 uppercase tracking-wider flex items-center gap-2">
                            <FaEnvelope className="text-[#DAA520]" /> Email Address
                        </label>
                        <input
                            type="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-[#800000] focus:ring-2 focus:ring-[#800000]/20 outline-none transition-all"
                            placeholder="student@example.com"
                        />
                    </div>

                    {/* Phone */}
                    <div className="space-y-2">
                        <label className="text-sm font-bold text-gray-700 uppercase tracking-wider flex items-center gap-2">
                            <FaPhone className="text-[#DAA520]" /> Phone Number
                        </label>
                        <input
                            type="tel"
                            name="phone"
                            required
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-[#800000] focus:ring-2 focus:ring-[#800000]/20 outline-none transition-all"
                            placeholder="0300-1234567"
                        />
                    </div>
                </div>

                {/* Program Selection */}
                <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 uppercase tracking-wider flex items-center gap-2">
                        <FaGraduationCap className="text-[#DAA520]" /> Desired Program
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        {["Pre-Medical", "Pre-Engineering", "Computer Science", "Commerce"].map((prog) => (
                            <label
                                key={prog}
                                className={`cursor-pointer border-2 rounded-xl p-3 text-center transition-all ${formData.program === prog
                                        ? "border-[#800000] bg-[#800000] text-white shadow-md transform scale-105"
                                        : "border-gray-100 bg-gray-50 text-gray-600 hover:border-[#DAA520]"
                                    }`}
                            >
                                <input
                                    type="radio"
                                    name="program"
                                    value={prog}
                                    checked={formData.program === prog}
                                    onChange={handleChange}
                                    className="hidden"
                                />
                                <span className="text-sm font-bold">{prog}</span>
                            </label>
                        ))}
                    </div>
                </div>

                {/* Academic Marks */}
                <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 uppercase tracking-wider flex items-center gap-2">
                        <FaPaperPlane className="text-[#DAA520]" /> Matric / O-Level Marks (%)
                    </label>
                    <input
                        type="number"
                        name="marks"
                        required
                        min="0"
                        max="100"
                        value={formData.marks}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-[#800000] focus:ring-2 focus:ring-[#800000]/20 outline-none transition-all"
                        placeholder="e.g. 85"
                    />
                    <p className="text-xs text-gray-400">* Please enter your expected or final percentage.</p>
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full bg-[#800000] text-white font-black uppercase tracking-widest py-4 rounded-xl hover:bg-[#DAA520] transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 flex items-center justify-center gap-3 mt-4"
                >
                    Submit Application <FaPaperPlane />
                </button>
            </form>
        </div>
    );
}
