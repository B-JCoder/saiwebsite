"use client";

import React from "react";
import ParallaxSection from "@/components/ParallaxSection";
import RevealOnScroll from "@/components/RevealOnScroll";
import GlassTiltCard from "@/components/GlassTiltCard";
import { FaBolt, FaStar, FaMagic } from "react-icons/fa";

export default function VisualDemo() {
    return (
        <div className="bg-transparent min-h-screen pt-24 pb-20">

            {/* 1. Parallax Header */}
            <ParallaxSection
                bgImage="/images/imgi_2_Page1-scaled.jpg"
                className="h-[60vh] flex items-center justify-center text-center"
            >
                <RevealOnScroll>
                    <h1 className="text-6xl md:text-8xl font-black text-white drop-shadow-2xl uppercase tracking-tighter">
                        Visual System
                    </h1>
                    <p className="text-[#DAA520] text-xl font-bold uppercase tracking-widest mt-4 bg-black/50 px-6 py-2 rounded-full inline-block backdrop-blur-sm">
                        Next-Gen Experience
                    </p>
                </RevealOnScroll>
            </ParallaxSection>

            <div className="container mx-auto px-6 py-24 space-y-32">

                {/* 2. Reveal on Scroll Text */}
                <section className="max-w-4xl mx-auto text-center">
                    <RevealOnScroll>
                        <h2 className="text-4xl font-bold text-[#800000] mb-6">Smooth & Elastic</h2>
                        <p className="text-2xl text-gray-700 leading-relaxed">
                            Everything you see here is using the <span className="font-bold text-[#DAA520]">RevealOnScroll</span> component.
                            It detects when elements enter the viewport and animates them up with a physics-based spring.
                        </p>
                    </RevealOnScroll>
                </section>

                {/* 3. Glass Tilt Cards */}
                <section>
                    <RevealOnScroll>
                        <h3 className="text-3xl font-bold text-center mb-12 text-black">Glass Tilt Cards</h3>
                    </RevealOnScroll>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { title: "Dynamic Depth", icon: FaBolt, desc: "Hover over me! I tilt based on your mouse position using 3D transforms." },
                            { title: "Glass Blur", icon: FaMagic, desc: "I feature a backdrop-blur-xl and a semi-transparent white background." },
                            { title: "Premium Feel", icon: FaStar, desc: "Perfect for highlighting features or services in a high-end design." },
                        ].map((item, idx) => (
                            <RevealOnScroll key={idx} delay={idx * 0.1}>
                                <GlassTiltCard className="h-full">
                                    <div className="w-16 h-16 bg-[#800000] rounded-2xl flex items-center justify-center text-white text-3xl mb-6 shadow-lg">
                                        <item.icon />
                                    </div>
                                    <h4 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h4>
                                    <p className="text-gray-700 font-medium">{item.desc}</p>
                                    <button className="mt-8 px-6 py-2 border border-[#800000] text-[#800000] font-bold rounded-full uppercase text-xs tracking-widest hover:bg-[#800000] hover:text-white transition-colors">
                                        Explore
                                    </button>
                                </GlassTiltCard>
                            </RevealOnScroll>
                        ))}
                    </div>
                </section>

                {/* 4. Magnetic Cursor Test */}
                <section className="text-center py-20">
                    <RevealOnScroll>
                        <h3 className="text-3xl font-bold mb-8">Magnetic Cursor Interaction</h3>
                        <div className="flex justify-center gap-6">
                            <button className="bg-[#DAA520] text-black px-10 py-5 rounded-full font-black uppercase tracking-widest text-lg">
                                Hover Me
                            </button>
                            <a href="#" className="border-2 border-[#800000] text-[#800000] px-10 py-5 rounded-full font-black uppercase tracking-widest text-lg">
                                Link Hover
                            </a>
                        </div>
                    </RevealOnScroll>
                </section>

            </div>
        </div>
    );
}
