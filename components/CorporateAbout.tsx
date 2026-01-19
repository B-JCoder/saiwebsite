"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaGraduationCap, FaUserGraduate, FaChalkboardTeacher } from "react-icons/fa";
import CountUp from "react-countup";
import Link from "next/link";

const CorporateAbout = () => {
    return (
        <section className="py-20 md:py-32 bg-transparent text-[#333]">
            <div className="container mx-auto px-6 md:px-12">
                <div className="bg-white/60 backdrop-blur-xl border border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-[2.5rem] p-8 md:p-16">
                    <div className="flex flex-col md:flex-row gap-16 items-start">

                        {/* Left Column: Text */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="md:w-1/2"
                        >
                            <span className="text-[#800000] font-bold text-sm uppercase tracking-widest mb-4 block">About Us</span>
                            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">
                                Driving Excellence in <span className="text-[#DAA520]">Education.</span>
                            </h2>
                            <p className="text-lg text-gray-700 mb-8 leading-relaxed font-medium">
                                Sir Adamjee Institute is a premier educational institution dedicated to fostering academic brilliance and character development. We provide a rigorous learning environment that prepares students not just for exams, but for life.
                            </p>

                            <div className="grid grid-cols-2 gap-8 mb-8">
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.5 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.2 }}
                                >
                                    <h3 className="text-4xl font-bold text-[#800000] mb-2">
                                        <CountUp end={21} duration={3} suffix="+" enableScrollSpy scrollSpyOnce />
                                    </h3>
                                    <p className="text-sm text-gray-600 font-bold uppercase tracking-wider">Years of Legacy</p>
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.5 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.4 }}
                                >
                                    <h3 className="text-4xl font-bold text-[#800000] mb-2">
                                        <CountUp end={9000} duration={3} suffix="+" enableScrollSpy scrollSpyOnce />
                                    </h3>
                                    <p className="text-sm text-gray-600 font-bold uppercase tracking-wider">Alumni Success</p>
                                </motion.div>
                            </div>

                            <Link href="/about-us">
                                <button className="px-8 py-3 border-2 border-[#800000] text-[#800000] font-bold uppercase tracking-widest hover:bg-[#800000] hover:text-white transition-all rounded-lg">
                                    Read Our Story
                                </button>
                            </Link>
                        </motion.div>

                        {/* Right Column: Image */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="md:w-1/2 relative flex justify-center md:justify-end md:pr-10 items-center"
                        >
                            {/* 3D Logo Container */}
                            <motion.div
                                animate={{
                                    y: [-10, 10, -10]
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                                className="relative z-10"
                            >
                                <div className="relative w-[400px] h-[400px] rounded-full overflow-hidden flex items-center justify-center drop-shadow-[0_20px_50px_rgba(218,165,32,0.3)] border-4 border-[#DAA520]">
                                    <img
                                        src="/images/sai_seal_fixed.jpg"
                                        alt="SAI Seal 3D"
                                        className="w-full h-full object-cover scale-[1.10] filter contrast-125 saturate-110"
                                    />
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CorporateAbout;
