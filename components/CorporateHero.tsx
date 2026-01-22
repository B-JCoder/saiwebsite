"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";

const CorporateHero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();

  // Parallax effect: Moves the background image slower than the foreground content
  // y range: Moves from 0 to 30% of scroll distance to create depth
  const y = useTransform(scrollY, [0, 1000], ["0%", "30%"]);
  const textY = useTransform(scrollY, [0, 500], ["0%", "50%"]);
  const opacity = useTransform(scrollY, [0, 600], [1, 0]);

  return (
    <div
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden bg-black"
    >
      {/* Parallax Background Image */}
      <motion.div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/imgi_2_Page1-scaled.jpg')",
          y: y,
          scale: 1.1, // Slight scale to prevent gaps at bottom when scrolling
        }}
      >
        {/* Overlay - Gradient from Maroon to Transparent */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#800000]/90 via-[#800000]/40 to-transparent z-10" />
        <div className="absolute inset-0 bg-black/20 z-10" />
      </motion.div>

      {/* Content with subtle parallax feeling */}
      <motion.div
        style={{ y: textY, opacity }}
        className="relative z-20 h-full flex flex-col justify-center px-6 md:px-16 lg:px-24"
      >
        <div className="relative z-10">
          <span className="text-[#DAA520] text-xl md:text-2xl font-bold uppercase tracking-widest mb-4 block">
            Welcome to Sir Adamjee Institute
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight mb-6 tracking-tight">
            Building <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#DAA520] to-yellow-200">
              Leaders.
            </span>
          </h1>

          <p className="text-lg md:text-2xl text-gray-200 mb-10 max-w-2xl font-light leading-relaxed">
            Empowering the next generation with quality education and moral
            integrity.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/Admissions">
              <button className="px-8 py-4 bg-white text-[#800000] text-sm md:text-base font-bold uppercase tracking-widest hover:bg-[#DAA520] hover:text-white transition-all duration-300">
                Admissions Open
              </button>
            </Link>
            <Link href="/about-us">
              <button className="px-8 py-4 border border-white text-white text-sm md:text-base font-bold uppercase tracking-widest hover:bg-white hover:text-[#800000] transition-all duration-300">
                Our Vision
              </button>
            </Link>
          </div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        style={{ opacity }} // Fades out on scroll
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 text-white flex flex-col items-center gap-2"
      >
        <span className="text-xs uppercase tracking-widest opacity-80">
          Scroll to Explore
        </span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent" />
      </motion.div>
    </div>
  );
};

export default CorporateHero;
