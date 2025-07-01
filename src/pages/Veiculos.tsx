import Navbar from "@/components/Navbar";
import SearchForm from "@/components/SearchForm";
import CarsSection from "@/components/CarsSection";

const Veiculos = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <SearchForm />
      <CarsSection />
    </div>
  );
};

export default Veiculos;