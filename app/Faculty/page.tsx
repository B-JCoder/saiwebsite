"use client";

import FacultyList from "@/components/Faculty";
import SmoothScroll from "@/components/SmoothScroll";

export default function FacultyPage() {
  return (
    <SmoothScroll>
      <div className="pt-32 pb-20 bg-background min-h-screen">
        {/* Header for the separate page */}
        <div className="container mx-auto px-6 mb-16 text-center">
          <h1 className="text-5xl md:text-6xl font-heading font-black text-[#800000] uppercase tracking-tighter mb-4">
            Our Team
          </h1>
          <p className="text-[#DAA520] text-lg uppercase tracking-widest font-bold">
            Builders of the Future
          </p>
        </div>
        <FacultyList />
      </div>
    </SmoothScroll>
  );
}