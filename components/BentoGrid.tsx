"use client";

import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaAward,
  FaUserGraduate,
  FaChalkboardTeacher,
  FaVideo,
} from "react-icons/fa";
import CountUp from "react-countup";

const BentoGrid = () => {
  return (
    <section className="py-24 bg-background container mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-3 gap-6 h-auto md:h-[800px]">
        {/* 1. Large Feature Card (About) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="md:col-span-2 md:row-span-2 bg-primary rounded-3xl p-8 md:p-12 relative overflow-hidden flex flex-col justify-between group"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-[100px] -mr-32 -mt-32"></div>

          <div className="relative z-10">
            <span className="text-accent text-xs font-bold uppercase tracking-[0.2em] mb-4 block">
              Who We Are
            </span>
            <h2 className="text-4xl lg:text-5xl font-heading font-black text-white leading-tight mb-6">
              We Don't Just Teach. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-yellow-200">
                We Transform.
              </span>
            </h2>
            <p className="text-gray-300 leading-relaxed max-w-md">
              Sir Adamjee Institute is more than a college. It's a launchpad for
              the country's brightest minds. We combine academic rigor with
              moral integrity.
            </p>
          </div>

          <button className="mt-8 w-fit px-6 py-3 border border-white/20 rounded-full text-white text-sm font-bold uppercase hover:bg-white hover:text-primary transition-all">
            Read Our Story
          </button>
        </motion.div>

        {/* 2. Stat Card 1 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="md:col-span-1 md:row-span-1 bg-white border border-gray-100 shadow-xl rounded-3xl p-6 flex flex-col items-center justify-center text-center hover:border-accent transition-colors"
        >
          <FaGraduationCap className="text-4xl text-accent mb-2" />
          <h3 className="text-4xl font-black text-primary font-heading">
            <CountUp end={21} duration={3} suffix="+" />
          </h3>
          <p className="text-xs text-gray-500 font-bold uppercase mt-1">
            Years of Excellence
          </p>
        </motion.div>

        {/* 3. Stat Card 2 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="md:col-span-1 md:row-span-1 bg-[#0f0f0f] rounded-3xl p-6 flex flex-col items-center justify-center text-center text-white relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-black opacity-50"></div>
          <div className="relative z-10">
            <FaUserGraduate className="text-4xl text-gray-400 mb-2 mx-auto" />
            <h3 className="text-4xl font-black font-heading">
              <CountUp end={9000} duration={3} suffix="+" />
            </h3>
            <p className="text-xs text-gray-400 font-bold uppercase mt-1">
              Alumni Network
            </p>
          </div>
        </motion.div>

        {/* 4. Video/Media Card (Wide) */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="md:col-span-2 md:row-span-1 bg-accent rounded-3xl relative overflow-hidden group cursor-pointer"
        >
          {/* Placeholder for a cool image or video snippet */}
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors z-10"></div>
          <img
            src="/imgaes/imgi_2_Page1-scaled.jpg"
            alt="Campus Life"
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />

          <div className="absolute bottom-6 left-6 z-20">
            <div className="w-10 h-10 bg-white/20 backdrop-blur rounded-full flex items-center justify-center text-white mb-2">
              <FaVideo />
            </div>
            <h3 className="text-xl font-bold text-white uppercase tracking-wider">
              Campus Life
            </h3>
          </div>
        </motion.div>

        {/* 5. Highlight / News Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="md:col-span-2 md:row-span-1 bg-white border border-gray-100 shadow-lg rounded-3xl p-8 flex items-center justify-between group hover:shadow-2xl transition-all"
        >
          <div>
            <span className="text-red-600 font-bold text-xs uppercase tracking-widest mb-1 block">
              Latest News
            </span>
            <h3 className="text-xl font-bold text-primary mb-2 line-clamp-2">
              Admissions Open for Fall 2026 Session
            </h3>
            <a
              href="/Admissions"
              className="text-sm font-semibold text-gray-400 group-hover:text-accent transition-colors flex items-center gap-2"
            >
              Apply Now →
            </a>
          </div>
          <div className="w-16 h-16 bg-red-50 rounded-2xl flex items-center justify-center text-red-600 text-2xl group-hover:rotate-12 transition-transform">
            <FaChalkboardTeacher />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BentoGrid;
