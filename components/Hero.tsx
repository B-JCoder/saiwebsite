"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { FaPlay } from "react-icons/fa";

const Hero = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const yText = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacityText = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    return (
        <section ref={containerRef} className="relative w-full h-screen overflow-hidden bg-black">

            {/* Cinematic Video Background */}
            <div className="absolute inset-0 z-0">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover opacity-60"
                    poster="/imgaes/imgi_2_Page1-scaled.jpg"
                >
                    <source src="/imgaes/video_placeholder.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-primary/90"></div>
            </div>

            {/* Massive Typography Mask / Overlay */}
            <motion.div
                style={{ y: yText, opacity: opacityText }}
                className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-4"
            >
                <div className="relative">
                    <motion.h1
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="text-[12vw] leading-[0.85] font-black uppercase text-transparent bg-clip-text bg-gradient-to-b from-white/90 to-white/10 tracking-tighter select-none mix-blend-overlay"
                    >
                        SIR ADAMJEE
                    </motion.h1>
                    <motion.h1
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                        className="text-[12vw] leading-[0.85] font-black uppercase text-white tracking-tighter select-none mt-[-2vw] drop-shadow-2xl"
                    >
                        INSTITUTE
                    </motion.h1>
                </div>

                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                    className="mt-12 flex flex-col items-center gap-6"
                >
                    <p className="text-xl md:text-2xl text-gray-200 max-w-xl font-medium tracking-wide">
                        Where Legacy Meets Future
                    </p>

                    <button className="group flex items-center gap-4 px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full border border-white/20 transition-all hover:scale-105">
                        <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-primary pl-1 group-hover:rotate-90 transition-transform duration-500">
                            <FaPlay />
                        </div>
                        <span className="text-sm font-bold uppercase tracking-widest text-white">Watch The Film</span>
                    </button>
                </motion.div>
            </motion.div>

            {/* Bottom Gradient Fade for Section Merging */}
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent z-20"></div>
        </section>
    );
};

export default Hero;
