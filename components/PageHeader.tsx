"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface PageHeaderProps {
    title: string;
    subtitle?: string;
    imageSrc: string;
    align?: "center" | "left";
}

export default function PageHeader({
    title,
    subtitle,
    imageSrc,
    align = "center",
}: PageHeaderProps) {
    return (
        <div className="relative w-full h-[60vh] min-h-[400px] overflow-hidden flex items-center justify-center bg-black">
            {/* Parallax Background Image */}
            <div className="absolute inset-0 w-full h-full">
                <Image
                    src={imageSrc}
                    alt={title}
                    fill
                    className="object-cover opacity-60"
                    priority
                />
                {/* Gradient Overlays for Readability and Depth */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/80" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.6)_100%)]" />
            </div>

            {/* Content */}
            <div
                className={`relative z-10 container mx-auto px-6 ${align === "left" ? "text-left" : "text-center"
                    }`}
            >
                {subtitle && (
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-[#DAA520] font-bold tracking-[0.3em] uppercase mb-4 text-sm md:text-base drop-shadow-md"
                    >
                        {subtitle}
                    </motion.p>
                )}

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                >
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-black text-white uppercase tracking-tighter leading-none drop-shadow-2xl">
                        {title}
                    </h1>

                    {/* Decorative Divider */}
                    <div className={`mt-6 h-1 w-24 bg-[#DAA520] rounded-full ${align === "center" ? "mx-auto" : ""}`} />
                </motion.div>
            </div>

            {/* Scroll Indicator (Optional, adds nice touch) */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-white/50 to-transparent" />
            </motion.div>
        </div>
    );
}
