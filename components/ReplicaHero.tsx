"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";

const ReplicaHero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);

  return (
    <div className="relative min-h-screen w-full bg-[#800000] overflow-hidden flex items-center justify-center">
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_#990000_0%,_#660000_50%,_#4d0000_100%)]" />

      {/* Animated Particles/Orbs (Glass Effect) */}
      <motion.div
        style={{ y: y1, x: -50 }}
        className="absolute top-20 left-[10%] w-64 h-64 bg-[#DAA520]/20 rounded-full blur-[100px] pointer-events-none"
      />
      <motion.div
        style={{ y: y2, x: 50 }}
        className="absolute bottom-20 right-[10%] w-96 h-96 bg-[#DAA520]/10 rounded-full blur-[120px] pointer-events-none"
      />

      <div className="container px-4 md:px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center pt-20">

        {/* Text Content - Floating & Staggered */}
        <div className="flex flex-col items-start gap-6 text-left">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-block px-4 py-1 rounded-full border border-[#DAA520]/30 bg-[#DAA520]/10 text-[#DAA520] text-sm uppercase tracking-[0.2em] mb-4 backdrop-blur-sm">
              Welcome to Excellence
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold tracking-tighter text-white leading-[1.1]"
          >
            We Don't Just Teach. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#DAA520] to-[#FDB931]">
              We Transform.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-lg md:text-xl text-white/80 max-w-[600px] leading-relaxed"
          >
            Sir Adamjee Institute offers a world-class education with a legacy of 21+ years.
            Join the ranks of our 9000+ successful alumni.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-wrap gap-4"
          >
            <Button size="lg" className="bg-[#DAA520] text-[#800000] hover:bg-white hover:text-[#800000] rounded-full px-8 py-6 text-lg font-semibold shadow-[0_0_20px_rgba(218,165,32,0.4)] transition-all duration-300 hover:scale-105">
              Apply Now
            </Button>
            <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 hover:border-white rounded-full px-8 py-6 text-lg backdrop-blur-sm transition-all duration-300">
              Virtual Tour
            </Button>
          </motion.div>
        </div>

        {/* Visual/Image Content - Floating Cards */}
        <div className="relative w-full h-[500px] flex items-center justify-center">
          {/* Main Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ delay: 0.4, duration: 1, type: "spring" }}
            className="relative z-20 w-[80%] aspect-[4/5] bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-3xl backdrop-blur-md shadow-2xl p-6 flex flex-col justify-end overflow-hidden group"
          >
            {/* Image Placeholder */}
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500" />
            <div className="absolute inset-0 flex items-center justify-center text-white/10 font-black text-9xl select-none">SAI</div>

            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-white mb-2">Future Leaders</h3>
              <div className="h-1 w-20 bg-[#DAA520] mb-4" />
              <p className="text-white/80 text-sm">Empowering the next generation with knowledge and character.</p>
            </div>
          </motion.div>

          {/* Floating Badge */}
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-10 right-0 z-30 bg-white/10 backdrop-blur-xl border border-white/20 p-4 rounded-2xl shadow-xl"
          >
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-[#DAA520] flex items-center justify-center text-[#800000] font-bold">21+</div>
              <div>
                <p className="text-xs text-white/60 uppercase tracking-wider">Years of</p>
                <p className="text-white font-bold">Excellence</p>
              </div>
            </div>
          </motion.div>
        </div>

      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-white/50 uppercase tracking-widest">Scroll</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-[1px] h-12 bg-gradient-to-b from-[#DAA520] to-transparent"
        />
      </motion.div>
    </div>
  );
};

export default ReplicaHero;
