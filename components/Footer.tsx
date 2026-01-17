import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-primary text-white pt-20 pb-10 border-t-8 border-accent">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                    {/* Brand Column */}
                    <div className="space-y-6">
                        <h3 className="text-2xl font-heading font-black tracking-tighter uppercase text-white">SIR ADAMJEE INSTITUTE</h3>
                        <p className="text-gray-300 text-sm leading-relaxed font-medium">
                            A premier educational institution dedicated to fostering academic excellence and character building. Empowering students for a brighter tomorrow.
                        </p>
                        <div className="flex gap-4">
                            {[FaFacebook, FaTwitter, FaInstagram, FaLinkedin].map((Icon, idx) => (
                                <a key={idx} href="#" className="w-10 h-10 border border-white/20 rounded flex items-center justify-center hover:bg-accent hover:text-primary transition-all">
                                    <Icon />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 uppercase tracking-widest text-accent">Quick Links</h4>
                        <ul className="space-y-4 text-sm font-medium">
                            {["Home", "About Us", "Mission", "Faculty", "Admissions", "Contact"].map((link) => (
                                <li key={link}>
                                    <Link href={`/${link.toLowerCase().replace(" ", "-")}`} className="hover:text-accent transition-colors flex items-center gap-2">
                                        <span className="w-1 h-1 bg-accent rounded-full"></span> {link}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 uppercase tracking-widest text-accent">Contact Info</h4>
                        <div className="space-y-4 text-sm font-medium text-gray-300">
                            <div className="flex items-start gap-3">
                                <FaMapMarkerAlt className="mt-1 text-accent" />
                                <span>Federal B Area, Block-2, Karachi.</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <FaPhone className="text-accent" />
                                <span>+92 312 2642415</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <FaEnvelope className="text-accent" />
                                <span>sai@siradamjee.edu.pk</span>
                            </div>
                        </div>
                    </div>

                    {/* Map Short */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 uppercase tracking-widest text-accent">Location</h4>
                        <div className="rounded overflow-hidden h-32 w-full bg-gray-800">
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
                <div className="pt-8 border-t border-white/10 flex flex-col md:row justify-between items-center gap-4">
                    <p className="text-xs text-gray-500 font-bold uppercase tracking-widest">
                        © {new Date().getFullYear()} SIR ADAMJEE INSTITUTE. ALL RIGHTS RESERVED.
                    </p>
                    <p className="text-[10px] text-gray-600 font-medium">
                        Designed for Excellence
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
