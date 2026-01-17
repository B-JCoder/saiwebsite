"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

// Selected "Sneak Peek" Data
const previewFaculty = [
    { name: "Prof. S. Qutubuddin Hayder", image: "/images/Faculty/imgi_6_Qutub.png", role: "Vice Principal" },
    { name: "Prof. Humaira Qayyum", image: "/images/Faculty/imgi_7_Humeria.png", role: "HOD Commerce" },
    { name: "Prof. M. Irfan Qureshi", image: "/images/Faculty/imgi_11_Irfan.png", role: "HOD English" },
    { name: "Prof. Sohail Ibrahim", image: "/images/Faculty/imgi_21_Sohail_Ibrahim.png", role: "HOD Physics" },
];

const CorporateFaculty = () => {
    return (
        <section className="py-24 bg-gray-50 text-[#333]">
            <div className="container mx-auto px-6 md:px-12">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                    <div>
                        <span className="text-[#800000] font-bold text-sm uppercase tracking-widest block mb-2">Our Team</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-black">Distinguished Faculty</h2>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {previewFaculty.map((member, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            className="group bg-white border border-gray-200 hover:border-[#800000] transition-colors duration-300"
                        >
                            <div className="relative aspect-[3/4] w-full overflow-hidden bg-gray-200">
                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                                />
                                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                    <p className="text-[#DAA520] text-xs font-bold uppercase tracking-widest mb-1">{member.role}</p>
                                    <h4 className="text-white font-bold text-lg leading-tight">{member.name}</h4>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-12 text-center relative z-20">
                    <Link href="/faculty" className="inline-flex items-center gap-2 text-[#800000] font-bold uppercase tracking-widest hover:text-[#DAA520] transition-colors">
                        View Full Team <FaArrowRight />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default CorporateFaculty;
