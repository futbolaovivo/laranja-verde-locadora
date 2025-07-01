import CarCard from "./CarCard";
import { Button } from "@/components/ui/button";

const CarsSection = () => {
  // Dados dos carros (em um app real, viria de uma API)
  const cars = [
    {
      id: "1",
      name: "Chevrolet Onix",
      image: "https://images.unsplash.com/photo-1549399290-8121fd9f9c80?w=400&h=300&fit=crop",
      category: "Econômico",
      passengers: 5,
      transmission: "Manual",
      fuel: "Flex",
      dailyPrice: 89,
      status: 'available' as const
    },
    {
      id: "2", 
      name: "Volkswagen Polo",
      image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=400&h=300&fit=crop",
      category: "Compacto",
      passengers: 5,
      transmission: "Automático",
      fuel: "Flex",
      dailyPrice: 109,
      status: 'available' as const
    },
    {
      id: "3",
      name: "Toyota Corolla",
      image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=400&h=300&fit=crop",
      category: "Intermediário",
      passengers: 5,
      transmission: "Automático",
      fuel: "Híbrido",
      dailyPrice: 159,
      status: 'rented' as const
    },
    {
      id: "4",
      name: "Jeep Compass",
      image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=400&h=300&fit=crop",
      category: "SUV",
      passengers: 5,
      transmission: "Automático",
      fuel: "Flex",
      dailyPrice: 199,
      status: 'available' as const
    },
    {
      id: "5",
      name: "Fiat Toro",
      image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=400&h=300&fit=crop",
      category: "Pickup",
      passengers: 5,
      transmission: "Automático",
      fuel: "Diesel",
      dailyPrice: 229,
      status: 'available' as const
    },
    {
      id: "6",
      name: "Honda HR-V",
      image: "https://images.unsplash.com/photo-1542362567-b07e54358753?w=400&h=300&fit=crop",
      category: "SUV Compacto",
      passengers: 5,
      transmission: "CVT",
      fuel: "Flex",
      dailyPrice: 179,
      status: 'rented' as const
    }
  ];

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cars.map((car) => (
            <CarCard key={car.id} {...car} />
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Não encontrou o que procura?
          </p>
          <Button variant="outline" size="lg">
            Ver Todos os Veículos
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CarsSection;