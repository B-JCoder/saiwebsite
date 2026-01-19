"use client";

import React from "react";
import { motion } from "framer-motion";
import AdmissionForm from "@/components/AdmissionForm";

export default function ApplyOnlinePage() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-[#800000]">
                    {/* Overlay & Pattern */}
                    <div className="absolute inset-0 bg-black/50" />
                    {/* Using a pattern or a relevant image */}
                    <div className="absolute inset-0 opacity-20 bg-[url('/images/imgi_2_Building.png')] bg-cover bg-center" />
                </div>

                <div className="relative z-10 text-center px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="block text-[#DAA520] font-bold tracking-[0.3em] uppercase mb-4">
                            Online Admissions
                        </span>
                        <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter">
                            Start Your Journey
                        </h1>
                    </motion.div>
                </div>
            </section>

            {/* Form Section */}
            <section className="py-20 container mx-auto px-6 relative">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <AdmissionForm />
                </motion.div>
            </section>
        </div>
    );
}
