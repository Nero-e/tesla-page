import HeroSection from "@/components/HeroSection";
import LandingHeader from "@/components/LandingHeader";
import Model3Section from "@/components/Model3Section";
import ModelSSection from "@/components/ModelSSelection";
import ModelXSection from "@/components/ModelXSection";
import ModelYSection from "@/components/ModelYSection";
import PowerwallSection from "@/components/PowerwallSection";
import SolarPanelSection from "@/components/SolarPanelSection";
import SolarRoofSection from "@/components/SolarRoofSection";
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
        <div className="snap-start">
          <ModelSSection/>
        </div>
        <div className="snap-start">
          <ModelXSection/>
        </div>
        <div className="snap-start">
          <SolarPanelSection/>
        </div>
        <div className="snap-start">
          <SolarRoofSection/>
        </div>
        <div className="snap-start">
          <PowerwallSection/>
        </div>
      </main>
    </>
  );
}
