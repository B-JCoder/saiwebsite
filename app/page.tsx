import SmoothScroll from "@/components/SmoothScroll";
import ReplicaHero from "@/components/ReplicaHero";
import BentoGrid from "@/components/BentoGrid";
import AcademicPrograms from "@/components/AcademicPrograms";
import Faculty from "@/components/Faculty";
import LifeAtSAI from "@/components/LifeAtSAI";

export default function Home() {
  return (
    <SmoothScroll>
      <div className="flex flex-col gap-0 pb-0 bg-background text-foreground overflow-x-hidden">
        <ReplicaHero />
        <BentoGrid />
        <AcademicPrograms />
        <Faculty />
        <LifeAtSAI />
      </div>
    </SmoothScroll>
  );
}
