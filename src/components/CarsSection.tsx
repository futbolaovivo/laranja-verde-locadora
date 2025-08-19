import { useCars } from "@/contexts/CarsContext";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Users, Fuel, Settings } from "lucide-react";

const CarsSection = () => {
  const { cars } = useCars();

  return (
    <section id="carros" className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            NOSSA <span className="text-orange-500">FROTA</span>
          </h2>
          <p className="text-muted-foreground mb-2">
            Veículos organizados por categoria para atender suas necessidades específicas
          </p>
          <p className="text-sm text-muted-foreground">
            Imagens ilustrativas. O modelo entregue pode variar conforme disponibilidade.
          </p>
        </div>

        <Carousel className="w-full max-w-6xl mx-auto">
          <CarouselContent className="-ml-2 md:-ml-4">
            {cars.map((car) => (
              <CarouselItem key={car.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                <Card className="h-full">
                  <CardContent className="p-0">
                    <div className="relative">
                      <img 
                        src={car.images[0]} 
                        alt={car.name}
                        className="w-full h-48 object-cover rounded-t-lg"
                      />
                      <Badge 
                        className={`absolute top-4 left-4 ${
                          car.status === 'available' 
                            ? 'bg-orange-500 hover:bg-orange-600' 
                            : 'bg-gray-500 hover:bg-gray-600'
                        }`}
                      >
                        {car.status === 'available' ? 'Disponível' : 'Indisponível'}
                      </Badge>
                    </div>
                    
                    <div className="p-6">
                      <div className="mb-2">
                        <span className="text-sm font-medium text-orange-500 uppercase tracking-wide">
                          {car.category}
                        </span>
                      </div>
                      
                      <h3 className="font-bold text-lg mb-4 line-clamp-2">
                        {car.name}
                      </h3>
                      
                      <div className="text-sm text-muted-foreground mb-6 space-y-2">
                        <div className="flex items-center gap-2">
                          <Users className="w-4 h-4" />
                          <span>{car.passengers} passageiros</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Settings className="w-4 h-4" />
                          <span>{car.transmission}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Fuel className="w-4 h-4" />
                          <span>{car.fuel}</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="text-2xl font-bold">R$ {car.dailyPrice}</span>
                          <span className="text-sm text-muted-foreground">/dia</span>
                        </div>
                        
                        <Button 
                          className={car.status === 'available' ? '' : 'opacity-50 cursor-not-allowed'}
                          disabled={car.status !== 'available'}
                        >
                          {car.status === 'available' ? 'Reservar' : 'Indisponível'}
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </section>
  );
};

export default CarsSection;