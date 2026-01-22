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
  {
    type: "video",
    src: "/saibuildingvideo.mp4",
    heading: "SHAPING BRIGHTER FUTURES", // New Slide 2
    subtext: "Nurturing Minds, Building Character",
  },
  {
    type: "video",
    src: "/saibuildingvideo.mp4",
    heading: "INNOVATING EDUCATION", // New Slide 3
    subtext: "Excellence in Every Endeavor",
  },
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMounted, setIsMounted] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const startTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
  };

  useEffect(() => {
    setIsMounted(true);
    startTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  if (!isMounted) {
    return (
      <div className="relative w-full h-screen overflow-hidden bg-black" />
    );
  }

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
            className="text-2xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-black text-white uppercase tracking-tighter mb-6 leading-none drop-shadow-lg whitespace-nowrap"
          >
            {(() => {
              const words = slides[currentSlide].heading.split(" ");
              return words.flatMap((word, wordIndex) => {
                const isLastWord = wordIndex === words.length - 1;
                const chars = word.split("").map((char, charIndex) => (
                  <motion.span
                    key={`${wordIndex}-${charIndex}`}
                    variants={letter}
                    className={isLastWord ? "text-[#8B0000]" : "text-white"}
                  >
                    {char}
                  </motion.span>
                ));

                if (wordIndex < words.length - 1) {
                  chars.push(
                    <motion.span key={`space-${wordIndex}`} variants={letter}>
                      &nbsp;
                    </motion.span>,
                  );
                }
                return chars;
              });
            })()}
            <motion.span
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
              className="inline-block w-2 h-10 md:h-14 lg:h-20 bg-[#DAA520] ml-2 align-middle"
            />
          </motion.h1>
        </div>
        <motion.p
          key={`sub-${currentSlide}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
          className="text-2xl md:text-4xl text-white/90 font-light mb-12 max-w-3xl"
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
            className="inline-block px-10 py-4 bg-[#8B0000] text-white font-bold uppercase tracking-widest text-sm hover:bg-black hover:text-white transition-colors duration-300 border border-[#8B0000] hover:border-black"
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
