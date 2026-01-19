"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

import Image from "next/image";

import { Search, Globe, Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

const menuItems = {
  about: {
    title: "About Us",
    columns: [
      {
        heading: "Leadership",
        links: [{ name: "Principal's Message", href: "/about-us" }],
      },
      {
        heading: "Our Identity",
        links: [
          { name: "History & Legacy", href: "/about-us" },
          { name: "Mission & Vision", href: "/mission" },
          { name: "Awards & Achievements", href: "/about-us" },
        ],
      },
      {
        heading: "Feature",
        content: "Building Character, Shaping Minds since 2005.",
      },
    ],
  },
  academics: {
    title: "Academics",
    columns: [
      {
        heading: "Faculty",
        links: [{ name: "Distinguished Faculty", href: "/faculty" }],
      },
      {
        heading: "Feature",
        content: "State-of-the-art laboratories and digital classrooms.",
      },
    ],
  },
  groups: {
    title: "Groups",
    columns: [
      {
        heading: "Academic Pathways",
        links: [
          { name: "Pre-Medical", href: "/groups/pre-medical" },
          { name: "Pre-Engineering", href: "/groups/pre-engineering" },
          { name: "Computer Science", href: "/groups/computer-science" },
          { name: "Commerce", href: "/groups/commerce" },
        ],
      },
      {
        heading: "Why Choose SAI?",
        content:
          "Expert faculty and a track record of top positions in board exams.",
      },
    ],
  },
};

export default function PremiumNavbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);

  // Close menu on route change
  useEffect(() => {
    setHoveredMenu(null);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Dynamic Background Logic
  const isSolid = !isHome || isScrolled || hoveredMenu;

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isSolid
            ? "bg-white text-black shadow-md py-4"
            : "bg-transparent text-white py-6"
        }`}
        onMouseLeave={() => setHoveredMenu(null)}
      >
        <div className="container mx-auto px-6 flex items-center justify-between relative">
          {/* Logo */}

          <Link href="/" className="flex items-center gap-3 z-50 -ml-8">
            <div className="relative w-[200px] h-12">
              <Image
                src="/images/sai_header_logo.png"
                alt="SAI Logo"
                fill
                className="object-contain" // Correct object fit
                priority
              />
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            {Object.entries(menuItems).map(([key, item]) => (
              <div
                key={key}
                onMouseEnter={() => setHoveredMenu(key)}
                className="relative py-4"
              >
                <button
                  onClick={() =>
                    setHoveredMenu(hoveredMenu === key ? null : key)
                  }
                  className={`text-sm font-bold uppercase tracking-wide flex items-center gap-1 ${
                    isSolid
                      ? "text-black hover:text-[#DAA520]"
                      : "text-white hover:text-[#DAA520]"
                  } transition-colors`}
                >
                  {item.title} <ChevronDown size={14} />
                </button>
              </div>
            ))}
            {/* Restoring Missing Links */}

            <Link
              href="/admissions"
              className={`text-sm font-bold uppercase tracking-wide ${
                isSolid
                  ? "text-black hover:text-[#DAA520]"
                  : "text-white hover:text-[#DAA520]"
              }`}
            >
              Admissions
            </Link>
            <Link
              href="/downloads"
              className={`text-sm font-bold uppercase tracking-wide ${
                isSolid
                  ? "text-black hover:text-[#DAA520]"
                  : "text-white hover:text-[#DAA520]"
              }`}
            >
              Downloads
            </Link>
            <Link
              href="/contact-us"
              className={`text-sm font-bold uppercase tracking-wide ${
                isSolid
                  ? "text-black hover:text-[#DAA520]"
                  : "text-white hover:text-[#DAA520]"
              }`}
            >
              Contact
            </Link>
          </div>

          {/* Right Icons */}
          <div className="hidden md:flex items-center gap-6">
            <Link
              href="/admissions"
              className={`px-6 py-2.5 font-bold uppercase text-xs tracking-wider border transition-colors rounded-sm ${
                isSolid
                  ? "bg-[#DAA520] text-black border-[#DAA520] hover:bg-black hover:text-white"
                  : "bg-white text-black border-white hover:bg-[#DAA520] hover:text-black"
              }`}
            >
              Apply Now
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className={`md:hidden ${isSolid ? "text-black" : "text-white"}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mega Menu Dropdown */}
        <AnimatePresence>
          {hoveredMenu && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100 py-12 px-6 z-40"
            >
              <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
                {menuItems[hoveredMenu as keyof typeof menuItems].columns.map(
                  (col, idx) => (
                    <div key={idx} className="flex flex-col gap-4">
                      <h4 className="text-[#800000] font-black uppercase tracking-wider text-sm border-b border-gray-100 pb-2 mb-2">
                        {col.heading}
                      </h4>
                      {col.links ? (
                        <ul className="space-y-3">
                          {col.links.map((link, i) => (
                            <li key={i}>
                              <Link
                                href={link.href}
                                onClick={() => setHoveredMenu(null)}
                                className="text-gray-600 hover:text-[#DAA520] font-medium transition-colors"
                              >
                                {link.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p className="text-gray-500 italic font-serif text-lg leading-relaxed">
                          {col.content}
                        </p>
                      )}
                    </div>
                  )
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
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
              { name: "Admissions", href: "/admissions" },
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
              href="/admissions"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-8 bg-[#DAA520] text-black px-10 py-3 font-bold uppercase tracking-widest"
            >
              Apply Now
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
