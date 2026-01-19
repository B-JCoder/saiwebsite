"use client";

import { motion } from "framer-motion";
import { FaFlask, FaCalculator, FaBookOpen, FaArrowRight } from "react-icons/fa";

const programs = [
    {
        title: "Pre-Medical",
        icon: FaFlask,
        description: "Comprehensive biology and chemistry programs designed for future medical professionals.",
        color: "from-primary to-red-600"
    },
    {
        title: "Pre-Engineering",
        icon: FaCalculator,
        description: "Advanced mathematics and physics curricula for aspiring engineers and innovators.",
        color: "from-primary to-accent"
    },
    {
        title: "Computer Science",
        icon: FaBookOpen,
        description: "Cutting-edge computer science education focusing on programming and logic.",
        color: "from-primary to-slate-700"
    },
];

const AcademicPrograms = () => {
    return (
        <section className="py-24 bg-white relative">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <span className="uppercase text-sm font-bold text-accent tracking-widest block mb-2">Academics</span>
                    <h2 className="text-4xl md:text-5xl font-heading font-black text-primary uppercase tracking-tighter">Academic Programs</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {programs.map((program, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2, duration: 0.6 }}
                            className="group relative bg-white border border-gray-200 p-8 hover:border-[#800000] transition-all duration-300"
                        >
                            <div className="mb-6 text-[#800000] text-4xl group-hover:text-[#DAA520] transition-colors">
                                <program.icon />
                            </div>

                            <h3 className="text-2xl font-bold text-black mb-4 uppercase tracking-tight">{program.title}</h3>
                            <p className="text-gray-600 mb-6 leading-relaxed text-sm">
                                {program.description}
                            </p>

                            <a href="#" className="inline-flex items-center gap-2 text-[#800000] font-bold uppercase text-xs tracking-widest hover:text-[#DAA520] transition-colors">
                                Details <FaArrowRight className="text-[10px]" />
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AcademicPrograms;
