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
                            whileHover={{ y: -10 }}
                            className="group relative bg-background rounded p-1 shadow-lg hover:shadow-2xl transition-all duration-300"
                        >
                            <div className={`h-2 w-full bg-gradient-to-r ${program.color} rounded-t`}></div>
                            <div className="p-8">
                                <div className={`w-16 h-16 rounded bg-primary flex items-center justify-center text-accent text-2xl mb-6 shadow-lg group-hover:bg-accent group-hover:text-primary transition-colors duration-300`}>
                                    <program.icon />
                                </div>

                                <h3 className="text-2xl font-black text-primary mb-4 font-heading uppercase tracking-tight">{program.title}</h3>
                                <p className="text-gray-600 mb-6 leading-relaxed font-medium text-sm">
                                    {program.description}
                                </p>

                                <a href="#" className="inline-flex items-center gap-2 text-primary font-black uppercase text-xs tracking-widest hover:text-accent transition-colors">
                                    Details <FaArrowRight className="text-[10px]" />
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AcademicPrograms;
