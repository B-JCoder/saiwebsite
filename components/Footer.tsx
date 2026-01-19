import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-black text-white pt-24 pb-12 border-t border-[#DAA520]/30 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5 pointer-events-none"
                style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "40px 40px" }}>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-20 mb-20">

                    {/* Brand Column */}
<<<<<<< HEAD
                    <div className="space-y-6">
                        <h3 className="text-2xl font-heading font-black tracking-tighter uppercase text-white">SIR ADAMJEE INSTITUTE</h3>
                        <p className="text-gray-300 text-sm leading-relaxed font-medium">
=======
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-3xl font-heading font-black tracking-tighter uppercase text-white mb-2">SIR ADAMJEE</h3>
                            <h3 className="text-3xl font-heading font-black tracking-tighter uppercase text-[#DAA520]">INSTITUTE</h3>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed font-light max-w-xs">
>>>>>>> 8380a61aaaea9922053889363695a7e5abea53b1
                            A premier educational institution dedicated to fostering academic excellence and character building. Empowering students for a brighter tomorrow.
                        </p>
                        <div className="flex gap-4">
                            {[FaFacebook, FaTwitter, FaInstagram, FaLinkedin].map((Icon, idx) => (
                                <a key={idx} href="#" className="w-10 h-10 border border-white/10 bg-white/5 rounded-full flex items-center justify-center hover:bg-[#800000] hover:text-white hover:border-[#800000] transition-all duration-300">
                                    <Icon size={14} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-sm font-bold mb-8 uppercase tracking-[0.2em] text-[#800000]">Quick Links</h4>
                        <ul className="space-y-4 text-sm text-gray-400">
                            {["Home", "About Us", "Mission", "Faculty", "Admissions", "Contact"].map((link) => (
                                <li key={link}>
                                    <Link href={`/${link === "Home" ? "" : link.toLowerCase().replace(" ", "-")}`} className="hover:text-[#800000] transition-colors flex items-center gap-2 group">
                                        <span className="w-0 group-hover:w-2 h-[1px] bg-[#800000] transition-all duration-300"></span>
                                        {link}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
<<<<<<< HEAD
                        <h4 className="text-lg font-bold mb-6 uppercase tracking-widest text-accent">Contact Info</h4>
                        <div className="space-y-4 text-sm font-medium text-gray-300">
                            <div className="flex items-start gap-3">
                                <FaMapMarkerAlt className="mt-1 text-accent" />
                                <span>Federal B Area, Block-2, Karachi.</span>
=======
                        <h4 className="text-sm font-bold mb-8 uppercase tracking-[0.2em] text-[#800000]">Contact Info</h4>
                        <div className="space-y-6 text-sm text-gray-400">
                            <div className="flex items-start gap-4 group">
                                <div className="mt-1 p-2 bg-white/5 rounded-full group-hover:bg-[#800000] group-hover:text-white transition-colors">
                                    <FaMapMarkerAlt size={12} />
                                </div>
                                <span className="flex-1 leading-relaxed">Federal B Area, Block-2, Karachi.</span>
>>>>>>> 8380a61aaaea9922053889363695a7e5abea53b1
                            </div>
                            <div className="flex items-center gap-4 group">
                                <div className="p-2 bg-white/5 rounded-full group-hover:bg-[#800000] group-hover:text-white transition-colors">
                                    <FaPhone size={12} />
                                </div>
                                <span className="group-hover:text-[#800000] transition-colors">+92 312 2642415</span>
                            </div>
                            <div className="flex items-center gap-4 group">
                                <div className="p-2 bg-white/5 rounded-full group-hover:bg-[#800000] group-hover:text-white transition-colors">
                                    <FaEnvelope size={12} />
                                </div>
                                <span className="group-hover:text-[#800000] transition-colors">sai@siradamjee.edu.pk</span>
                            </div>
                        </div>
                    </div>

                    {/* Map Short */}
                    <div>
                        <h4 className="text-sm font-bold mb-8 uppercase tracking-[0.2em] text-[#800000]">Location</h4>
                        <div className="rounded-xl overflow-hidden h-40 w-full bg-gray-900 border border-white/10 grayscale hover:grayscale-0 transition-all duration-500">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3619.143269476901!2d67.0858!3d24.9189!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDU1JzA4LjAiTiA2N8KwMDUnMDguOSJF!5e0!3m2!1sen!2s!4v1642152862800!5m2!1sen!2s"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                            ></iframe>
                        </div>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-xs text-gray-500 font-bold uppercase tracking-widest">
                        © {new Date().getFullYear()} SIR ADAMJEE INSTITUTE.
                    </p>
                    <div className="flex gap-6">
                        <a href="#" className="text-xs text-gray-600 hover:text-[#DAA520] transition-colors uppercase tracking-wider font-medium">Privacy Policy</a>
                        <a href="#" className="text-xs text-gray-600 hover:text-[#DAA520] transition-colors uppercase tracking-wider font-medium">Terms of Use</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
