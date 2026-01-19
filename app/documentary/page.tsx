"use client";

import React from "react";
import { FaPlay } from "react-icons/fa";

export default function Documentary() {
    return (
        <div className="pt-32 pb-20 container mx-auto px-6">
            <div className="text-center mb-16">
                <span className="uppercase text-sm font-bold text-[#DAA520] tracking-widest block mb-2">Life at SAI</span>
                <h1 className="text-4xl md:text-6xl font-heading font-black text-[#800000] uppercase tracking-tighter mb-6">Documentary</h1>
                <div className="w-24 h-1 bg-[#800000] mx-auto"></div>
            </div>

            {/* Main Feature Video */}
            <div className="max-w-5xl mx-auto mb-20">
                <div className="relative aspect-video bg-black rounded-3xl overflow-hidden shadow-2xl group cursor-pointer border-4 border-gray-100">
                    <div className="absolute inset-0 flex items-center justify-center z-10">
                        <div className="w-24 h-24 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center pl-2 group-hover:scale-110 transition-transform shadow-[0_0_30px_rgba(255,255,255,0.3)]">
                            <FaPlay className="text-white text-4xl" />
                        </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
                    <div className="w-full h-full bg-gray-900 flex items-center justify-center text-white/50 bg-[url('/images/imgi_2_Page1-scaled.jpg')] bg-cover bg-center">
                        {/* Background Image is set via class above, or fallback to gray if missing */}
                    </div>
                    <div className="absolute bottom-8 left-8 text-white z-20">
                        <span className="bg-[#DAA520] text-[#800000] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-2 inline-block">Official Documentary</span>
                        <h2 className="text-3xl font-bold">The Journey of Excellence</h2>
                    </div>
                </div>
            </div>

            {/* More Videos Grid */}
            <div className="max-w-6xl mx-auto">
                <h3 className="text-2xl font-bold text-[#800000] mb-8 uppercase tracking-tight border-l-4 border-[#DAA520] pl-4">Recent Events & Highlights</h3>
                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        { title: "Annual Sports Day 2024", img: "/images/imgi_13_Page12.png", duration: "5:30" },
                        { title: "Science Exhibition Highlights", img: "/images/imgi_10_Page9-scaled.jpg", duration: "3:45" },
                        { title: "Independence Day Celebration", img: "/images/imgi_21_Page1-2048x796.jpg", duration: "4:15" },
                    ].map((item, idx) => (
                        <div key={idx} className="group cursor-pointer">
                            <div className="relative aspect-video bg-gray-200 rounded-xl overflow-hidden mb-4 shadow-md">
                                <div className="absolute inset-0 flex items-center justify-center z-10 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <div className="w-12 h-12 bg-[#800000]/80 rounded-full flex items-center justify-center pl-1 backdrop-blur-sm">
                                        <FaPlay className="text-white text-sm" />
                                    </div>
                                </div>
                                <img
                                    src={item.img}
                                    alt={item.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute bottom-2 right-2 bg-black/70 text-white text-[10px] font-bold px-2 py-0.5 rounded-md">
                                    {item.duration}
                                </div>
                            </div>
                            <h4 className="font-bold text-lg text-black group-hover:text-[#800000] transition-colors leading-tight">{item.title}</h4>
                            <p className="text-gray-500 text-sm mt-2">February 2024</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
