"use client";

import React from "react";
import { motion } from "framer-motion";

interface FloatingSectionProps {
    children: React.ReactNode;
    delay?: number;
    className?: string;
}

const FloatingSection: React.FC<FloatingSectionProps> = ({ children, delay = 0, className = "" }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
                duration: 0.8,
                delay: delay,
                ease: [0.22, 1, 0.36, 1] // Custom quintic ease-out for that "premium" feel
            }}
            className={`relative ${className}`}
        >
            <motion.div
                animate={{
                    y: [0, -10, 0],
                }}
                transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: delay * 2 // Offset float animations
                }}
            >
                {children}
            </motion.div>
        </motion.div>
    );
};

export default FloatingSection;
