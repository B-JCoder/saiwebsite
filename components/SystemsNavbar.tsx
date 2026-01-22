"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Search, Globe, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function SystemsNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Ticker */}
      <div className="w-full bg-black/80 text-white/80 text-[10px] md:text-xs py-1 overflow-hidden z-50 relative border-b border-white/10">
        <div className="whitespace-nowrap animate-ticker">
          <span className="mx-4">
            Admissions Open 2026 | Scholarships Available for Merit Students
          </span>
          <span className="mx-4">|</span>
          <span className="mx-4">
            New Campus Inauguration Soon | Visit Us Today
          </span>
          <span className="mx-4">|</span>
          <span className="mx-4">
            Admissions Open 2026 | Scholarships Available for Merit Students
          </span>
        </div>
      </div>

      <nav
        className={`fixed top-6 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-black/90 backdrop-blur-md py-3 shadow-lg"
            : "bg-transparent py-5"
        }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          {/* Left Side: Logo + specific Links */}
          <div className="flex items-center gap-8 md:gap-12">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              {/* Using a text logo or replacer for now if image not perfectly sized, but adhering to prompt */}
              <span className="text-2xl md:text-3xl font-black text-white tracking-tighter uppercase">
                SAI<span className="text-[#DAA520]">.</span>
              </span>
            </Link>

            {/* Desktop Menu - Left Aligned next to Logo */}
            <div className="hidden md:flex items-center gap-6">
              {[
                { name: "About", href: "/about-us" },
                { name: "Mission", href: "/mission" },
                { name: "Faculty", href: "/faculty" }, // Assuming page exists or section
                { name: "Admissions", href: "/Admissions" },
                { name: "Downloads", href: "/downloads" },
              ].map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-white/90 hover:text-[#DAA520] transition-colors uppercase tracking-wide"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Right Side: Apply Button + Icons */}
          <div className="hidden md:flex items-center gap-6">
            {/* Search & Globe */}
            <button className="text-white hover:text-[#DAA520] transition-colors">
              <Search size={20} />
            </button>
            <button className="text-white hover:text-[#DAA520] transition-colors">
              <Globe size={20} />
            </button>

            {/* Apply Button */}
            <Link
              href="/Admissions"
              className="bg-white text-black px-6 py-2.5 font-bold uppercase text-xs tracking-wider hover:bg-[#DAA520] hover:text-black transition-colors rounded-sm"
            >
              Apply Now
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-0 z-50 bg-black flex flex-col items-center justify-center gap-8 md:hidden"
          >
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="absolute top-6 right-6 text-white/50 hover:text-white"
            >
              <X size={32} />
            </button>
            {[
              { name: "Home", href: "/" },
              { name: "About", href: "/about-us" },
              { name: "Mission", href: "/mission" },
              { name: "Admissions", href: "/Admissions" },
              { name: "Contact", href: "/contact" },
            ].map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-2xl font-bold text-white hover:text-[#DAA520] uppercase tracking-widest"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/Admissions"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-8 bg-[#DAA520] text-black px-10 py-3 font-bold uppercase tracking-widest"
            >
              Apply Now
            </Link>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx global>{`
        @keyframes ticker {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        .animate-ticker {
          animation: ticker 20s linear infinite;
          display: inline-block;
        }
      `}</style>
    </>
  );
}
