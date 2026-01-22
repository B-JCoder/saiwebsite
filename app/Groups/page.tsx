"use client";

import React, { useState, useEffect } from "react";
import {
  FaFlask,
  FaCalculator,
  FaBookOpen,
  FaArrowRight,
  FaMicroscope,
  FaLaptopCode,
  FaAtom,
  FaTimes,
  FaCheckCircle,
  FaGraduationCap,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { useSearchParams, useRouter } from "next/navigation";
import { Suspense } from "react";
import PageHeader from "@/components/PageHeader";

// Data
const groupsData = [
  {
    id: "pre-medical",
    title: "Pre-Medical",
    icon: FaMicroscope,
    desc: "Comprehensive biology and chemistry programs designed for future medical professionals.",
    subjects: [
      "Biology",
      "Physics",
      "Chemistry",
      "English",
      "Urdu",
      "Islamiat",
    ],
    color: "bg-red-50 text-[#800000]",
    details:
      "Our Pre-Medical program is rigorously designed to prepare students for entrance into top medical colleges (MBBS/BDS). We focus on conceptual clarity in Biology, Physics, and Chemistry, ensuring students excel in both Board Exams and MDCAT.",
    scope: [
      "MBBS (Doctor)",
      "BDS (Dentist)",
      "D-Pharmacy",
      "Biotechnology",
      "Microbiology",
      "Physiotherapy",
    ],
  },
  {
    id: "pre-engineering",
    title: "Pre-Engineering",
    icon: FaAtom,
    desc: "Advanced mathematics and physics curricula for aspiring engineers and innovators.",
    subjects: [
      "Mathematics",
      "Physics",
      "Chemistry",
      "English",
      "Urdu",
      "Islamiat",
    ],
    color: "bg-blue-50 text-blue-900",
    details:
      "The Pre-Engineering track lays a solid foundation in analytical thinking and problem-solving. With a strong emphasis on Mathematics and Physics, we prepare students for ECAT and admission into Pakistan's premier engineering universities like NED, NUST, and UET.",
    scope: [
      "Software Engineering",
      "Civil Engineering",
      "Mechanical Engineering",
      "Electrical Engineering",
      "Architecture",
      "Aviation",
    ],
  },
  {
    id: "commerce",
    title: "Commerce",
    icon: FaCalculator,
    desc: "Building foundations in accounting, economics, and business management.",
    subjects: [
      "Accounting",
      "Principles of Commerce",
      "Economics",
      "Business Math",
      "English",
      "Urdu",
    ],
    color: "bg-emerald-50 text-emerald-800",
    details:
      "Our Commerce program is designed for future business leaders and entrepreneurs. We provide deep insights into Accounting, Economics, and Business Management, preparing students for CA, ACCA, BBA, and MBA programs.",
    scope: [
      "Chartered Accountancy (CA)",
      "ACCA",
      "Business Administration (BBA)",
      "Banking & Finance",
      "Entrepreneurship",
      "Marketing",
    ],
  },
  {
    id: "computer-science-with-physics",
    title: "Computer Science (With Physics)",
    icon: FaLaptopCode,
    desc: "Cutting-edge computer science education focusing on programming and logic.",
    subjects: [
      "Computer Science",
      "Mathematics",
      "Physics",
      "English",
      "Urdu",
      "Islamiat",
    ],
    color: "bg-slate-50 text-slate-800",
    details:
      "In the digital age, Computer Science is the gateway to the future. Our ICS program offers a blend of programming, logic, and mathematics. Students can choose between Physics or Statistics combinations to tailor their path towards Software Engineering or Data Science.",
    scope: [
      "Software Development",
      "Data Science",
      "Artificial Intelligence",
      "Cyber Security",
      "Robotics",
      "IT Management",
    ],
  },
  {
    id: "computer-science-with-statistics",
    title: "Computer Science (With Statistics)",
    icon: FaLaptopCode,
    desc: "Cutting-edge computer science education focusing on programming and logic.",
    subjects: [
      "Computer Science",
      "Mathematics",
      "Statistics",
      "English",
      "Urdu",
      "Islamiat",
    ],
    color: "bg-slate-50 text-slate-800",
    details:
      "In the digital age, Computer Science is the gateway to the future. Our ICS program offers a blend of programming, logic, and mathematics. Students can choose between Physics or Statistics combinations to tailor their path towards Software Engineering or Data Science.",
    scope: [
      "Software Development",
      "Data Science",
      "Artificial Intelligence",
      "Cyber Security",
      "Robotics",
      "IT Management",
    ],
  },
];

function GroupsContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [selectedId, setSelectedId] = useState<string | null>(null);

  // Sync with URL
  useEffect(() => {
    const id = searchParams.get("id");
    if (id) {
      setSelectedId(id);
    } else {
      setSelectedId(null);
    }
  }, [searchParams]);

  // Handle Open
  const handleOpen = (id: string) => {
    setSelectedId(id);
    router.push(`/groups?id=${id}`, { scroll: false });
  };

  // Handle Close
  const handleClose = () => {
    setSelectedId(null);
    router.push("/groups", { scroll: false });
  };

  const selectedGroup = groupsData.find((g) => g.id === selectedId);

  return (
    <div className="bg-background min-h-screen relative">
      {/* Hero Section */}
      <PageHeader
        title="Academic Pathways"
        subtitle="Choose Your Future"
        imageSrc="/images/imgi_13_Page12.png"
      />

      <div className="container mx-auto px-6 py-24 relative z-10">
        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-10">
          {groupsData.map((group, idx) => (
            <motion.div
              key={group.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white/60 backdrop-blur-xl p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(128,0,0,0.1)] transition-all border border-white/50 group flex flex-col items-start h-full hover:-translate-y-2 duration-300"
            >
              <div
                className={`w-16 h-16 ${group.color} rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:bg-[#800000] group-hover:text-white transition-colors shadow-sm`}
              >
                <group.icon />
              </div>
              <h3 className="text-2xl font-bold text-black mb-3 uppercase tracking-tight group-hover:text-[#800000] transition-colors">
                {group.title}
              </h3>
              <p className="text-gray-600 mb-6 flex-grow text-sm leading-relaxed">
                {group.desc}
              </p>

              <button
                onClick={() => handleOpen(group.id)}
                className="w-full py-3 rounded-xl border border-[#800000]/20 text-[#800000] font-bold uppercase text-xs tracking-widest hover:bg-[#800000] hover:text-white transition-all flex items-center justify-center gap-2 mt-auto cursor-pointer"
              >
                View Details <FaArrowRight />
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal Overlay */}
      <AnimatePresence>
        {selectedGroup && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={handleClose}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 20, opacity: 0 }}
              className="bg-white rounded-[2rem] w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl relative overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header Image */}
              <div
                className={`h-40 md:h-60 w-full ${selectedGroup.color.split(" ")[0]} relative flex items-center justify-center overflow-hidden`}
              >
                <div className="absolute inset-0 opacity-10 pattern-dots" />
                <selectedGroup.icon className="text-9xl opacity-20" />
                <div className="absolute bottom-6 left-6 md:left-10 z-10">
                  <h2 className="text-4xl md:text-5xl font-black uppercase text-[#800000] bg-white/80 backdrop-blur-md px-6 py-2 rounded-full inline-block shadow-lg">
                    {selectedGroup.title}
                  </h2>
                </div>
                <button
                  onClick={handleClose}
                  className="absolute top-6 right-6 bg-white/20 hover:bg-white text-black p-3 rounded-full transition-all backdrop-blur-md z-50"
                >
                  <FaTimes size={20} />
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-8 md:p-12 space-y-10">
                {/* Description */}
                <div>
                  <h3 className="text-xl font-bold text-[#800000] uppercase tracking-widest mb-4 flex items-center gap-2">
                    <FaBookOpen /> Program Overview
                  </h3>
                  <p className="text-lg text-gray-700 leading-relaxed font-medium">
                    {selectedGroup.details}
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-10">
                  {/* Subjects */}
                  <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                    <h4 className="text-lg font-bold text-black uppercase tracking-widest mb-4">
                      Core Subjects
                    </h4>
                    <ul className="space-y-3">
                      {selectedGroup.subjects.map((sub, idx) => (
                        <li
                          key={idx}
                          className="flex items-center gap-3 text-gray-700 font-medium"
                        >
                          <FaCheckCircle className="text-[#DAA520] shrink-0" />
                          {sub}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Scope */}
                  <div className="bg-[#800000]/5 p-6 rounded-2xl border border-[#800000]/10">
                    <h4 className="text-lg font-bold text-[#800000] uppercase tracking-widest mb-4">
                      Future Career Scope
                    </h4>
                    <ul className="space-y-3">
                      {selectedGroup.scope.map((item, idx) => (
                        <li
                          key={idx}
                          className="flex items-center gap-3 text-[#800000] font-medium"
                        >
                          <FaGraduationCap className="shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Download Button or CTA */}
                <div className="flex justify-end pt-6 border-t border-gray-100">
                  <button
                    onClick={() => router.push("/admissions")}
                    className="bg-[#800000] text-white px-8 py-4 rounded-xl font-bold uppercase tracking-widest hover:bg-[#DAA520] transition-colors shadow-lg"
                  >
                    Enrol in {selectedGroup.title}
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Groups() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-transparent"></div>}>
      <GroupsContent />
    </Suspense>
  );
}
