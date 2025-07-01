import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SearchForm from "@/components/SearchForm";
import CarsSection from "@/components/CarsSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <SearchForm />
      <CarsSection />
    </div>
  );
};

export default Index;
