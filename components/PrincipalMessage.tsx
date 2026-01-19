"use client";

import { FaQuoteLeft } from "react-icons/fa";
import Image from "next/image";
import RevealOnScroll from "@/components/RevealOnScroll";

const PrincipalMessage = () => {
    return (
        <section className="py-24 bg-transparent relative overflow-hidden">
            {/* Background Decorative Elements */}
            <FaQuoteLeft className="absolute top-10 left-10 text-9xl text-[#800000]/5 -z-0 rotate-12" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16">

                    {/* Text Content */}
                    <RevealOnScroll className="lg:w-1/2">
                        <div className="bg-white/60 backdrop-blur-xl border border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-[2.5rem] p-8 md:p-12 relative">
                            <div className="flex items-center gap-2 mb-4">
                                <div className="h-[2px] w-10 bg-[#DAA520]"></div>
                                <span className="uppercase text-sm font-bold text-[#DAA520] tracking-widest">Principal's Desk</span>
                            </div>

                            <h2 className="text-4xl md:text-5xl font-heading font-black text-[#800000] mb-8 leading-tight uppercase tracking-tighter">
                                Inspiring Excellence, <br />
                                Building Character.
                            </h2>

                            <div className="space-y-6 text-gray-700 text-lg leading-relaxed font-medium">
                                <p>
                                    "At Sir Adamjee Institute, we believe that education is not just about academic success; it is about shaping the character and future of our students. Our mission is to provide a disciplined, nurturing environment where young minds can thrive."
                                </p>
                                <p>
                                    "We are committed to modernizing education with state-of-the-art facilities and a curriculum that prepares students for the challenges of tomorrow."
                                </p>
                            </div>

                            <div className="mt-10 pt-6 border-t border-[#800000]/10">
<<<<<<< HEAD
                                <h4 className="text-xl font-black text-[#800000] font-heading uppercase">Mr. Principal Name</h4>
=======
                                <h4 className="text-xl font-black text-[#800000] font-heading uppercase">Prof. Sohail Farooqi</h4>
>>>>>>> 8380a61aaaea9922053889363695a7e5abea53b1
                                <p className="text-[#DAA520] font-bold text-xs uppercase tracking-widest">Principal, Sir Adamjee Institute</p>
                            </div>
                        </div>
                    </RevealOnScroll>

                    {/* Image */}
                    <RevealOnScroll delay={0.2} className="lg:w-1/2 relative">
                        <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-4 border-white/40">
                            <div className="aspect-[4/5] bg-gray-200 relative">
                                <Image
                                    src="/images/sai-img-1 (18).jpeg" // Fixing the path to the correct one found earlier if possible, but sticking to existing logic, corrected path from recent view
                                    alt="Principal"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                        {/* Decorative Box */}
                        <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-[#DAA520]/30 rounded-3xl -z-0"></div>
                    </RevealOnScroll>

                </div>
            </div>
        </section>
    );
};

export default PrincipalMessage;
