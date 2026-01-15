"use client";

import { motion } from "framer-motion";
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
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="mb-20 text-center">
                    <span className="uppercase text-xs font-black text-accent tracking-[0.3em] block mb-2">Academic Pillars</span>
                    <h2 className="text-4xl md:text-5xl font-heading font-black text-primary uppercase tracking-tighter">Our Distinguished Faculty</h2>
                    <div className="w-24 h-1 bg-accent mx-auto mt-4"></div>
                </div>

                <div className="space-y-24">
                    {departments.map((dept, deptIndex) => (
                        <div key={deptIndex}>
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="mb-10 flex items-center gap-4"
                            >
                                <div className="h-10 w-2 bg-accent rounded-full"></div>
                                <h3 className="text-3xl font-black text-primary font-heading uppercase tracking-tight">{dept.name}</h3>
                            </motion.div>

                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
                                {dept.members.map((member, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="group flex flex-col items-center text-center"
                                    >
                                        <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full shadow-xl overflow-hidden mb-4 border-4 border-white ring-2 ring-primary/10 group-hover:ring-accent transition-all duration-500">
                                            <Image
                                                src={member.image}
                                                alt={member.name}
                                                fill
                                                className="object-cover object-top transition-transform duration-500 group-hover:scale-110"
                                                sizes="(max-width: 768px) 160px, 192px"
                                            />
                                        </div>
                                        <h4 className="text-sm md:text-base font-bold text-primary uppercase tracking-tight leading-tight mb-1">{member.name}</h4>
                                        <p className="text-[10px] md:text-xs font-bold text-accent uppercase tracking-widest">{member.role}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Faculty;
