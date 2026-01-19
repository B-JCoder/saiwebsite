"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import React, { useRef } from "react";

interface GlassCardProps {
    children: React.ReactNode;
    className?: string;
}

export default function GlassTiltCard({ children, className = "" }: GlassCardProps) {
    const ref = useRef<HTMLDivElement>(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseX = useSpring(x, { stiffness: 150, damping: 15 });
    const mouseY = useSpring(y, { stiffness: 150, damping: 15 });

    const rotateX = useTransform(mouseY, [-0.5, 0.5], ["15deg", "-15deg"]);
    const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-15deg", "15deg"]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();

        const width = rect.width;
        const height = rect.height;

        const mouseXPos = e.clientX - rect.left;
        const mouseYPos = e.clientY - rect.top;

        const xPct = mouseXPos / width - 0.5;
        const yPct = mouseYPos / height - 0.5;

        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
            }}
            className={`relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-xl overflow-hidden group ${className}`}
        >
            <div style={{ transform: "translateZ(50px)" }}>
                {children}
            </div>

            {/* Shine Effect */}
            <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-tr from-white/10 to-transparent" />
        </motion.div>
    );
}
