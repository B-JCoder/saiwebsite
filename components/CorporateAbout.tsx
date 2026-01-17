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
                            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6 text-black">
                                Driving Excellence in <br />
                                <span className="text-[#DAA520]">Education.</span>
                            </h2>
                            <p className="text-lg text-gray-700 mb-8 leading-relaxed font-medium">
                                Sir Adamjee Institute is a premier educational institution dedicated to fostering academic brilliance and character development. We provide a rigorous learning environment that prepares students not just for exams, but for life.
                            </p>

                            <div className="grid grid-cols-2 gap-8 mb-8">
                                <div>
                                    <h3 className="text-4xl font-bold text-[#800000] mb-2">
                                        <CountUp end={21} duration={3} suffix="+" />
                                    </h3>
                                    <p className="text-sm text-gray-600 font-bold uppercase tracking-wider">Years of Legacy</p>
                                </div>
                                <div>
                                    <h3 className="text-4xl font-bold text-[#800000] mb-2">
                                        <CountUp end={9000} duration={3} suffix="+" />
                                    </h3>
                                    <p className="text-sm text-gray-600 font-bold uppercase tracking-wider">Alumni Success</p>
                                </div>
                            </div>

                            <Link href="/about-us">
                                <button className="px-8 py-3 border-2 border-[#800000] text-[#800000] font-bold uppercase tracking-widest hover:bg-[#800000] hover:text-white transition-all rounded-lg">
                                    Read Our Story
                                </button>
                            </Link>
                        </motion.div>

                        {/* Right Column: Image */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="md:w-1/2 relative"
                        >
                            <div className="absolute top-0 right-0 w-full h-full border-2 border-[#DAA520] translate-x-4 translate-y-4 z-0 hidden md:block rounded-2xl" />
                            <div className="relative z-10 h-[500px] w-full bg-gray-200 overflow-hidden rounded-2xl shadow-lg">
                                {/* Using a placeholder or existing image. Ideally a generic building or classroom shot */}
                                <img
                                    src="/images/imgi_2_Page1-scaled.jpg"
                                    alt="SAI Campus"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CorporateAbout;
