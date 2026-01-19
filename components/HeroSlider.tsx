"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function HeroSlider() {
    const phrases = [
        "WE REIMAGINE TOMORROW",
        "WE SHAPE THE FUTURE",
        "WE EMPOWER MINDS",
        "WE BUILD LEGACIES"
    ];

    const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    // Typewriter Variants
    const sentence = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.05,
            },
        },
        exit: {
            opacity: 0,
            y: -20,
            transition: {
                duration: 0.5
            }
        }
    };
    const letter = {
        hidden: { opacity: 0, y: 50, rotateX: -90 },
        visible: {
            opacity: 1,
            y: 0,
            rotateX: 0,
            transition: { type: "spring" as const, damping: 12, stiffness: 200 }
        },
    };

    return (
        <div className="relative w-full h-screen overflow-hidden bg-black group">
            {/* Background Video */}
            <div className="absolute inset-0 w-full h-full">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                >
                    <source src="/video_sai.mp4?v=2" type="video/mp4" />
                </video>
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
            </div>

            {/* Content */}
            <div className="absolute inset-0 z-20 flex flex-col justify-center px-10 md:px-20 max-w-5xl">
                <div className="overflow-hidden">
                    <AnimatePresence mode="wait">
                        <motion.h1
                            key={currentPhraseIndex}
                            variants={sentence}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            className="text-5xl md:text-7xl lg:text-8xl font-heading font-black text-white uppercase tracking-tighter mb-4 leading-tight drop-shadow-lg min-h-[1.2em]"
                        >
                            {phrases[currentPhraseIndex].split("").map((char, index) => (
                                <motion.span key={index} variants={letter}>
                                    {char}
                                </motion.span>
                            ))}
                            <motion.span
                                animate={{ opacity: [0, 1, 0] }}
                                transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                                className="inline-block w-3 h-12 md:h-16 lg:h-20 bg-[#DAA520] ml-2 align-middle"
                            />
                        </motion.h1>
                    </AnimatePresence>
                </div>
                <motion.p
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1, duration: 1 }}
                    className="text-xl md:text-2xl text-white/80 font-light mb-10 max-w-xl"
                >
                    Driving growth and molding the future through excellence.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5 }}
                >
                    <Link
                        href="/admissions"
                        className="inline-block px-10 py-4 bg-white text-black font-bold uppercase tracking-widest text-sm hover:bg-black hover:text-white transition-colors duration-300 border border-white"
                    >
                        Explore More
                    </Link>
                </motion.div>
            </div>
        </div>
    );
}
