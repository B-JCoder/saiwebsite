"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navItems = [
    { name: "Home", href: "/" },
    { name: "Admissions", href: "/admissions" },
    { name: "Academic Programs", href: "/academic-programs" },
    { name: "Faculty", href: "/faculty" },
    { name: "Contact", href: "/contact" },
];

const PremiumNavbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b border-transparent ${isScrolled
                ? "bg-[#800000]/80 backdrop-blur-md border-[#DAA520]/20 shadow-lg py-2"
                : "bg-transparent py-6"
                }`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
            <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="relative">
                        <img
                            src="/images/imgi_1_Website_Logo_645x120.png"
                            alt="SAI Logo"
                            className="h-12 w-auto object-contain brightness-0 invert group-hover:brightness-100 group-hover:invert-0 transition-all duration-300"
                        />
                        <div className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#DAA520] group-hover:w-full transition-all duration-300" />
                    </div>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navItems.map((item, index) => (
                        <Link key={item.name} href={item.href} className="relative group">
                            <span className="text-white/90 text-sm uppercase tracking-widest hover:text-[#DAA520] transition-colors duration-300">
                                {item.name}
                            </span>
                            <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-[#DAA520] group-hover:w-full transition-all duration-300 ease-out" />
                        </Link>
                    ))}
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-6 py-2 bg-[#DAA520] text-[#800000] font-bold text-sm uppercase tracking-widest rounded-full hover:bg-white hover:text-[#800000] transition-colors shadow-[0_0_15px_rgba(218,165,32,0.3)]"
                    >
                        Apply Now
                    </motion.button>
                </nav>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden text-white hover:text-[#DAA520] transition-colors"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "100vh" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="fixed inset-0 bg-[#800000] z-40 flex flex-col items-center justify-center gap-8 md:hidden"
                    >
                        {navItems.map((item, index) => (
                            <motion.div
                                key={item.name}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <Link
                                    href={item.href}
                                    className="text-2xl text-white font-heading uppercase tracking-widest hover:text-[#DAA520] transition-colors"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            </motion.div>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
};

export default PremiumNavbar;
