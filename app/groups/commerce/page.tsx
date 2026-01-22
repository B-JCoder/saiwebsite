"use strict";
"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FaCalculator,
  FaCheckCircle,
  FaGraduationCap,
  FaUniversity,
} from "react-icons/fa";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import DepartmentFaculty from "@/components/DepartmentFaculty";

export default function CommercePage() {
  const subjects = [
    "Accounting",
    "Principles of Commerce",
    "Economics",
    "Business Math",
    "English",
    "Urdu",
  ];
  const careers = [
    "Chartered Accountancy (CA)",
    "ACCA",
    "Business Administration (BBA)",
    "Banking & Finance",
    "Entrepreneurship",
    "Marketing",
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <PageHeader
        title="Commerce"
        subtitle="Academic Pathway"
        imageSrc="/images/hero-bg.jpg"
      />

      {/* Overview Section */}
      <section className="py-24 px-6 container mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-black text-[#800000] uppercase mb-6">
              Business Leadership
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Our Commerce program is designed for future business leaders and
              entrepreneurs. We provide deep insights into Accounting,
              Economics, and Business Management, preparing students for CA,
              ACCA, BBA, and MBA programs.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 font-medium text-gray-800">
                <FaCheckCircle className="text-[#DAA520]" /> Fundamentals of
                Accounting
              </li>
              <li className="flex items-center gap-3 font-medium text-gray-800">
                <FaCheckCircle className="text-[#DAA520]" /> Entrepreneurship
                Seminars
              </li>
              <li className="flex items-center gap-3 font-medium text-gray-800">
                <FaCheckCircle className="text-[#DAA520]" /> Internship
                Opportunities
              </li>
            </ul>
          </motion.div>

          {/* Eligibility Box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-emerald-50 p-10 rounded-3xl border border-emerald-100 shadow-xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <FaCalculator size={120} className="text-emerald-900" />
            </div>
            <h3 className="text-2xl font-bold text-black uppercase tracking-wide mb-6">
              Eligibility
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white rounded-xl shadow-sm">
                  <FaUniversity className="text-emerald-900" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">
                    Matriculation / O-Levels
                  </h4>
                  <p className="text-sm text-gray-600">
                    Passed with Science/Arts/Commerce.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white rounded-xl shadow-sm">
                  <FaCheckCircle className="text-emerald-900" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Minimum Marks</h4>
                  <p className="text-sm text-gray-600">
                    50% or above in aggregate.
                  </p>
                </div>
              </div>
            </div>
            <Link
              href="/admissions"
              className="mt-8 block w-full bg-emerald-900 text-white text-center py-4 rounded-xl font-bold uppercase tracking-widest hover:bg-[#DAA520] hover:text-black transition-colors"
            >
              Apply for Admission
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Curriculum Grid */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-[#DAA520] font-bold uppercase tracking-widest">
              Curriculum
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-black uppercase mt-2">
              Core Subjects
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {subjects.map((sub, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-all border border-gray-100 flex flex-col items-center justify-center text-center gap-4 group"
              >
                <div className="w-12 h-12 bg-emerald-50 text-emerald-900 rounded-xl flex items-center justify-center text-xl group-hover:bg-emerald-900 group-hover:text-white transition-colors">
                  <FaCheckCircle />
                </div>
                <span className="font-bold text-gray-800">{sub}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Faculty Section */}
      {/* Faculty Section */}
      <DepartmentFaculty
        departments={[
          "commerce",
          "english",
          "urdu",
          "islamic_studies",
          "pakistan_studies",
        ]}
      />

      {/* Career Roadmap */}
      <section className="py-24 px-6 container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-[#DAA520] font-bold uppercase tracking-widest">
            Future Scope
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-black uppercase mt-2">
            Career Roadmap
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {careers.map((career, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all group"
            >
              <div className="mb-6 opacity-20 group-hover:opacity-100 transition-opacity">
                <FaGraduationCap size={40} className="text-emerald-900" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{career}</h3>
              <div className="w-12 h-1 bg-[#DAA520] rounded-full group-hover:w-full transition-all duration-500" />
            </motion.div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <Link
            href="/admissions"
            className="inline-flex items-center gap-3 text-lg font-bold text-[#800000] hover:text-[#DAA520] transition-colors uppercase tracking-widest"
          >
            Start Your Journey <ArrowRight />
          </Link>
        </div>
      </section>
    </div>
  );
}
