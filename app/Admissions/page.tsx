"use strict";
"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FaUserGraduate,
  FaFileAlt,
  FaPenNib,
  FaCheckCircle,
  FaDownload,
} from "react-icons/fa";
import Link from "next/link";

export default function AdmissionsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[#800000]">
          {/* Overlay & Pattern */}
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 opacity-10 bg-[url('/images/imgi_13_Page12.png')] bg-cover bg-center" />
        </div>

        <div className="relative z-10 text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="block text-[#DAA520] font-bold tracking-[0.3em] uppercase mb-4">
              Admissions Open 2026
            </span>
            <h1 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter">
              Join the Legacy
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 container mx-auto px-6 text-center max-w-4xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xl md:text-2xl text-gray-800 font-light leading-relaxed"
        >
          Step into an environment of academic excellence. At Sir Adamjee
          Institute, we groom future leaders through rigorous academics and
          character building.
        </motion.p>
      </section>

      {/* Admission Process Timeline */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-black text-[#800000] uppercase text-center mb-16"
          >
            Admission Process
          </motion.h2>

          <div className="flex flex-col md:flex-row justify-between items-center relative gap-8 md:gap-0">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gray-200 -z-0 -translate-y-1/2" />

            {[
              { icon: FaFileAlt, title: "Submit Documents", step: "01" },
              { icon: FaPenNib, title: "Entrance Test", step: "02" },
              { icon: FaUserGraduate, title: "Interview", step: "03" },
              { icon: FaCheckCircle, title: "Selection", step: "04" },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="relative z-10 bg-white p-6 rounded-2xl shadow-lg border border-gray-100 w-64 text-center group hover:-translate-y-2 transition-transform duration-300"
              >
                <div className="w-16 h-16 bg-[#800000] text-white rounded-full flex items-center justify-center text-2xl mx-auto mb-4 border-4 border-white shadow-md group-hover:bg-[#DAA520] transition-colors">
                  <item.icon />
                </div>
                <h3 className="font-bold text-gray-900 uppercase tracking-wide">
                  {item.title}
                </h3>
                <div className="absolute -top-4 -right-4 w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center font-black text-gray-300">
                  {item.step}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility Criteria */}
      <section className="py-24 container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-black text-black uppercase text-center mb-16"
        >
          Eligibility Criteria
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white border-t-4 border-[#800000] p-8 shadow-[0_10px_40px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_50px_rgba(128,0,0,0.1)] transition-all">
            <h3 className="text-xl font-bold text-[#800000] uppercase mb-4">
              Matric / O-Levels
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Minimum <span className="font-bold text-black">60% marks</span>{" "}
              required in Matriculation or equivalent O-Levels certification.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white border-t-4 border-[#DAA520] p-8 shadow-[0_10px_40px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_50px_rgba(218,165,32,0.1)] transition-all">
            <h3 className="text-xl font-bold text-black uppercase mb-4">
              Documents Required
            </h3>
            <ul className="space-y-3 text-gray-600 text-sm font-medium">
              <li className="flex items-center gap-2">
                <FaCheckCircle className="text-[#DAA520]" /> 2 Passport size
                photographs
              </li>
              <li className="flex items-center gap-2">
                <FaCheckCircle className="text-[#DAA520]" /> Copy of Mark sheet
                / Admit Card
              </li>
              <li className="flex items-center gap-2">
                <FaCheckCircle className="text-[#DAA520]" /> Copy of B-Form
              </li>
            </ul>
          </div>

          {/* Card 3 */}
          <div className="bg-white border-t-4 border-[#800000] p-8 shadow-[0_10px_40px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_50px_rgba(128,0,0,0.1)] transition-all">
            <h3 className="text-xl font-bold text-[#800000] uppercase mb-4">
              Entrance Test
            </h3>
            <p className="text-gray-600 leading-relaxed">
              All applicants must clear the college{" "}
              <span className="font-bold text-black">Entrance Test</span> and
              undergo a personal interview for final selection.
            </p>
          </div>
        </div>
      </section>

      {/* Scholarships & Financial Aid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-black uppercase tracking-tighter mb-6">
              Scholarships & Aid
            </h2>
            <div className="w-24 h-1 bg-[#DAA520] mx-auto rounded-full"></div>
            <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
              We believe talent shouldn't be limited by resources. SAI offers
              generous scholarships to deserving students.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-gray-50 p-10 rounded-3xl border border-gray-100 hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold text-[#800000] mb-4 flex items-center gap-3">
                <FaUserGraduate /> Merit Scholarship
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Awarded to students with exceptional academic performance in
                their Matriculation / O-Level results.
              </p>
              <ul className="space-y-3 text-sm font-medium text-black">
                <li className="flex justify-between border-b border-gray-200 pb-2">
                  <span>90% + Marks</span>
                  <span className="text-[#DAA520]">
                    100% Tuition Fee Waiver
                  </span>
                </li>
                <li className="flex justify-between border-b border-gray-200 pb-2">
                  <span>85% - 89% Marks</span>
                  <span className="text-[#DAA520]">50% Tuition Fee Waiver</span>
                </li>
                <li className="flex justify-between border-b border-gray-200 pb-2">
                  <span>80% - 84% Marks</span>
                  <span className="text-[#DAA520]">25% Tuition Fee Waiver</span>
                </li>
              </ul>
            </div>

            <div className="bg-[#800000] p-10 rounded-3xl text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#DAA520] blur-[80px] opacity-20 rounded-full"></div>
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <FaCheckCircle className="text-[#DAA520]" /> Need-Based Aid
              </h3>
              <p className="text-white/80 mb-6 leading-relaxed">
                Financial assistance for students who demonstrate financial
                need. We are committed to ensuring that every qualified student
                can access a SAI education.
              </p>
              <Link
                href="/contact-us"
                className="inline-block mt-4 text-[#DAA520] font-bold uppercase tracking-widest border-b-2 border-[#DAA520] hover:text-white hover:border-white transition-colors"
              >
                Apply for Assistance
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="text-3xl font-black text-center text-black uppercase mb-12">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {[
              {
                q: "Is transport facility available?",
                a: "Yes, we provide safe and reliable transport coverage for major areas of Karachi.",
              },
              {
                q: "What is the uniform code?",
                a: "Boys: White Shirt, Grey Trousers, Black Shoes. Girls: White Kameez, White Shalwar, Maroon Dupatta.",
              },
              {
                q: "Are there extra-curricular activities?",
                a: "Absolutely! We have active clubs for Debates, Sports, Science, and Arts.",
              },
            ].map((faq, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100"
              >
                <h4 className="font-bold text-lg text-[#800000] mb-2">
                  {faq.q}
                </h4>
                <p className="text-gray-600 text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fee Structure */}
      <section className="py-24 bg-[#1a1a1a] text-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-black uppercase text-[#DAA520] mb-4">
              Fee Structure
            </h2>
            <p className="text-gray-400">
              Transparent and affordable investment in your future.
            </p>
          </motion.div>

          <div className="bg-white text-black rounded-3xl overflow-hidden shadow-2xl">
            {/* Header */}
            <div className="bg-[#800000] text-white p-6 text-center">
              <h3 className="text-2xl font-bold uppercase tracking-widest">
                Academic Session 2026-27
              </h3>
            </div>

            {/* Rows */}
            <div className="divide-y divide-gray-100">
              {[
                { label: "Admission Fee (One Time)", amount: "PKR 15,000" },
                { label: "Tuition Fee (Monthly)", amount: "PKR 5,500" },
                { label: "Lab Charges (Yearly)", amount: "PKR 3,000" },
                { label: "Examination Fee", amount: "PKR 2,000" },
              ].map((row, i) => (
                <div
                  key={i}
                  className="flex justify-between items-center p-6 hover:bg-gray-50 transition-colors"
                >
                  <span className="font-bold text-gray-700">{row.label}</span>
                  <span className="font-bold text-xl">{row.amount}</span>
                </div>
              ))}
            </div>

            {/* Total */}
            <div className="bg-[#DAA520] p-8 flex justify-between items-center">
              <span className="text-black font-black uppercase tracking-widest text-lg md:text-xl">
                Total at Admission
              </span>
              <span className="text-black font-black text-3xl md:text-4xl">
                PKR 25,500
              </span>
            </div>
          </div>

          <p className="text-center text-gray-500 mt-6 text-sm italic">
            * Fees are subject to change without prior notice.
          </p>
        </div>
      </section>

      {/* Download CTA */}
      <section className="py-20 container mx-auto px-6 text-center">
        <div className="bg-gray-50 border border-gray-200 rounded-3xl p-12 relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-3xl font-black text-black uppercase mb-6">
              Ready to Apply?
            </h2>
            <p className="text-gray-600 mb-8 text-lg">
              Download the admission form and take the first step towards a
              bright future.
            </p>
            <div className="flex flex-col md:flex-row gap-6 justify-center">
              <Link
                href="/admissions/apply"
                className="bg-[#DAA520] text-black px-10 py-4 rounded-xl font-bold uppercase tracking-widest hover:bg-[#800000] hover:text-white transition-colors shadow-lg inline-flex items-center gap-3"
              >
                Apply Online Now
              </Link>
              <button className="bg-white text-[#800000] border-2 border-[#800000] px-10 py-4 rounded-xl font-bold uppercase tracking-widest hover:bg-[#800000] hover:text-white transition-colors shadow-lg inline-flex items-center gap-3">
                <FaDownload /> Download Form
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
