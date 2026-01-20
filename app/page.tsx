import SmoothScroll from "@/components/SmoothScroll";
import HeroSlider from "@/components/HeroSlider";
import CorporateAbout from "@/components/CorporateAbout";
import FacultyMarquee from "@/components/FacultyMarquee";
import RevealOnScroll from "@/components/RevealOnScroll";
import PrincipalMessage from "@/components/PrincipalMessage";
import LifeAtSAI from "@/components/LifeAtSAI";
import ParallaxSection from "@/components/ParallaxSection";

export default function Home() {
  return (
    <SmoothScroll>
      <div className="flex flex-col gap-0 pb-0 bg-background text-foreground overflow-x-hidden">
        <HeroSlider />

        {/* Overlapping Effect for About Section */}
        <div className="-mt-20 z-10 relative">
          <RevealOnScroll>
            <CorporateAbout />
          </RevealOnScroll>
        </div>

        {/* Parallax Divider */}
        <ParallaxSection
          bgImage="/images/imgi_13_Page12.png"
          className="h-[40vh] flex items-center justify-center"
        >
          <h2 className="text-4xl md:text-6xl font-black text-[#8B0000] uppercase tracking-tighter drop-shadow-2xl">
            Leading the Future
          </h2>
        </ParallaxSection>

        <PrincipalMessage />

        <FacultyMarquee />

        <LifeAtSAI />
      </div>
    </SmoothScroll>
  );
}
