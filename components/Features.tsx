"use client";

import { motion } from "framer-motion";
import { FaGraduationCap, FaMicroscope, FaLaptopCode, FaBookReader, FaAward, FaUserShield } from "react-icons/fa";

const features = [
    { title: "Quality Education", icon: FaGraduationCap, desc: "Academic excellence at an affordable fee." },
    { title: "Merit Scholarship", icon: FaAward, desc: "Financial assistance for bright minds." },
    { title: "Equipped Labs", icon: FaMicroscope, desc: "State-of-the-art physics & chemistry labs." },
    { title: "IT Training", icon: FaLaptopCode, desc: "Advanced computer science curriculum." },
    { title: "Huge Campus", icon: FaBookReader, desc: "Purpose built campus with all facilities." },
    { title: "Character Building", icon: FaUserShield, desc: "Fostering discipline and moral values." },
];

const Features = () => {
    return (
        <section className="py-24 bg-primary text-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-heading font-black uppercase tracking-tighter mb-4">Why SAI?</h2>
                    <div className="w-24 h-1 bg-accent mx-auto"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="flex items-start gap-6 p-6 rounded border border-white/10 hover:bg-white/5 transition-all"
                        >
                            <div className="w-14 h-14 bg-accent text-primary rounded flex items-center justify-center text-2xl flex-shrink-0 shadow-lg">
                                <feature.icon />
                            </div>
                            <div>
                                <h3 className="text-xl font-black font-heading mb-2 uppercase tracking-tight">{feature.title}</h3>
                                <p className="text-gray-300 text-sm font-medium leading-relaxed">
                                    {feature.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
