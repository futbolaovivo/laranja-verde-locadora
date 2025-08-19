import CarCard from "./CarCard";
import { Button } from "@/components/ui/button";
import { useCars } from "@/contexts/CarsContext";
const CarsSection = () => {
  const { cars } = useCars();

  return (
    <section id="carros" className="py-16 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Nossa Frota
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Descubra nossa seleção de veículos premium para sua próxima viagem
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cars.map((car) => (
            <CarCard 
              key={car.id} 
              id={car.id}
              name={car.name}
              images={car.images}
              category={car.category}
              passengers={car.passengers}
              transmission={car.transmission}
              fuel={car.fuel}
              dailyPrice={car.dailyPrice}
              status={car.status}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
export default CarsSection;