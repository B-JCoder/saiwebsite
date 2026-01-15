"use client";

import { motion } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";
import Image from "next/image";

const PrincipalMessage = () => {
    return (
        <section className="py-24 bg-background relative overflow-hidden">
            {/* Background Decorative Elements */}
            <FaQuoteLeft className="absolute top-10 left-10 text-9xl text-primary/5 -z-0 rotate-12" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16">

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="lg:w-1/2"
                    >
                        <div className="flex items-center gap-2 mb-4">
                            <div className="h-[2px] w-10 bg-accent"></div>
                            <span className="uppercase text-sm font-bold text-accent tracking-widest">Principal's Desk</span>
                        </div>

                        <h2 className="text-4xl md:text-5xl font-heading font-black text-primary mb-8 leading-tight uppercase tracking-tighter">
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

                        <div className="mt-10 pt-6 border-t border-gray-200">
                            <h4 className="text-xl font-black text-primary font-heading uppercase">Mr. Principal Name</h4>
                            <p className="text-accent font-bold text-xs uppercase tracking-widest">Principal, Sir Adamjee Institute</p>
                        </div>
                    </motion.div>

                    {/* Image */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="lg:w-1/2 relative"
                    >
                        <div className="relative z-10 rounded-lg overflow-hidden shadow-2xl border-8 border-white">
                            <div className="aspect-[4/5] bg-gray-200 relative">
                                <Image
                                    src="/imgaes/sai-img-1 (18).jpeg"
                                    alt="Principal"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                        {/* Decorative Box */}
                        <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-accent/20 rounded-lg -z-0"></div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default PrincipalMessage;
