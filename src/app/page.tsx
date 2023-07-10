import HeroSection from "@/components/HeroSection";
import LandingHeader from "@/components/LandingHeader";
import Model3Section from "@/components/Model3Section";
import ModelYSection from "@/components/ModelYSection";
export default function Home() {
  return (
    <>
      <LandingHeader />

      <main className="relative w-full h-screen overflow-auto snap-y snap-mandatory">
        <div className="snap-start">
          <HeroSection />
        </div>
        <div className="snap-start">
          <Model3Section/>
        </div>
        <div className="snap-start">
          <ModelYSection/>
        </div>
      </main>
    </>
  );
}
