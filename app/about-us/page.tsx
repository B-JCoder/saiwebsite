"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import {
    motion,
    useScroll,
    useTransform,
    useInView,
    useMotionValue,
    animate,
} from "framer-motion";

// --- Components ---

// 1. Animated Counter
function Counter({
    from = 0,
    to,
    suffix = "",
    duration = 2,
}: {
    from?: number;
    to: number;
    suffix?: string;
    duration?: number;
}) {
    const nodeRef = useRef<HTMLSpanElement>(null);
    const inView = useInView(nodeRef, { once: true, margin: "-10%" });

    useEffect(() => {
        if (!inView) return;

        const node = nodeRef.current;
        if (!node) return;

        const controls = animate(from, to, {
            duration,
            onUpdate(value) {
                // Format: small numbers as is, large numbers with commas if needed, 
                // but for "9k" we might want logic. 
                // Prompt says "numbers (21, 9000) should count up". 
                // If we want "9k", we can treat 9000 as 9 and append 'k'.
                // However, prompt example says "Card 2: '9k+ Alumni Network'".
                // I will follow the instruction "numbers (21, 9000) ... count up".
                // And I'll format 9000 as "9k" if it exceeds 1000? 
                // Simpler: Just count to the target and let the suffix handle the rest?
                // Actually, let's just count to the raw number.
                if (to >= 1000 && suffix.includes("k")) {
                    // quick hack to show 9.0k etc? No, let's just show the number.
                    // User logic: "The numbers (21, 9000) should count up".
                    // I will display the integer value.
                    node.textContent = Math.floor(value).toLocaleString();
                } else {
                    node.textContent = Math.floor(value).toLocaleString();
                }
            },
        });

        return () => controls.stop();
    }, [from, to, duration, inView, suffix]);

    return (
        <span className="flex items-center">
            <span ref={nodeRef} />
            {suffix}
        </span>
    );
}

// 2. Parallax Image Column
function ParallaxColumn({
    images,
    y,
}: {
    images: string[];
    y: any; // MotionValue
}) {
    return (
        <motion.div style={{ y }} className="flex flex-col gap-6 w-full">
            {images.map((src, i) => (
                <div
                    key={i}
                    className="relative h-[300px] md:h-[400px] w-full rounded-2xl overflow-hidden group shadow-lg"
                >
                    <Image
                        src={src}
                        alt="Legacy Image"
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* Overlay gradient for premium feel */}
                    <div className="absolute inset-0 bg-black/10 transition-opacity group-hover:opacity-0" />
                </div>
            ))}
        </motion.div>
    );
}

// --- Main Page Component ---

export default function AboutUs() {
    // Parallax Transforms
    // We use global Page scroll for the Masonry effect usually, but scoping to section is safer.
    // Using useScroll with target implies the progress refers to that target's viewport intersection.
    // For standard parallax, we often want typical scroll 'y'. 
    // Let's use generic global scroll for the masonry to ensure it moves naturally.
    const { scrollY } = useScroll();
    const yColumn1 = useTransform(scrollY, [0, 1500], [0, -100]);
    const yColumn2 = useTransform(scrollY, [0, 1500], [0, -250]); // Moves faster

    // Vision Text Reveal
    const visionQuote =
        '"To provide Quality Education for the Middle Class, empowering them to compete on a global stage."';
    const visionWords = visionQuote.split(" ");

    return (
        <div className="bg-white min-h-screen font-sans selection:bg-[#800000] selection:text-white">
            {/* 
        SECTION 1: 'Our Legacy' (Parallax Masonry) 
        Legacy text left, Masonry right.
      */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-start">
                    {/* Content Left */}
                    <div className="relative z-10 pt-10">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h1 className="text-5xl md:text-7xl font-heading font-black text-[#800000] uppercase tracking-tighter mb-4 leading-[0.9]">
                                Our Legacy
                            </h1>
                            <div className="w-24 h-1.5 bg-[#DAA520] mb-8"></div>

                            <h2 className="text-2xl md:text-3xl font-serif text-gray-800 font-bold mb-8 italic">
                                Empowering the Community through Education.
                            </h2>

                            <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-medium max-w-lg">
                                Sir Adamjee Institute (SAI) is a flagship project of the{" "}
                                <span className="font-bold text-[#800000]">
                                    Pakistan Memon Education & Welfare Society (PMEWS)
                                </span>
                                ... established with the noble goal of uplifting society.
                            </p>
                        </motion.div>
                    </div>

                    {/* Masonry Right */}
                    <div className="relative h-[800px] overflow-hidden -mt-10 lg:mt-0 mask-image-b">
                        {/* Grid Wrapper */}
                        <div className="grid grid-cols-2 gap-6">
                            <ParallaxColumn
                                y={yColumn1}
                                images={[
                                    "/images/sai-img-1 (1).jpeg",
                                    "/images/sai-img-1 (12).jpeg",
                                ]}
                            />
                            <ParallaxColumn
                                y={yColumn2}
                                images={[
                                    "/images/sai-img-1 (20).jpeg",
                                    "/images/sai-img-1 (30).jpeg",
                                ]}
                            />
                        </div>
                        {/* Gradient Fade at bottom to blend */}
                        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent z-20 pointer-events-none" />
                    </div>
                </div>
            </section>

            {/* 
        SECTION 2: 'We Transform' (Stats & Glassmorphism) 
        Style: Dark Red Background (Brand Color).
      */}
            <section className="relative py-32 bg-[#800000] text-white overflow-hidden">
                {/* Ambient Background Glows */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#DAA520] rounded-full blur-[150px] opacity-20 -mr-32 -mt-32 pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#DAA520] rounded-full blur-[150px] opacity-10 -ml-32 -mb-32 pointer-events-none" />

                <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-5xl md:text-7xl font-heading font-black mb-6 tracking-tight text-[#DAA520]">
                            We Transform.
                        </h2>
                        <p className="text-xl md:text-2xl text-white/80 leading-relaxed font-light max-w-lg">
                            Sir Adamjee Institute is more than a college. It&apos;s a
                            launchpad for the country&apos;s brightest minds.
                        </p>
                    </motion.div>

                    {/* Stats Cards with Glassmorphism */}
                    <div className="grid sm:grid-cols-2 gap-6">
                        {/* Card 1 */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                            className="bg-white/10 backdrop-blur-md border border-white/20 p-10 rounded-3xl text-center shadow-[0_0_40px_rgba(218,165,32,0.2)] hover:shadow-[0_0_60px_rgba(218,165,32,0.4)] transition-shadow duration-500"
                        >
                            <div className="text-5xl md:text-6xl font-black text-[#DAA520] mb-2 justify-center flex">
                                <Counter from={0} to={21} suffix="+" />
                            </div>
                            <p className="text-sm uppercase tracking-[0.2em] font-bold text-white/90">
                                Years of Excellence
                            </p>
                        </motion.div>

                        {/* Card 2 */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4, duration: 0.6 }}
                            className="bg-white/10 backdrop-blur-md border border-white/20 p-10 rounded-3xl text-center shadow-[0_0_40px_rgba(218,165,32,0.2)] hover:shadow-[0_0_60px_rgba(218,165,32,0.4)] transition-shadow duration-500"
                        >
                            <div className="text-5xl md:text-6xl font-black text-[#DAA520] mb-2 justify-center flex">
                                {/* 
                   Prompt says "count up to 9000". 
                   Also "9k+ Alumni Network". 
                   We will count to 9000 but label implies 9k.
                   Let's assume counting to 9000 is the goal, 
                   but display might break layout if too big.
                   Actually '9000' is short. 
                 */}
                                <Counter from={0} to={9000} suffix="+" />
                            </div>
                            <p className="text-sm uppercase tracking-[0.2em] font-bold text-white/90">
                                Alumni Network
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 
        SECTION 3: 'Our Vision' (Text Reveal) 
        Style: White background with a subtle Noise/Grain Texture overlay.
      */}
            <section className="relative py-40 bg-white flex items-center justify-center overflow-hidden">
                {/* Noise Overlay */}
                <div
                    className="absolute inset-0 opacity-[0.05] pointer-events-none z-0"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='1'/%3E%3C/svg%3E")`
                    }}
                />

                <div className="container mx-auto px-6 text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-12"
                    >
                        <span className="inline-block py-2 px-6 border border-[#800000]/20 rounded-full text-[#800000] font-bold text-xs uppercase tracking-[0.3em]">
                            Our Vision
                        </span>
                    </motion.div>

                    <h3 className="text-4xl md:text-6xl lg:text-7xl font-serif text-black leading-tight max-w-5xl mx-auto">
                        {visionWords.map((word, i) => (
                            <span key={i} className="inline-block overflow-hidden align-top mr-3 md:mr-4">
                                <motion.span
                                    className="inline-block"
                                    initial={{ opacity: 0, y: 40, rotate: 2 }}
                                    whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                                    viewport={{ once: true, margin: "-10%" }}
                                    transition={{
                                        duration: 0.8,
                                        ease: [0.2, 0.65, 0.3, 0.9],
                                        delay: i * 0.05
                                    }}
                                >
                                    {word}
                                </motion.span>
                            </span>
                        ))}
                    </h3>
                </div>
            </section>
        </div>
    );
}
