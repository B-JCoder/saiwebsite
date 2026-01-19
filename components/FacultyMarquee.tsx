"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

// Need to install react-tilt first or use a custom hook.
// Since I cannot install packages easily without confirmation, I will use a simple CSS 3D transform on hover or a Framer Motion 3D effect.
// User suggested "react-tilt". I will try to impl simple motion logic or use valid CSS perspective.
// Actually, I can use the existing 'GlassTiltCard' logic if it's generic, or just add a Tilt wrapper.
// Let's use a custom lightweight Tilt component here to avoid new deps if possible, or assume react-tilt is available?
// I'll stick to Framer Motion useMotionValue for Tilt if I want to be safe, OR just use the 'Tilt' component if I have one.
// I'll check 'components/GlassTiltCard.tsx' to see how I did it there.
// I'll use a local Tilt logic.

import { useRef, useState } from "react";
import { useMotionValue, useSpring, useTransform } from "framer-motion";

function TiltCard({ children }: { children: React.ReactNode }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 150, damping: 15 });
  const mouseY = useSpring(y, { stiffness: 150, damping: 15 });

  function onMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    x.set(clientX - left - width / 2);
    y.set(clientY - top - height / 2);
  }

  function onMouseLeave() {
    x.set(0);
    y.set(0);
  }

  const rotateX = useTransform(mouseY, [-100, 100], [10, -10]); // Reverse for natural tilt
  const rotateY = useTransform(mouseX, [-100, 100], [-10, 10]);

  return (
    <motion.div
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className="relative"
      whileHover={{ scale: 1.05 }}
    >
      {children}
    </motion.div>
  );
}

// Faculty Data
const facultyMembers = [
  {
    name: "Prof. S. Qutubuddin Hayder",
    designation: "Vice Principal",
    image: "/images/Faculty/imgi_6_Qutub.png",
  },
  {
    name: "Prof. Humaira Qayyum",
    designation: "HOD Commerce",
    image: "/images/Faculty/imgi_7_Humeria.png",
  },
  {
    name: "Prof. M. Irfan Qureshi",
    designation: "HOD English",
    image: "/images/Faculty/imgi_11_Irfan.png",
  },
  {
    name: "Prof. Sohail Ibrahim",
    designation: "HOD Physics",
    image: "/images/Faculty/imgi_21_Sohail_Ibrahim.png",
  },
  {
    name: "Prof. Pervez",
    designation: "Senior Faculty",
    image: "/images/Faculty/imgi_22_Pervez.png",
  },
  {
    name: "Prof. Kamran",
    designation: "Senior Faculty",
    image: "/images/Faculty/imgi_24_Kamran.png",
  },
  {
    name: "Ms. Erum",
    designation: "Senior Faculty",
    image: "/images/Faculty/imgi_16_Erum.png",
  },
];

export default function FacultyMarquee() {
  return (
    <section className="py-24 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-6 mb-12 text-center">
        <h2 className="text-4xl md:text-5xl font-heading font-black text-[#800000] uppercase tracking-tighter">
          Distinguished Faculty
        </h2>
        <div className="w-24 h-1 bg-[#DAA520] mx-auto mt-4 rounded-full" />
      </div>

      {/* Marquee Container */}
      <div className="relative w-full overflow-hidden group">
        {/* Gradient Masks */}
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none" />

        {/* Infinite Marquee via CSS */}
        <div className="flex w-max animate-marquee hover:[animation-play-state:paused] pl-8 gap-8 md:gap-12">
          {[...facultyMembers, ...facultyMembers, ...facultyMembers].map(
            (member, i) => (
              <FacultyCard key={i} member={member} />
            )
          )}
        </div>
      </div>

      <style jsx global>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.33%);
          }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
      `}</style>
    </section>
  );
}

function FacultyCard({ member }: { member: any }) {
  return (
    <TiltCard>
      <div className="relative w-[300px] h-[400px] flex-shrink-0 rounded-2xl overflow-hidden cursor-pointer group border border-transparent hover:border-[#DAA520]/50 transition-all duration-300 shadow-md hover:shadow-[0_0_30px_rgba(218,165,32,0.3)] bg-white">
        {/* Image */}
        <Image
          src={member.image}
          alt={member.name}
          fill
          className="object-cover transition-all duration-500"
        />

        {/* Glass Overlay for Text */}
        <div className="absolute bottom-0 left-0 right-0 bg-white/10 backdrop-blur-md border-t border-white/20 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
          <h3 className="text-lg font-bold text-white group-hover:text-[#DAA520] transition-colors drop-shadow-md">
            {member.name}
          </h3>
          <p className="text-sm text-white/80 font-medium tracking-wide">
            {member.designation}
          </p>
        </div>

        {/* Shine Effect */}
        <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none mix-blend-overlay" />
      </div>
    </TiltCard>
  );
}
