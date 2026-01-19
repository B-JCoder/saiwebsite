"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
    {
        type: "video",
        src: "/public/video sai.mp4", // Using the correct path relative to public for video, or absolute?
        // User verified /video sai.mp4 works. Next.js static files served from /
        // So src should be "/video sai.mp4".
        // I put "public/" in Step 170. Next.js maps `public/foo` to `/foo`.
        // So distinct path is `/video sai.mp4`.
        // Wait, Step 170 I moved it TO `public/`.
        // So I should access it as `/video sai.mp4`.
        source: "/video sai.mp4",
        heading: "We Reimagine Tomorrow",
        subtext: "Driving growth and molding the future through excellence.",
    },
    {
        type: "image",
        source: "https://picsum.photos/seed/building/1920/1080", // Placeholder
        heading: "State of the Art Campus",
        subtext: "A purposefully built environment for holistic learning.",
    },
    {
        type: "image",
        source: "https://picsum.photos/seed/students/1920/1080", // Placeholder
        heading: "Empowering Youth",
        subtext: "Creating the leaders of the next generation.",
    },
];

export default function SystemsHero() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const timerRef = useRef<NodeJS.Timeout | null>(null);

    // Auto-play Logic
    const startTimer = () => {
        if (timerRef.current) clearInterval(timerRef.current);
        timerRef.current = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);
    };

    useEffect(() => {
        startTimer();
        return () => {
            if (timerRef.current) clearInterval(timerRef.current);
        };
    }, []); // Run on mount

    // Manual Control Handlers
    const handleNext = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
        startTimer(); // Reset timer
    };

    const handlePrev = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
        startTimer(); // Reset timer
    };

    const handleDotClick = (index: number) => {
        setCurrentSlide(index);
        startTimer(); // Reset timer
    };

    return (
        <div className="relative w-full h-screen overflow-hidden bg-black">
            {/* Slides */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                    className="absolute inset-0 w-full h-full"
                >
                    {slides[currentSlide].type === "video" ? (
                        <video
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-full object-cover"
                        >
                            <source src={slides[currentSlide].source} type="video/mp4" />
                        </video>
                    ) : (
                        <img
                            src={slides[currentSlide].source}
                            alt="Slide"
                            className="w-full h-full object-cover"
                        />
                    )}

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
                </motion.div>
            </AnimatePresence>

            {/* Content - Left Aligned */}
            <div className="absolute inset-0 z-20 flex flex-col justify-center px-10 md:px-20 max-w-4xl">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentSlide}
                        initial={{ x: -50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: 50, opacity: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-black text-white uppercase tracking-tighter mb-4 leading-tight">
                            {slides[currentSlide].heading}
                        </h1>
                        <p className="text-xl md:text-2xl text-white/80 font-light mb-10 max-w-xl">
                            {slides[currentSlide].subtext}
                        </p>

                        <Link
                            href="/admissions"
                            className="inline-block px-10 py-4 bg-white text-black font-bold uppercase tracking-widest text-sm hover:bg-black hover:text-white transition-colors duration-300"
                        >
                            Explore More
                        </Link>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Navigation Arrows */}
            <button
                onClick={handlePrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-2 text-white/50 hover:text-white hover:bg-white/10 rounded-full transition-all"
            >
                <ChevronLeft size={48} strokeWidth={1} />
            </button>
            <button
                onClick={handleNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-2 text-white/50 hover:text-white hover:bg-white/10 rounded-full transition-all"
            >
                <ChevronRight size={48} strokeWidth={1} />
            </button>

            {/* Pagination Dots */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex gap-4">
                {slides.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => handleDotClick(idx)}
                        className={`h-2 rounded-full transition-all duration-300 ${idx === currentSlide ? "w-8 bg-white" : "w-2 bg-white/50 hover:bg-white/80"
                            }`}
                    />
                ))}
            </div>
        </div>
    );
}
