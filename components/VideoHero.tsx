"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function VideoHero() {
    return (
        <div className="relative w-full h-screen overflow-hidden">
            {/* Video Background */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
            >
                <source src="/video_sai.mp4" type="video/mp4" />
                {/* Fallback if video fails */}
                Your browser does not support the video tag.
            </video>

            {/* Cinematic Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/80 z-10" />

            {/* Hero Content */}
            <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-6">
                <div className="flex flex-col items-center">
                    {/* Split Text Animation */}
                    <div className="flex flex-col md:flex-row gap-2 md:gap-6 overflow-hidden">
                        <motion.h1
                            initial={{ x: "-100%", opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="text-6xl md:text-8xl font-heading font-extrabold text-white uppercase tracking-tighter drop-shadow-lg"
                        >
                            Building
                        </motion.h1>
                        <motion.h1
                            initial={{ x: "100%", opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="text-6xl md:text-8xl font-heading font-extrabold text-white uppercase tracking-tighter drop-shadow-lg"
                        >
                            Leaders
                        </motion.h1>
                    </div>

                    <motion.div
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.8, duration: 0.8 }}
                        className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-12"
                    >
                        <Link
                            href="/admissions"
                            className="px-8 py-4 bg-yellow-500 text-black font-bold text-lg uppercase tracking-wider rounded border border-yellow-500 hover:-translate-y-1 transition-transform duration-300 shadow-[0_0_20px_rgba(218,165,32,0.4)]"
                        >
                            Admissions Open
                        </Link>
                        <Link
                            href="/about-us"
                            className="px-8 py-4 bg-transparent text-white font-bold text-lg uppercase tracking-wider rounded border border-white backdrop-blur-sm hover:bg-white/10 transition-colors duration-300"
                        >
                            Explore SAI
                        </Link>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
            >
                <div className="w-[1px] h-20 bg-gradient-to-b from-white to-transparent mx-auto" />
                <span className="text-white/50 text-xs uppercase tracking-[0.3em] mt-2 block">Scroll</span>
            </motion.div>
        </div>
    );
}
