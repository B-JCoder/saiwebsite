"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";

// All gallery images from public/imgaes
const allImages = [
    "/imgaes/sai-img-1 (1).jpeg", "/imgaes/sai-img-1 (2).jpeg", "/imgaes/sai-img-1 (3).jpeg",
    "/imgaes/sai-img-1 (4).jpeg", "/imgaes/sai-img-1 (5).jpeg", "/imgaes/sai-img-1 (6).jpeg",
    "/imgaes/sai-img-1 (7).jpeg", "/imgaes/sai-img-1 (8).jpeg", "/imgaes/sai-img-1 (9).jpeg",
    "/imgaes/sai-img-1 (10).jpeg", "/imgaes/sai-img-1 (11).jpeg", "/imgaes/sai-img-1 (12).jpeg",
    "/imgaes/sai-img-1 (13).jpeg", "/imgaes/sai-img-1 (14).jpeg", "/imgaes/sai-img-1 (15).jpeg",
    "/imgaes/sai-img-1 (16).jpeg", "/imgaes/sai-img-1 (17).jpeg", "/imgaes/sai-img-1 (18).jpeg",
    "/imgaes/sai-img-1 (19).jpeg", "/imgaes/sai-img-1 (20).jpeg", "/imgaes/sai-img-1 (21).jpeg",
    "/imgaes/sai-img-1 (22).jpeg", "/imgaes/sai-img-1 (23).jpeg", "/imgaes/sai-img-1 (24).jpeg",
    "/imgaes/sai-img-1 (25).jpeg", "/imgaes/sai-img-1 (26).jpeg", "/imgaes/sai-img-1 (27).jpeg",
    "/imgaes/sai-img-1 (28).jpeg", "/imgaes/sai-img-1 (29).jpeg", "/imgaes/sai-img-1 (30).jpeg",
    "/imgaes/sai-img-1 (31).jpeg", "/imgaes/sai-img-1 (32).jpeg", "/imgaes/sai-img-1 (33).jpeg"
];

const LifeAtSAI = () => {
    const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

    const openLightbox = (index: number) => setLightboxIndex(index);
    const closeLightbox = () => setLightboxIndex(null);

    const nextImage = () => {
        if (lightboxIndex !== null) {
            setLightboxIndex((lightboxIndex + 1) % allImages.length);
        }
    };

    const prevImage = () => {
        if (lightboxIndex !== null) {
            setLightboxIndex((lightboxIndex - 1 + allImages.length) % allImages.length);
        }
    };

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <span className="uppercase text-sm font-bold text-accent tracking-widest block mb-2">Gallery</span>
                    <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary">Life at SAI</h2>
                    <p className="text-gray-500 mt-4">Capturing moments of excellence, joy, and learning.</p>
                </div>

                {/* Grid Layout - Showing first 12 images nicely, then load more logic could be added but user said 'sab use karna hai' so we show a dense grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2">
                    {allImages.map((src, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            whileHover={{ scale: 0.98 }}
                            onClick={() => openLightbox(index)}
                            className="relative aspect-square overflow-hidden rounded-md cursor-pointer group bg-gray-100"
                        >
                            <Image
                                src={src}
                                alt={`Life at SAI ${index + 1}`}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                                sizes="(max-width: 768px) 50vw, 16vw"
                            />
                            <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Lightbox */}
            {lightboxIndex !== null && (
                <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4">
                    <button
                        onClick={closeLightbox}
                        className="absolute top-6 right-6 text-white text-4xl hover:text-accent z-50"
                    >
                        <FaTimes />
                    </button>

                    <button
                        onClick={prevImage}
                        className="absolute left-4 text-white text-4xl hover:text-accent z-50"
                    >
                        <FaChevronLeft />
                    </button>

                    <div className="relative w-full max-w-5xl h-[80vh]">
                        <Image
                            src={allImages[lightboxIndex]}
                            alt="Full View"
                            fill
                            className="object-contain"
                        />
                    </div>

                    <button
                        onClick={nextImage}
                        className="absolute right-4 text-white text-4xl hover:text-accent z-50"
                    >
                        <FaChevronRight />
                    </button>

                    <div className="absolute bottom-6 text-white text-sm">
                        Image {lightboxIndex + 1} of {allImages.length}
                    </div>
                </div>
            )}
        </section>
    );
};

export default LifeAtSAI;
