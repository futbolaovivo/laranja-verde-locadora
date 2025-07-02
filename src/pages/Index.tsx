import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CarsSection from "@/components/CarsSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <CarsSection />
    </div>
  );
};

export default Index;
