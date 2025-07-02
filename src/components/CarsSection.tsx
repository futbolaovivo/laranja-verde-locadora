import CarCard from "./CarCard";
import { Button } from "@/components/ui/button";
import { useCars } from "@/contexts/CarsContext";

const CarsSection = () => {
  const { cars } = useCars();

  return (
    <section id="carros" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Nossa Frota
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Veículos novos e seminovos para atender todas as suas necessidades. 
            Escolha o modelo ideal para sua viagem.
          </p>
        </div>

        {cars.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cars.map((car) => (
              <CarCard key={car.id} {...car} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-muted-foreground mb-4">
              Nenhum veículo cadastrado ainda.
            </p>
            <p className="text-sm text-muted-foreground">
              Acesse o painel administrativo para adicionar veículos à frota.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default CarsSection;