"use client";

import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

interface RevealProps {
    children: React.ReactNode;
    width?: "fit-content" | "100%";
<<<<<<< HEAD
}

export default function RevealOnScroll({ children, width = "fit-content" }: RevealProps) {
=======
    className?: string;
    delay?: number;
}

export default function RevealOnScroll({ children, width = "fit-content", className = "", delay = 0.2 }: RevealProps) {
>>>>>>> 8380a61aaaea9922053889363695a7e5abea53b1
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });
    const mainControls = useAnimation();

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible");
        }
    }, [isInView, mainControls]);

    return (
<<<<<<< HEAD
        <div ref={ref} style={{ position: "relative", width, overflow: "hidden" }}>
=======
        <div ref={ref} className={className} style={{ position: "relative", width, overflow: "visible" }}>
>>>>>>> 8380a61aaaea9922053889363695a7e5abea53b1
            <motion.div
                variants={{
                    hidden: { opacity: 0, y: 75 },
                    visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate={mainControls}
<<<<<<< HEAD
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
=======
                transition={{ duration: 0.8, delay: delay, ease: "easeOut" }}
>>>>>>> 8380a61aaaea9922053889363695a7e5abea53b1
            >
                {children}
            </motion.div>
        </div>
    );
}
