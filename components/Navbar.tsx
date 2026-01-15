"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { FaPhoneAlt, FaEnvelope, FaChevronDown } from "react-icons/fa";

import { usePathname } from "next/navigation";

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const pathname = usePathname();
    const isHome = pathname === "/";

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "About Us", href: "/about-us" },
        { name: "Mission", href: "/mission" },
        { name: "Faculty", href: "/faculty" },
        { name: "Admissions", href: "/admissions" },
        { name: "Academics", href: "#", hasDropdown: true }, // Example dropdown trigger
        { name: "Contact", href: "/contact" },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 border-b ${scrolled || !isHome
                    ? "bg-primary/95 backdrop-blur-md border-white/10 py-2 shadow-2xl"
                    : "bg-transparent border-transparent py-6"
                }`}
        >
            <div className="container mx-auto px-6">
                <div className="flex items-center justify-between">

                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3 group">
                        {/* Logo Icon/Image could go here */}
                        <div className="flex flex-col">
                            <span className={`text-2xl font-heading font-black tracking-tighter leading-none transition-colors ${scrolled ? "text-white" : "text-white"}`}>
                                SAI.
                            </span>
                            <span className={`text-[10px] font-bold tracking-[0.3em] uppercase transition-colors ${scrolled ? "text-accent" : "text-white/80"}`}>
                                EST. 2004
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden xl:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <div key={link.name} className="relative group">
                                <Link
                                    href={link.href}
                                    className={`flex items-center gap-1 text-sm font-bold uppercase tracking-wider transition-colors hover:text-accent ${scrolled ? "text-white" : "text-white"}`}
                                >
                                    {link.name}
                                    {link.hasDropdown && <FaChevronDown className="text-[10px]" />}
                                </Link>

                                {/* Animated Underline */}
                                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-accent transition-all duration-300 group-hover:w-full"></span>
                            </div>
                        ))}
                    </div>

                    {/* Action Button & Toggle */}
                    <div className="flex items-center gap-4">
                        <Link
                            href="/admissions"
                            className={`hidden md:flex px-6 py-2.5 font-bold rounded-full transition-all uppercase text-xs tracking-widest hover:scale-105 ${scrolled
                                ? "bg-accent text-primary shadow-lg hover:bg-white"
                                : "bg-white/10 backdrop-blur text-white border border-white/20 hover:bg-accent hover:border-accent hover:text-primary"
                                }`}
                        >
                            Apply Now
                        </Link>

                        <button
                            className={`xl:hidden text-2xl transition-colors ${scrolled ? "text-white" : "text-white"}`}
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        >
                            {mobileMenuOpen ? <HiX /> : <HiMenuAlt3 />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "100vh" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="fixed inset-0 bg-primary z-40 flex flex-col items-center justify-center gap-8 xl:hidden"
                    >
                        <button
                            onClick={() => setMobileMenuOpen(false)}
                            className="absolute top-6 right-6 text-white text-3xl"
                        >
                            <HiX />
                        </button>

                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className="text-2xl font-heading font-black text-white hover:text-accent transition-colors uppercase tracking-tight"
                            >
                                {link.name}
                            </Link>
                        ))}

                        <Link
                            href="/admissions"
                            onClick={() => setMobileMenuOpen(false)}
                            className="mt-4 px-10 py-4 bg-accent text-primary font-bold rounded-full text-lg uppercase tracking-widest shadow-xl"
                        >
                            Apply Now
                        </Link>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
