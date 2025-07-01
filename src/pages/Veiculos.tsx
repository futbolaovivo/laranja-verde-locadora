import Navbar from "@/components/Navbar";
import SearchForm from "@/components/SearchForm";
import VehicleFilters from "@/components/VehicleFilters";
import CarsSection from "@/components/CarsSection";

const Veiculos = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <SearchForm />
      <VehicleFilters />
      <CarsSection />
    </div>
  );
};

export default Veiculos;