"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { FaTimes, FaChevronLeft, FaChevronRight, FaExpandAlt } from "react-icons/fa";

// All gallery images
const allImages = [
    "/images/sai-img-1 (1).jpeg", "/images/sai-img-1 (2).jpeg", "/images/sai-img-1 (3).jpeg",
    "/images/sai-img-1 (4).jpeg", "/images/sai-img-1 (5).jpeg", "/images/sai-img-1 (6).jpeg",
    "/images/sai-img-1 (7).jpeg", "/images/sai-img-1 (8).jpeg", "/images/sai-img-1 (9).jpeg",
    "/images/sai-img-1 (10).jpeg", "/images/sai-img-1 (11).jpeg", "/images/sai-img-1 (12).jpeg",
    "/images/sai-img-1 (13).jpeg", "/images/sai-img-1 (14).jpeg", "/images/sai-img-1 (15).jpeg",
    "/images/sai-img-1 (16).jpeg", "/images/sai-img-1 (17).jpeg", "/images/sai-img-1 (18).jpeg",
    "/images/sai-img-1 (19).jpeg", "/images/sai-img-1 (20).jpeg", "/images/sai-img-1 (21).jpeg",
    "/images/sai-img-1 (22).jpeg", "/images/sai-img-1 (23).jpeg", "/images/sai-img-1 (24).jpeg",
    "/images/sai-img-1 (25).jpeg", "/images/sai-img-1 (26).jpeg", "/images/sai-img-1 (27).jpeg",
    "/images/sai-img-1 (28).jpeg", "/images/sai-img-1 (29).jpeg", "/images/sai-img-1 (30).jpeg",
    "/images/sai-img-1 (31).jpeg", "/images/sai-img-1 (32).jpeg", "/images/sai-img-1 (33).jpeg"
];

const LifeAtSAI = () => {
    const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

    const openLightbox = (index: number) => setLightboxIndex(index);
    const closeLightbox = () => setLightboxIndex(null);

    const nextImage = (e?: React.MouseEvent) => {
        e?.stopPropagation();
        if (lightboxIndex !== null) {
            setLightboxIndex((lightboxIndex + 1) % allImages.length);
        }
    };

    const prevImage = (e?: React.MouseEvent) => {
        e?.stopPropagation();
        if (lightboxIndex !== null) {
            setLightboxIndex((lightboxIndex - 1 + allImages.length) % allImages.length);
        }
    };

    // Helper to determine span based on index to create a "Bento" look
    // Pattern: 2x2, 1x1, 1x1, 1x2, 2x1, 1x1...
    const getSpanClass = (index: number) => {
        const patternIndex = index % 12; // Complete cycle
        switch (patternIndex) {
            case 0: return "md:col-span-2 md:row-span-2"; // Big Feature
            case 1: return "md:col-span-1 md:row-span-1";
            case 2: return "md:col-span-1 md:row-span-1";
            case 3: return "md:col-span-1 md:row-span-2"; // Tall
            case 4: return "md:col-span-2 md:row-span-1"; // Wide
            case 5: return "md:col-span-1 md:row-span-1";
            case 6: return "md:col-span-2 md:row-span-2"; // Big Feature
            case 7: return "md:col-span-1 md:row-span-1";
            case 8: return "md:col-span-1 md:row-span-2"; // Tall
            case 9: return "md:col-span-1 md:row-span-1";
            case 10: return "md:col-span-2 md:row-span-1"; // Wide
            case 11: return "md:col-span-1 md:row-span-1";
            default: return "md:col-span-1 md:row-span-1";
        }
    };

    return (
        <section className="py-24 bg-white relative overflow-hidden">
            {/* Decorative Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[10%] left-[-5%] w-[30vw] h-[30vw] bg-accent/5 rounded-full blur-[100px]" />
                <div className="absolute bottom-[20%] right-[-5%] w-[40vw] h-[40vw] bg-primary/5 rounded-full blur-[120px]" />
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="text-center mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="inline-block py-1 px-3 border border-accent/30 rounded-full bg-accent/5 text-accent text-xs font-bold tracking-widest uppercase mb-4 backdrop-blur-sm"
                    >
                        Campus Gallery
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-heading font-bold text-primary mb-6"
                    >
                        Life at <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">SAI</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-500 max-w-2xl mx-auto text-lg"
                    >
                        Experience the vibrancy of our campus, from state-of-the-art labs to student activities.
                    </motion.p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[200px] gap-4">
                    {allImages.map((src, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: (index % 6) * 0.1 }}
                            whileHover={{ y: -5, transition: { duration: 0.2 } }}
                            className={`relative group cursor-pointer overflow-hidden rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 bg-gray-100 ${getSpanClass(index)}`}
                            onClick={() => openLightbox(index)}
                        >
                            <Image
                                src={src}
                                alt={`Life at SAI ${index + 1}`}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                                sizes="(max-width: 768px) 50vw, 25vw"
                            />

                            {/* Glassmorphism Overlay on Hover */}
                            <div className="absolute inset-x-0 bottom-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-between items-end bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                                <div>
                                    <span className="text-white text-xs font-bold border border-white/30 px-2 py-1 rounded-full backdrop-blur-md">
                                        VIEW IMAGE
                                    </span>
                                </div>
                                <div className="text-white bg-white/20 p-2 rounded-full backdrop-blur-md">
                                    <FaExpandAlt className="text-sm" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Premium Lightbox */}
            <AnimatePresence>
                {lightboxIndex !== null && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4"
                        onClick={closeLightbox}
                    >
                        {/* Close Button */}
                        <button
                            onClick={closeLightbox}
                            className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors p-2 z-50 rounded-full hover:bg-white/10"
                        >
                            <FaTimes size={32} />
                        </button>

                        {/* Navigation - Left */}
                        <button
                            onClick={prevImage}
                            className="absolute left-4 md:left-8 text-white/50 hover:text-white transition-colors p-4 z-50 rounded-full hover:bg-white/10 hidden md:block"
                        >
                            <FaChevronLeft size={32} />
                        </button>

                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="relative w-full max-w-6xl h-[85vh] rounded-lg overflow-hidden shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <Image
                                src={allImages[lightboxIndex]}
                                alt="Full View"
                                fill
                                className="object-contain"
                                quality={100}
                                priority
                            />

                            {/* Bottom Info Bar */}
                            <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black/80 to-transparent flex justify-between items-center text-white">
                                <span className="font-heading tracking-wide text-sm opacity-80">
                                    SAI CAMPUS GALLERY
                                </span>
                                <span className="text-sm font-mono opacity-60 bg-white/10 px-3 py-1 rounded-full">
                                    {lightboxIndex + 1} / {allImages.length}
                                </span>
                            </div>
                        </motion.div>

                        {/* Navigation - Right */}
                        <button
                            onClick={nextImage}
                            className="absolute right-4 md:right-8 text-white/50 hover:text-white transition-colors p-4 z-50 rounded-full hover:bg-white/10 hidden md:block"
                        >
                            <FaChevronRight size={32} />
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default LifeAtSAI;
