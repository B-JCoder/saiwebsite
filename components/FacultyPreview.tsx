"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import FloatingSection from "./FloatingSection";

// Selected "Sneak Peek" Data
const previewFaculty = [
    { name: "Prof. S. Qutubuddin Hayder", image: "/images/Faculty/imgi_6_Qutub.png", role: "Vice Principal" },
    { name: "Prof. Humaira Qayyum", image: "/images/Faculty/imgi_7_Humeria.png", role: "HOD Commerce" },
    { name: "Prof. M. Irfan Qureshi", image: "/images/Faculty/imgi_11_Irfan.png", role: "HOD English" },
    { name: "Prof. Sohail Ibrahim", image: "/images/Faculty/imgi_21_Sohail_Ibrahim.png", role: "HOD Physics" },
];

const FacultyPreview = () => {
    return (
        <section className="py-24 relative overflow-hidden">
            {/* Ambient Background */}
            <div className="absolute inset-0 bg-background/50 backdrop-blur-3xl -z-10" />
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#800000]/5 rounded-full blur-[120px] -z-10" />

            <div className="container mx-auto px-6">
                <div className="mb-16 text-center">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="uppercase text-xs font-black text-[#DAA520] tracking-[0.3em] block mb-2"
                    >
                        Mentors & Leaders
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-heading font-black text-[#800000] uppercase tracking-tighter"
                    >
                        Distinguished Faculty
                    </motion.h2>
                    <div className="w-24 h-1 bg-[#DAA520] mx-auto mt-4"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                    {previewFaculty.map((member, index) => (
                        <FloatingSection key={index} delay={index * 0.1}>
                            <div className="group flex flex-col items-center text-center p-6 bg-white/5 border border-[#800000]/10 rounded-3xl backdrop-blur-sm hover:bg-white/10 transition-colors duration-500 hover:shadow-2xl hover:shadow-[#DAA520]/10">
                                <div className="relative w-40 h-40 rounded-full shadow-xl overflow-hidden mb-6 border-4 border-white ring-2 ring-[#800000]/10 group-hover:ring-[#DAA520] transition-all duration-500 group-hover:scale-105">
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        fill
                                        className="object-cover object-top"
                                        sizes="160px"
                                    />
                                </div>
                                <h4 className="text-lg font-bold text-[#800000] uppercase tracking-tight leading-tight mb-2">{member.name}</h4>
                                <p className="text-xs font-bold text-[#DAA520] uppercase tracking-widest bg-[#DAA520]/10 px-3 py-1 rounded-full">{member.role}</p>
                            </div>
                        </FloatingSection>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <Link href="/Faculty">
                        <Button size="lg" className="bg-[#800000] text-white hover:bg-[#DAA520] hover:text-[#800000] rounded-full px-10 py-6 text-lg font-semibold shadow-lg transition-all duration-300">
                            View Full Faculty Team
                        </Button>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default FacultyPreview;
