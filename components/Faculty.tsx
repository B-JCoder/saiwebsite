"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import Image from "next/image";

// Departmental Data
const departments = [
    {
        name: "Commerce Department",
        members: [
            { name: "Prof. S. Qutubuddin Hayder", image: "/images/Faculty/imgi_6_Qutub.png", role: "Vice Principal" },
            { name: "Prof. Humaira Qayyum", image: "/images/Faculty/imgi_7_Humeria.png", role: "HOD Commerce" },
            { name: "Prof. Rehman Younus", image: "/images/Faculty/imgi_8_Rehman.png", role: "Faculty" },
            { name: "Prof. Muhammad Idrees", image: "/images/Faculty/imgi_9_Idrees.png", role: "Faculty" },
            { name: "Prof. S. Bakar Mujeeb", image: "/images/Faculty/imgi_10_Bakar.png", role: "Faculty" },
        ]
    },
    {
        name: "English Department",
        members: [
            { name: "Prof. M. Irfan Qureshi", image: "/images/Faculty/imgi_11_Irfan.png", role: "HOD English" },
            { name: "Prof. Latif Dallas", image: "/images/Faculty/imgi_12_Dallas-1.png", role: "Faculty" },
            { name: "Prof. Talat Mateen", image: "/images/Faculty/imgi_13_Talat.png", role: "Faculty" },
            { name: "Prof. Marium Khurram", image: "/images/Faculty/imgi_14_Maryam.png", role: "Faculty" },
            { name: "Prof. Ali Sher Jamali", image: "/images/Faculty/imgi_15_Ali_Sher-1.png", role: "Faculty" },
        ]
    },
    {
        name: "Urdu Department",
        members: [
            { name: "Prof. Erum Aziz", image: "/images/Faculty/imgi_16_Erum.png", role: "HOD Urdu" },
            { name: "Prof. M. Younus Khan", image: "/images/Faculty/imgi_17_Younis.png", role: "Faculty" },
            { name: "Prof. Rubina Aziz", image: "/images/Faculty/imgi_18_Rubina.png", role: "Faculty" },
            { name: "Prof. Ashna Aslam", image: "/images/Faculty/imgi_19_Ashna.png", role: "Faculty" },
            { name: "Prof. Irshad Anwer", image: "/images/Faculty/imgi_20_Irshad.png", role: "Faculty" },
        ]
    },
    {
        name: "Physics Department",
        members: [
            { name: "Prof. Sohail Ibrahim", image: "/images/Faculty/imgi_21_Sohail_Ibrahim.png", role: "HOD Physics" },
            { name: "Prof. Muhammad Pervez", image: "/images/Faculty/imgi_22_Pervez.png", role: "Faculty" },
            { name: "Prof. Muhammad Raees", image: "/images/Faculty/imgi_23_Raees-1.png", role: "Faculty" },
            { name: "Prof. Kamran Akhter", image: "/images/Faculty/imgi_24_Kamran.png", role: "Faculty" },
            { name: "Prof. Qazi Naeem", image: "/images/Faculty/imgi_25_Qazi.png", role: "Faculty" },
        ]
    },
    {
        name: "Chemistry Department",
        members: [
            { name: "Prof. Ahsan Naseem", image: "/images/Faculty/imgi_26_Ehsan.png", role: "HOD Chemistry" },
            { name: "Prof. Saima Adnan", image: "/images/Faculty/imgi_27_Saima.png", role: "Faculty" },
            { name: "Prof. Uzma Aleem", image: "/images/Faculty/imgi_28_Uzma.png", role: "Faculty" },
            { name: "Prof. Sana Salman", image: "/images/Faculty/imgi_29_Sana.png", role: "Faculty" },
        ]
    },
    {
        name: "Biology & Botany Department",
        members: [
            { name: "Prof. Nighat", image: "/images/Faculty/imgi_30_Nighat.png", role: "Faculty" },
            { name: "Prof. Maham", image: "/images/Faculty/imgi_31_Maham.png", role: "Faculty" },
            { name: "Prof. Iqra", image: "/images/Faculty/imgi_32_Iqra.png", role: "Faculty" },
            { name: "Prof. Zubia", image: "/images/Faculty/imgi_33_Zubia.png", role: "Faculty" },
        ]
    },
    {
        name: "Mathematics & Computer Science",
        members: [
            { name: "Prof. Sohail Farooqi", image: "/images/Faculty/imgi_38_Sohail_Farooqi.png", role: "HOD Math" },
            { name: "Prof. M. Aquib", image: "/images/Faculty/imgi_36_Aquib.png", role: "Faculty" },
            { name: "Prof. Abid", image: "/images/Faculty/imgi_34_Abid_Blue-1.png", role: "Faculty" },
            { name: "Prof. Saad", image: "/images/Faculty/imgi_37_Saad-1.png", role: "Faculty" },
            { name: "Prof. Imran", image: "/images/Faculty/imgi_39_Imran.png", role: "Faculty" },
        ]
    },
    {
        name: "General Faculty",
        members: [
            { name: "Prof. Wirasat", image: "/images/Faculty/imgi_40_Wirasat.png", role: "Sentiments" },
            { name: "Prof. Sidra", image: "/images/Faculty/imgi_35_Sidra.png", role: "Faculty" },
            { name: "Prof. Amber", image: "/images/Faculty/imgi_41_Amber.png", role: "Faculty" },
            { name: "Prof. Raheel", image: "/images/Faculty/imgi_42_Raheel-1.png", role: "Faculty" },
            { name: "Prof. Ghazala", image: "/images/Faculty/imgi_43_Ghazala-1.png", role: "Faculty" },
        ]
    }
];

const Faculty = () => {
    // Animation Variants
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 50, scale: 0.95, filter: "blur(10px)" },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            filter: "blur(0px)",
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 20
            }
        }
    };

    return (
        <section className="py-24 bg-gradient-to-br from-gray-50 via-gray-100 to-[#800000]/5 min-h-screen">
            <div className="container mx-auto px-6">
                <div className="space-y-32">
                    {departments.map((dept, deptIndex) => (
                        <div key={deptIndex} className="relative">

                            {/* Department Header */}
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ type: "spring", stiffness: 50, damping: 20 }}
                                className="mb-12 border-l-4 border-[#800000] pl-6"
                            >
                                <h3 className="text-4xl font-heading font-black text-gray-900 uppercase tracking-tighter shadow-sm">
                                    {dept.name}
                                </h3>
                            </motion.div>

                            {/* Faculty Grid */}
                            <motion.div
                                variants={containerVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-50px" }}
                                className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8"
                            >
                                {dept.members.map((member, index) => (
                                    <motion.div
                                        key={index}
                                        variants={itemVariants}
                                        whileHover={{ y: -12, scale: 1.02 }}
                                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                        className="group relative bg-white/40 backdrop-blur-md rounded-2xl overflow-hidden border border-white/20 shadow-lg hover:shadow-2xl transition-all duration-300"
                                    >
                                        {/* Image Container */}
                                        <div className="relative aspect-[4/5] w-full overflow-hidden">
                                            {/* Light Red Gradient Background behind image */}
                                            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#800000]/10 z-0"></div>

                                            <Image
                                                src={member.image}
                                                alt={member.name}
                                                fill
                                                className="object-cover relative z-10 transition-transform duration-500 group-hover:scale-105"
                                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 20vw"
                                            />

                                            {/* Gradient Overlay for Text Readability */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20"></div>
                                        </div>

                                        {/* Content Box */}
                                        <div className="p-4 relative z-30 bg-white/80 backdrop-blur-sm group-hover:bg-white transition-colors border-t border-white/40">
                                            <h4 className="text-base font-bold text-gray-900 leading-tight mb-1 group-hover:text-[#800000] transition-colors">
                                                {member.name}
                                            </h4>
                                            <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                                                {member.role}
                                            </p>
                                        </div>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Faculty;
