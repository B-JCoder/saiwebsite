"use client";

import Navbar from "@/components/PremiumNavbar";
import { FaFlask, FaCalculator, FaBookOpen } from "react-icons/fa";
import RevealOnScroll from "@/components/RevealOnScroll";

export default function AcademicsPage() {
    return (
        <div className="pt-32 pb-20 bg-background min-h-screen">
            <div className="container mx-auto px-6 mb-16 text-center">
                <RevealOnScroll width="100%">
                    <h1 className="text-5xl md:text-6xl font-heading font-black text-[#800000] uppercase tracking-tighter mb-4">
                        Academics
                    </h1>
                    <p className="text-[#DAA520] text-lg uppercase tracking-widest font-bold">
                        Excellence in Education
                    </p>
                </RevealOnScroll>
            </div>

            <div className="container mx-auto px-6">

                {/* Separate Campus Highlight */}
                <RevealOnScroll width="100%">
                    <div className="bg-[#800000] text-white p-8 md:p-12 rounded-2xl shadow-xl text-center mb-16 relative overflow-hidden">
                        <div className="relative z-10">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4 uppercase">Separate Campuses</h2>
                            <p className="text-xl md:text-2xl font-light text-gray-200">
                                We provide a dedicated and secure learning environment with <span className="font-bold text-[#DAA520]">Separate Campuses for Boys & Girls</span>.
                            </p>
                        </div>
                        <div className="absolute top-0 right-0 w-64 h-64 bg-[#DAA520] rounded-full blur-[100px] opacity-20 -mr-20 -mt-20"></div>
                    </div>
                </RevealOnScroll>

                {/* Courses List */}
                <div className="grid md:grid-cols-3 gap-8">
                    {/* Science */}
                    <RevealOnScroll width="100%">
                        <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 hover:border-[#800000] hover:shadow-lg transition-all duration-300 group rounded-xl">
                            <div className="w-16 h-16 bg-red-50 text-[#800000] rounded-full flex items-center justify-center text-3xl mb-6 group-hover:bg-[#800000] group-hover:text-white transition-colors">
                                <FaFlask />
                            </div>
                            <h3 className="text-2xl font-bold text-black mb-4">Science Group</h3>
                            <ul className="space-y-3 text-gray-600">
                                <li className="flex items-center gap-2">
                                    <span className="w-2 h-2 bg-[#DAA520] rounded-full"></span> Pre-Engineering
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="w-2 h-2 bg-[#DAA520] rounded-full"></span> Pre-Medical
                                </li>
                            </ul>
                        </div>
                    </RevealOnScroll>

                    {/* Commerce */}
                    <RevealOnScroll width="100%">
                        <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 hover:border-[#800000] hover:shadow-lg transition-all duration-300 group rounded-xl">
                            <div className="w-16 h-16 bg-yellow-50 text-[#DAA520] rounded-full flex items-center justify-center text-3xl mb-6 group-hover:bg-[#DAA520] group-hover:text-white transition-colors">
                                <FaCalculator />
                            </div>
                            <h3 className="text-2xl font-bold text-black mb-4">Commerce Group</h3>
                            <ul className="space-y-3 text-gray-600">
                                <li className="flex items-center gap-2">
                                    <span className="w-2 h-2 bg-[#800000] rounded-full"></span> Principles of Commerce
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="w-2 h-2 bg-[#800000] rounded-full"></span> Accounting & Banking
                                </li>
                            </ul>
                        </div>
                    </RevealOnScroll>

                    {/* Computer Science */}
                    <RevealOnScroll width="100%">
                        <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 hover:border-[#800000] hover:shadow-lg transition-all duration-300 group rounded-xl">
                            <div className="w-16 h-16 bg-blue-50 text-slate-700 rounded-full flex items-center justify-center text-3xl mb-6 group-hover:bg-slate-700 group-hover:text-white transition-colors">
                                <FaBookOpen />
                            </div>
                            <h3 className="text-2xl font-bold text-black mb-4">Computer Science</h3>
                            <ul className="space-y-3 text-gray-600">
                                <li className="flex items-center gap-2">
                                    <span className="w-2 h-2 bg-[#DAA520] rounded-full"></span> Computer Science
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="w-2 h-2 bg-[#DAA520] rounded-full"></span> Logic & Programming
                                </li>
                            </ul>
                        </div>
                    </RevealOnScroll>
                </div>
            </div>
        </div>
    );
}
