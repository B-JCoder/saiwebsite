import Link from "next/link";
import Image from "next/image";
import {
  FaFacebookF,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaArrowRight,
} from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative pt-32 pb-12 overflow-hidden bg-[#050505]">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#800000]/20 rounded-full blur-[120px] pointer-events-none mix-blend-screen" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#DAA520]/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen" />

      {/* Glass Container */}
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-[3rem] p-8 md:p-16 shadow-2xl overflow-hidden relative group">
          {/* Subtle Shine Effect */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
            {/* 1. Brand Section */}
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-[#DAA520] shadow-[0_0_20px_rgba(218,165,32,0.3)]">
                  <Image
                    src="/images/sai_seal_fixed.jpg"
                    alt="SAI Seal"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-white font-bold text-xl leading-none tracking-tight">
                    Sir Adamjee <br />{" "}
                    <span className="text-[#DAA520]">Institute</span>
                  </h3>
                  <p className="text-xs text-gray-400 mt-1 uppercase tracking-widest font-medium">
                    Since 2005
                  </p>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
                Dedicated to fostering academic excellence and character
                development in a state-of-the-art learning environment.
              </p>

              {/* Socials */}
              <div className="flex gap-4 pt-2">
                {[
                  {
                    icon: FaFacebookF,
                    url: "https://www.facebook.com/siradamjee.edu.pk/",
                  },
                  {
                    icon: FaInstagram,
                    url: "https://www.instagram.com/siradamjeeinstitute/",
                  },
                ].map((social, idx) => (
                  <a
                    key={idx}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:bg-[#800000] hover:text-white hover:border-[#800000] hover:scale-110 transition-all duration-300 shadow-lg"
                  >
                    <social.icon size={16} />
                  </a>
                ))}
              </div>
            </div>

            {/* 2. Quick Links */}
            <div>
              <h4 className="text-lg font-bold text-white mb-8 border-l-4 border-[#800000] pl-3 uppercase tracking-wider">
                Quick Links
              </h4>
              <ul className="space-y-3">
                {[
                  "Home",
                  "About Us",
                  "Faculty",
                  "Admissions",
                  "Contact Us",
                ].map((item) => (
                  <li key={item}>
                    <Link
                      href={
                        item === "Home"
                          ? "/"
                          : item === "Admissions"
                            ? "/Admissions"
                            : `/${item.toLowerCase().replace(/\s+/g, "-")}`
                      }
                      className="group flex items-center gap-3 text-gray-400 hover:text-[#DAA520] transition-all duration-300 w-fit"
                    >
                      <FaArrowRight
                        size={10}
                        className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-[#800000]"
                      />
                      <span className="group-hover:translate-x-2 transition-transform duration-300 font-medium text-sm">
                        {item}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* 3. Contact Info */}
            <div>
              <h4 className="text-lg font-bold text-white mb-8 border-l-4 border-[#800000] pl-3 uppercase tracking-wider">
                Contact
              </h4>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white/5 rounded-lg text-[#DAA520]">
                    <FaMapMarkerAlt size={16} />
                  </div>
                  <div>
                    <h5 className="text-white font-bold text-sm mb-1 uppercase tracking-wide">
                      Address
                    </h5>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      ST-11A, Block 2, Hussainabad, F.B Area, Karachi.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white/5 rounded-lg text-[#DAA520]">
                    <FaPhone size={16} />
                  </div>
                  <div>
                    <h5 className="text-white font-bold text-sm mb-1 uppercase tracking-wide">
                      Phone
                    </h5>
                    <p className="text-gray-400 text-sm">+92 21 36343541-2</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white/5 rounded-lg text-[#DAA520]">
                    <FaEnvelope size={16} />
                  </div>
                  <div>
                    <h5 className="text-white font-bold text-sm mb-1 uppercase tracking-wide">
                      Email
                    </h5>
                    <p className="text-gray-400 text-sm">
                      info@siradamjee.edu.pk
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 4. Map / Highlight */}
            <div className="flex flex-col h-full">
              <h4 className="text-lg font-bold text-white mb-8 border-l-4 border-[#800000] pl-3 uppercase tracking-wider">
                Location
              </h4>
              <div className="rounded-2xl overflow-hidden border-2 border-white/10 shadow-2xl flex-grow min-h-[160px] relative group/map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14476.574637651765!2d67.0673418!3d24.9351049!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33f1130d2235d%3A0xe5d0506041040854!2sBlock%202%20Gulberg%20Town%2C%20Karachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1705353000000!5m2!1sen!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: "grayscale(100%) invert(90%)" }}
                  allowFullScreen
                  loading="lazy"
                  className="group-hover/map:filter-none transition-all duration-700"
                ></iframe>
                {/* Overlay */}
                <div className="absolute inset-0 bg-[#800000]/20 mix-blend-multiply pointer-events-none group-hover/map:opacity-0 transition-opacity duration-500" />
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-xs font-bold uppercase tracking-widest text-center md:text-left">
              © {currentYear} Sir Adamjee Institute. All Rights Reserved.
            </p>
            <div className="flex gap-8">
              {["Privacy Policy", "Terms of Service", "Cookie Policy"].map(
                (link) => (
                  <a
                    key={link}
                    href="#"
                    className="text-gray-500 hover:text-white text-xs font-bold uppercase tracking-widest transition-colors duration-300"
                  >
                    {link}
                  </a>
                ),
              )}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
