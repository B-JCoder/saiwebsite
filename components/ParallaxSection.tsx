"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface ParallaxProps {
    children: React.ReactNode;
    bgImage?: string;
    className?: string;
}

export default function ParallaxSection({ children, bgImage, className = "" }: ParallaxProps) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

    return (
        <div ref={ref} className={`relative overflow-hidden ${className}`}>
            {bgImage && (
                <motion.div
                    style={{ y, backgroundImage: `url(${bgImage})` }}
                    className="absolute inset-0 w-full h-[120%] -top-[10%] bg-cover bg-center z-0"
                />
            )}
            <div className="relative z-10">
                {children}
            </div>
        </div>
    );
}
