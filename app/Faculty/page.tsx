"use client";

import FacultyList from "@/components/Faculty";
import SmoothScroll from "@/components/SmoothScroll";

export default function FacultyPage() {
  return (
    <SmoothScroll>
      <div className="pt-32 pb-20 bg-background min-h-screen">
        {/* Header for the separate page */}
        <div className="container mx-auto px-6 mb-20 text-center">
          <h1 className="text-5xl md:text-6xl font-heading font-black text-[#800000] uppercase tracking-tighter mb-4">
            Our Team
          </h1>
          <p className="text-[#DAA520] text-lg uppercase tracking-widest font-bold">
            The Pillars of Excellence
          </p>
          <div className="w-24 h-1 bg-[#800000] mx-auto mt-6"></div>
        </div>

        {/* Leadership / Principal Message Section */}
        <section className="container mx-auto px-6 mb-24">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100 flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2 relative">
              <div className="relative aspect-[4/5] w-full max-w-sm mx-auto rounded-xl overflow-hidden shadow-2xl border-4 border-[#DAA520]/30">
                {/* Using the image found in the directory */}
                <img
                  src="/images/sai-img-1 (18).jpeg"
                  alt="Principal"
                  className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-700"
                />
              </div>
              {/* Badge */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#800000] rounded-full flex items-center justify-center p-4 shadow-lg hidden md:flex">
                <span className="text-[#DAA520] font-black text-center text-xs uppercase leading-tight tracking-widest">
                  Leading with<br />Vision
                </span>
              </div>
            </div>

            <div className="md:w-1/2">
              <span className="text-[#800000] font-bold text-sm uppercase tracking-widest block mb-2">Message from the Principal</span>
              <h2 className="text-3xl md:text-4xl font-heading font-black text-black mb-6 leading-tight">
                Inspiring Minds, <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#800000] to-[#DAA520]">Building Character.</span>
              </h2>
              <blockquote className="text-gray-600 text-lg leading-relaxed italic mb-8 border-l-4 border-[#DAA520] pl-6">
                "At Sir Adamjee Institute, we believe that education is not just about academic success; it is about shaping the character and future of our students. We provide a disciplined, nurturing environment where young minds can thrive and prepare for the challenges of tomorrow."
              </blockquote>

              <div>
                <h4 className="text-xl font-bold text-black uppercase tracking-tight">Prof. Sir Adamjee Principal</h4>
                <p className="text-[#DAA520] text-sm font-bold uppercase tracking-widest">Principal, SAI</p>
              </div>
            </div>
          </div>
        </section>
        <FacultyList />
      </div>
    </SmoothScroll>
  );
}