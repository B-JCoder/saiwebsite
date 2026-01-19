"use client";

import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";

export default function ContactUs() {
  return (
    <div className="w-full">
      {/* Header Section */}
      <div className="bg-[#8B0000] py-24 relative overflow-hidden">
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]"></div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <span className="uppercase text-sm font-bold text-yellow-500 tracking-[0.2em] block mb-4">Get in Touch</span>
          <h1 className="text-5xl md:text-7xl font-heading font-black text-white uppercase tracking-tighter mb-6 drop-shadow-lg">
            Contact Us
          </h1>
          <div className="w-24 h-1 bg-yellow-500 mx-auto rounded-full"></div>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="bg-gray-50 py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 -mt-10 relative z-20">
            {/* Contact Info Card */}
            <div className="space-y-8">
              <div className="bg-white p-10 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 h-full border border-gray-100 flex flex-col justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-8 border-l-4 border-[#8B0000] pl-4">Contact Information</h2>

                  <div className="space-y-8">
                    <div className="flex items-start gap-6 group">
                      <div className="w-14 h-14 bg-gray-50 text-[#8B0000] rounded-2xl flex items-center justify-center text-2xl flex-shrink-0 group-hover:bg-[#8B0000] group-hover:text-white transition-colors duration-300 shadow-sm border border-gray-100">
                        <FaMapMarkerAlt />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-1">Campus Address</h3>
                        <p className="text-gray-500 leading-relaxed">Federal B Area, Block-2, Karachi.</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-6 group">
                      <div className="w-14 h-14 bg-gray-50 text-[#8B0000] rounded-2xl flex items-center justify-center text-2xl flex-shrink-0 group-hover:bg-[#8B0000] group-hover:text-white transition-colors duration-300 shadow-sm border border-gray-100">
                        <FaPhone />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-1">Phone</h3>
                        <p className="text-gray-500 leading-relaxed">+92 21 36343542</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-6 group">
                      <div className="w-14 h-14 bg-gray-50 text-[#8B0000] rounded-2xl flex items-center justify-center text-2xl flex-shrink-0 group-hover:bg-[#8B0000] group-hover:text-white transition-colors duration-300 shadow-sm border border-gray-100">
                        <FaEnvelope />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-1">Email</h3>
                        <p className="text-gray-500 leading-relaxed">info@siradamjee.edu.pk</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Decorative Bottom branding */}
                <div className="mt-12 pt-6 border-t border-gray-100">
                  <p className="text-xs text-gray-400 font-bold tracking-widest uppercase">Sir Adamjee Institute</p>
                </div>
              </div>
            </div>

            {/* Contact Form Card */}
            <div className="bg-white p-10 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-8 border-l-4 border-yellow-500 pl-4">Send us a Message</h2>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">Your Name</label>
                  <input type="text" className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-[#8B0000] focus:ring-1 focus:ring-[#8B0000] transition-all" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">Your Email</label>
                  <input type="email" className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-[#8B0000] focus:ring-1 focus:ring-[#8B0000] transition-all" placeholder="john@example.com" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">Message</label>
                  <textarea className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-[#8B0000] focus:ring-1 focus:ring-[#8B0000] transition-all h-40 resize-none" placeholder="How can we help you?"></textarea>
                </div>
                <button className="w-full py-4 bg-[#8B0000] text-white font-bold uppercase tracking-widest rounded-xl hover:bg-black hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-lg shadow-[#8B0000]/20">
                  Submit Message
                </button>
              </form>
            </div>
          </div>

          {/* Map Section */}
          <div className="mt-20">
            <h3 className="text-center text-xl font-bold text-gray-400 mb-8 uppercase tracking-widest">Find Us On Map</h3>
            <div className="w-full h-[500px] rounded-3xl overflow-hidden shadow-2xl border border-gray-200 hover:shadow-3xl transition-shadow duration-500">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14476.574637651765!2d67.0673418!3d24.9351049!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33f1130d2235d%3A0xe5d0506041040854!2sBlock%202%20Gulberg%20Town%2C%20Karachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1705353000000!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                className="grayscale hover:grayscale-0 transition-all duration-700"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}