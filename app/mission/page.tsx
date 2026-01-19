"use client";

import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
  GraduationCap,
  Award,
  Heart,
  Building,
  Library,
  Microscope,
  Cpu,
  BookOpen,
  Quote,
} from "lucide-react";
import RevealOnScroll from "@/components/RevealOnScroll";

// --- Components ---

// 1. 3D Tilt Card
function TiltCard({
  title,
  text,
  gradientBorder,
}: {
  title: string;
  text: React.ReactNode;
  gradientBorder: string;
}) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 500, damping: 100 });
  const mouseY = useSpring(y, { stiffness: 500, damping: 100 });

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    const xPct = (clientX - left) / width - 0.5;
    const yPct = (clientY - top) / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  const rotateX = useTransform(mouseY, [-0.5, 0.5], [15, -15]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-15, 15]);

  return (
    <motion.div
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
<<<<<<< HEAD
      className={`relative h-full w-full rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 p-10 cursor-pointer shadow-xl`}
=======
      className={`relative h-full w-full rounded-3xl bg-white/10 backdrop-blur-md border ${gradientBorder} p-10 cursor-pointer shadow-xl`}
>>>>>>> 8380a61aaaea9922053889363695a7e5abea53b1
    >
      <div
        style={{ transform: "translateZ(50px)" }}
        className="flex flex-col h-full"
      >
        <h3 className="text-3xl font-black uppercase text-white mb-6">
          {title}
        </h3>
        <div className="text-lg leading-relaxed text-white/90 font-serif italic">
          {text}
        </div>
      </div>
    </motion.div>
  );
}

// 2. Spotlight Card
function SpotlightCard({
  icon: Icon,
  title,
}: {
  icon: any;
  title: string;
}) {
  const divRef = useRef<HTMLDivElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;
    const div = divRef.current;
    const rect = div.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleFocus = () => {
    setIsFocused(true);
    setOpacity(1);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setOpacity(0);
  };

  const handleMouseEnter = () => {
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative overflow-hidden rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md h-full flex flex-col items-center justify-center text-center group"
    >
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(218,165,32,0.1), transparent 40%)`,
        }}
      />

      {/* Icon with Gold Glow on Hover */}
      <div className="mb-4 text-[#800000] group-hover:text-[#DAA520] transition-colors duration-300">
        <Icon size={40} strokeWidth={1.5} />
      </div>

      <h4 className="font-bold text-gray-800 uppercase text-sm tracking-wider">
        {title}
      </h4>
    </div>
  );
}

export default function Mission() {
  return (
    <div className="bg-white min-h-screen">
      {/* 
        SECTION 1: HERO (Animated Gradient)
        Deep Red/Maroon Gradient.
      */}
      <section className="relative h-[80vh] w-full flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#500000] via-[#800000] to-[#300000] bg-[length:400%_400%] animate-gradient-pulse">
        {/* Subtle Overlay Pattern */}
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-repeat" />

        <div className="relative z-10 text-center px-4 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <span className="block text-[#DAA520] font-bold tracking-[0.5em] text-sm md:text-base mb-6 uppercase">
              Since 2005
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-black text-white leading-tight mb-8 uppercase tracking-tighter">
              Building Character,<br />
              <span className="text-white/80">Shaping Minds</span>
            </h1>
            <p className="text-white/60 text-xl font-light tracking-widest uppercase">
              Our Mission & Vision
            </p>
          </motion.div>
        </div>
      </section>

      {/* 
        SECTION 2: THE CORE (3D Tilt Cards)
        Negative margin to pull it up into Hero.
      */}
      <section className="relative z-20 -mt-24 pb-20 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-10 lg:gap-20 max-w-6xl mx-auto perspective-1000">
            {/* Card 1: Mission */}
            <div className="h-[400px]">
              <RevealOnScroll width="100%">
                <TiltCard
                  title="Our Mission"
                  gradientBorder="border-[#DAA520]/20"
                  text={
                    <>
                      "To provide an environment where students can discover their
                      potential and achieve{" "}
                      <span className="text-[#DAA520] font-bold">
                        academic excellence
                      </span>{" "}
                      while upholding moral values."
                    </>
                  }
                />
              </RevealOnScroll>
            </div>

            {/* Card 2: Vision */}
            <div className="h-[400px] mt-10 md:mt-20">
              <RevealOnScroll width="100%">
                <TiltCard
                  title="Our Vision"
                  gradientBorder="border-white/20"
                  text={
                    <>
                      "To provide{" "}
                      <span className="text-[#DAA520] font-bold">
                        Quality Education
                      </span>{" "}
                      for the Middle Class, empowering them to compete on a global
                      stage."
                    </>
                  }
                />
              </RevealOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* 
        SECTION 3: THE TRIBUTE
        Clean, Elegant. Photo Left, Text Right.
      */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            {/* Photo Placeholder */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative aspect-[4/5] bg-gray-200 rounded-sm overflow-hidden shadow-2xl"
            >
              {/* 
                 Using a placeholder image representing "Tribute" / "Character Building".
                 Ideally a founder image.
               */}
              <img
                src="/images/imgi_10_Page9-scaled.jpg"
                alt="Tribute"
                className="absolute inset-0 w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 border-[1px] border-[#800000]/20 m-4" />
            </motion.div>

            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-[#800000] font-bold uppercase tracking-[0.2em] mb-4 block">
                A Tribute
              </span>
              <Quote className="text-[#DAA520] w-12 h-12 mb-6 opacity-50" />
              <h2 className="text-4xl md:text-5xl font-serif text-black leading-tight italic">
                "Education for the sake of character building."
              </h2>
              <div className="w-20 h-1 bg-[#800000] mt-8" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 
        SECTION 4: FEATURES GRID (Spotlight Effect)
      */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-black text-[#800000] uppercase mb-16 tracking-tight">
            Why Choose SAI?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {/* Features from components/Features.tsx which user requested to use */}
            {[
              { title: "Quality Education", icon: GraduationCap, desc: "Academic excellence at an affordable fee." },
              { title: "Merit Scholarship", icon: Award, desc: "Financial assistance for bright minds." },
              { title: "Equipped Labs", icon: Microscope, desc: "State-of-the-art physics & chemistry labs." },
              { title: "IT Training", icon: Cpu, desc: "Advanced computer science curriculum." },
              { title: "Huge Campus", icon: Building, desc: "Purpose built campus with all facilities." },
              { title: "Character Building", icon: Heart, desc: "Fostering discipline and moral values." },
            ].map((feature, idx) => (
              <SpotlightCard key={idx} title={feature.title} icon={feature.icon} />
            ))}
          </div>
        </div>
      </section>

      {/* Custom Keyframe Styles insertion for Tailwind pulse if needed, or we rely on tailwind.config 
          'animate-gradient-pulse' is conceptually a custom animation. 
          I'll stick to 'animate-pulse' or just a slow pan if gradient-pulse is not defined.
          Actually, I can add a style tag for the gradient animation just to be safe and award-winning.
      */}
      <style jsx global>{`
        @keyframes gradient-pulse {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient-pulse {
          animation: gradient-pulse 15s ease infinite;
        }
        .perspective-1000 {
            perspective: 1000px;
        }
      `}</style>
    </div>
  );
}