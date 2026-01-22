"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

type FacultyMember = {
  name: string;
  designation?: string;
  image: string;
  isHead?: boolean;
};

type DepartmentKey =
  | "commerce"
  | "english"
  | "urdu"
  | "physics"
  | "chemistry"
  | "biology"
  | "mathematics"
  | "computer_science"
  | "islamic_studies"
  | "pakistan_studies";

const departmentsData: Record<
  DepartmentKey,
  { title: string; color: string; members: FacultyMember[] }
> = {
  commerce: {
    title: "Commerce Department",
    color: "#800000",
    members: [
      {
        name: "Prof. S. Qutubuddin Hayder",
        designation: "Vice Principal",
        image: "/images/Faculty/ProfSQutubuddin Hayder Vice Principal.png",
        isHead: true,
      },
      {
        name: "Prof. Humaira Qayyum",
        designation: "HOD Commerce",
        image: "/images/Faculty/imgi_7_Humeria.png",
        isHead: true,
      },
      {
        name: "Prof. Rehman Younus",
        image: "/images/Faculty/imgi_8_Rehman.png",
      },
      {
        name: "Prof. Muhammad Idrees",
        image: "/images/Faculty/imgi_9_Idrees.png",
      },
      {
        name: "Prof. S. Bakar Mujeeb",
        image: "/images/Faculty/imgi_10_Bakar.png",
      },
    ],
  },
  english: {
    title: "English Department",
    color: "#800000",
    members: [
      {
        name: "Prof. M. Irfan Qureshi",
        designation: "HOD English",
        image: "/images/Faculty/imgi_11_Irfan.png",
        isHead: true,
      },
      {
        name: "Prof. Latif Dallas",
        image: "/images/Faculty/imgi_12_Dallas-1.png",
      },
      {
        name: "Prof. Talat Mateen",
        image: "/images/Faculty/imgi_13_Talat.png",
      },
      {
        name: "Prof. Marium Khurram",
        image: "/images/Faculty/imgi_14_Maryam.png",
      },
      {
        name: "Prof. Ali Sher Jamali",
        image: "/images/Faculty/imgi_15_Ali_Sher-1.png",
      },
    ],
  },
  urdu: {
    title: "Urdu Department",
    color: "#800000",
    members: [
      {
        name: "Prof. Erum Aziz",
        designation: "HOD Urdu",
        image: "/images/Faculty/imgi_16_Erum.png",
        isHead: true,
      },
      {
        name: "Prof. M. Younus Khan",
        image: "/images/Faculty/imgi_17_Younis.png",
      },
      {
        name: "Prof. Rubina Aziz",
        image: "/images/Faculty/imgi_18_Rubina.png",
      },
      {
        name: "Prof. Ashna Aslam",
        image: "/images/Faculty/imgi_19_Ashna.png",
      },
      {
        name: "Prof. Irshad Anwer",
        image: "/images/Faculty/imgi_20_Irshad.png",
      },
    ],
  },
  physics: {
    title: "Physics Department",
    color: "#800000",
    members: [
      {
        name: "Prof. Sohail Ibrahim",
        designation: "HOD Physics",
        image: "/images/Faculty/imgi_21_Sohail_Ibrahim.png",
        isHead: true,
      },
      {
        name: "Prof. Muhammad Pervez",
        image: "/images/Faculty/imgi_22_Pervez.png",
      },
      {
        name: "Prof. Muhammad Raees",
        image: "/images/Faculty/imgi_23_Raees-1.png",
      },
      {
        name: "Prof. Kamran Akhter",
        image: "/images/Faculty/imgi_24_Kamran.png",
      },
      {
        name: "Prof. Qazi Naeem",
        image: "/images/Faculty/imgi_25_Qazi.png",
      },
    ],
  },
  chemistry: {
    title: "Chemistry Department",
    color: "#800000",
    members: [
      {
        name: "Prof. Ahsan Naseem",
        designation: "HOD Chemistry",
        image: "/images/Faculty/imgi_26_Ehsan.png",
        isHead: true,
      },
      {
        name: "Prof. Saima Adnan",
        image: "/images/Faculty/imgi_27_Saima.png",
      },
      {
        name: "Prof. Uzma Aleem",
        image: "/images/Faculty/imgi_28_Uzma.png",
      },
      {
        name: "Prof. Sana Salman",
        image: "/images/Faculty/imgi_29_Sana.png",
      },
    ],
  },
  biology: {
    title: "Biology Department",
    color: "#800000",
    members: [
      {
        name: "Prof. Nighat Jahan",
        designation: "HOD Biology",
        image: "/images/Faculty/imgi_30_Nighat.png",
        isHead: true,
      },
      {
        name: "Prof. Maham Jahan",
        image: "/images/Faculty/imgi_31_Maham.png",
      },
      {
        name: "Prof. Iqra Islam",
        image: "/images/Faculty/imgi_32_Iqra.png",
      },
      {
        name: "Prof. Zubia Saleem",
        image: "/images/Faculty/imgi_33_Zubia.png",
      },
    ],
  },
  mathematics: {
    title: "Mathematics Department",
    color: "#800000",
    members: [
      {
        name: "Prof. Syed Abid Ali",
        designation: "HOD Mathematics",
        image: "/images/Faculty/imgi_34_Abid_Blue-1.png",
        isHead: true,
      },
      {
        name: "Prof. Sidra Aslam",
        image: "/images/Faculty/imgi_35_Sidra.png",
      },
      {
        name: "Prof. M. Aquib Naseem",
        image: "/images/Faculty/imgi_36_Aquib.png",
      },
      {
        name: "Prof. Saad Jameel",
        image: "/images/Faculty/imgi_37_Saad-1.png",
      },
    ],
  },
  computer_science: {
    title: "Computer Science Department",
    color: "#800000",
    members: [
      {
        name: "Prof. Sohail Farooqi",
        designation: "Principal",
        image: "/images/Faculty/imgi_38_Sohail_Farooqi.png",
        isHead: true,
      },
      {
        name: "Prof. Imran Khan",
        image: "/images/Faculty/imgi_39_Imran.png",
      },
      {
        name: "Prof. S. Werasat Hussain",
        image: "/images/Faculty/imgi_40_Wirasat.png",
      },
    ],
  },
  islamic_studies: {
    title: "Islamic Studies Department",
    color: "#800000",
    members: [
      {
        name: "Prof. Amber Asif",
        designation: "HOD Islamiat",
        image: "/images/Faculty/imgi_41_Amber.png",
        isHead: true,
      },
      {
        name: "Prof. Muhammad Raheel",
        image: "/images/Faculty/imgi_42_Raheel-1.png",
      },
    ],
  },
  pakistan_studies: {
    title: "Pakistan Studies Department",
    color: "#800000",
    members: [
      {
        name: "Prof. Syed Bakar Mujeeb",
        designation: "HOD Pak. Studies",
        image: "/images/Faculty/imgi_10_Bakar.png",
        isHead: true,
      },
      {
        name: "Prof. Ghazala Shaheen",
        image: "/images/Faculty/imgi_43_Ghazala-1.png",
      },
    ],
  },
};

export default function DepartmentFaculty({
  departments,
}: {
  departments: DepartmentKey[];
}) {
  return (
    <section className="py-20 bg-gray-50/50">
      <div className="container mx-auto px-6 space-y-24">
        {departments.map((deptKey) => {
          const dept = departmentsData[deptKey];
          if (!dept) return null;

          const heads = dept.members.filter((m) => m.isHead);
          const others = dept.members.filter((m) => !m.isHead);

          return (
            <div key={deptKey} className="text-center">
              {/* Department Title */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl font-bold text-[#800000] uppercase mb-12 tracking-tight"
              >
                {dept.title}
              </motion.h2>

              {/* Heads Row */}
              <div className="flex flex-wrap justify-center gap-10 mb-10">
                {heads.map((member, i) => (
                  <FacultyMemberCard key={i} member={member} isHead />
                ))}
              </div>

              {/* Others Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-center">
                {others.map((member, i) => (
                  <FacultyMemberCard key={i} member={member} />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function FacultyMemberCard({
  member,
  isHead = false,
}: {
  member: FacultyMember;
  isHead?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className={`flex flex-col items-center group ${isHead ? "mx-auto" : ""}`}
    >
      <div className="relative mb-4">
        {/* Decorative Line above HOD if desired, trying to match image minimal style */}
        {isHead && (
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-24 h-1 bg-[#800000] rounded-full" />
        )}

        <div className="w-48 h-48 md:w-56 md:h-56 relative overflow-hidden rounded-[2rem] border-4 border-white shadow-[0_10px_30px_rgba(128,0,0,0.15)] group-hover:shadow-[0_20px_40px_rgba(128,0,0,0.25)] transition-all bg-[#800000] z-10">
          {/* Red Background Arc */}
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/20 to-transparent" />

          <Image
            src={member.image}
            alt={member.name}
            fill
            className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
            quality={100}
          />
        </div>

        {/* Red Line connector visuals from screenshot? Simple border is enough for now */}
      </div>

      <h3 className="text-xl font-bold text-[#800000] mb-1">{member.name}</h3>
      {member.designation && (
        <p className="text-blue-600 font-bold uppercase text-sm tracking-wide">
          {member.designation}
        </p>
      )}
    </motion.div>
  );
}
