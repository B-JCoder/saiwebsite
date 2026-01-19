"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Local Data ONLY
const slides = [
  {
    type: "video",
    src: "/saibuildingvideo.mp4",
    heading: "GATEWAY TO EXCELLENCE",
    subtext: "Where Legacy Meets Future",
  },
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const startTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
  };

  useEffect(() => {
    startTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const resetTimer = () => startTimer();

  const nextSlide = () => {
    setCurrentSlide((p) => (p + 1) % slides.length);
    resetTimer();
  };
  const prevSlide = () => {
    setCurrentSlide((p) => (p - 1 + slides.length) % slides.length);
    resetTimer();
  };
  const goToSlide = (i: number) => {
    setCurrentSlide(i);
    resetTimer();
  };

  // Typewriter Variants
  const sentence = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
        staggerChildren: 0.08,
      },
    },
  };
  const letter = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black group">
      {/* Slides */}
      <AnimatePresence>
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
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
              <source src={slides[currentSlide].src} type="video/mp4" />
            </video>
          ) : (
            <div
              className="w-full h-full bg-cover bg-center transition-transform duration-[10s] ease-in-out scale-110"
              style={{ backgroundImage: `url('${slides[currentSlide].src}')` }}
            />
          )}
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="absolute inset-0 z-20 flex flex-col justify-end items-center pb-64 px-4 md:px-24 text-center mx-auto w-full max-w-7xl">
        <div className="overflow-hidden">
          <motion.h1
            key={currentSlide} // Key change triggers re-render & animation reset
            variants={sentence}
            initial="hidden"
            animate="visible"
            className="text-xl md:text-7xl lg:text-8xl font-heading font-black text-white uppercase tracking-tighter mb-4 leading-tight drop-shadow-lg"
          >
            {slides[currentSlide].heading.split("").map((char, index) => (
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
        </div>
        <motion.p
          key={`sub-${currentSlide}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
          className="text-xl md:text-2xl text-white/80 font-light mb-10 max-w-xl"
        >
          {slides[currentSlide].subtext}
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <Link
            href="/about-us"
            className="inline-block px-10 py-4 bg-white text-black font-bold uppercase tracking-widest text-sm hover:bg-black hover:text-white transition-colors duration-300 border border-white"
          >
            About Us
          </Link>
        </motion.div>
      </div>

      {/* Controls */}
      {/* <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      >
        <ChevronLeft
          className="text-white/70 hover:text-white transition-colors"
          size={60}
          strokeWidth={1}
        />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      >
        <ChevronRight
          className="text-white/70 hover:text-white transition-colors"
          size={60}
          strokeWidth={1}
        />
      </button> */}

      {/* Dots */}
      {/* <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-30 flex gap-4">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goToSlide(idx)}
            className={`h-1.5 transition-all duration-300 ${
              idx === currentSlide
                ? "w-12 bg-white"
                : "w-4 bg-white/40 hover:bg-white/80"
            }`}
          />
        ))}
      </div> */}
    </div>
  );
}
