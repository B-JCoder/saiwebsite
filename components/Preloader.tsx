"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulate loading time or wait for window load
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000); // 2 seconds pulse

        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black"
                >
                    <div className="relative flex flex-col items-center">
                        {/* Pulsing Logo Effect */}
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{
                                scale: [0.8, 1.1, 1],
                                opacity: 1,
                                rotate: [0, 0, 0]
                            }}
                            transition={{ duration: 1.5, ease: "easeOut" }}
                            className="relative z-10"
                        >
                            <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter uppercase relative">
                                SAI
                                <span className="text-[#DAA520]">.</span>
                            </h1>
                        </motion.div>

                        {/* Loading Bar */}
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: "100px" }}
                            transition={{ duration: 1.5, ease: "easeInOut" }}
                            className="mt-4 h-1 bg-[#800000]"
                        />

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="mt-4 text-xs font-bold text-gray-500 uppercase tracking-[0.3em]"
                        >
                            Loading Experience
                        </motion.p>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
