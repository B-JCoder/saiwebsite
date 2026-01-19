"use client";

import React from "react";
import { motion } from "framer-motion";
import AdmissionForm from "@/components/AdmissionForm";
import PageHeader from "@/components/PageHeader";

export default function ApplyOnlinePage() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <PageHeader
                title="Start Your Journey"
                subtitle="Online Admissions"
                imageSrc="/images/imgi_2_Building.png"
            />

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
