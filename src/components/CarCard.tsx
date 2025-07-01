import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users, Fuel, Settings, Shield } from "lucide-react";

interface CarCardProps {
  id: string;
  name: string;
  image: string;
  category: string;
  passengers: number;
  transmission: string;
  fuel: string;
  dailyPrice: number;
  status: 'available' | 'rented';
}

const CarCard = ({ name, image, category, passengers, transmission, fuel, dailyPrice, status }: CarCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative">
        <img 
          src={image} 
          alt={name}
          className="w-full h-48 object-cover"
        />
        <Badge 
          className={`absolute top-3 right-3 ${
            status === 'available' 
              ? 'bg-success hover:bg-success/90' 
              : 'bg-warning hover:bg-warning/90'
          }`}
        >
          {status === 'available' ? 'Disponível' : 'Alugado'}
        </Badge>
      </div>
      
      <CardContent className="p-4">
        <div className="mb-2">
          <Badge variant="outline" className="text-xs">
            {category}
          </Badge>
        </div>
        
        <h3 className="text-lg font-semibold mb-3">{name}</h3>
        
        <div className="grid grid-cols-2 gap-3 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Users className="h-4 w-4" />
            <span>{passengers} pessoas</span>
          </div>
          <div className="flex items-center gap-2">
            <Settings className="h-4 w-4" />
            <span>{transmission}</span>
          </div>
          <div className="flex items-center gap-2">
            <Fuel className="h-4 w-4" />
            <span>{fuel}</span>
          </div>
          <div className="flex items-center gap-2">
            <Shield className="h-4 w-4" />
            <span>Seguro</span>
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="p-4 pt-0 flex items-center justify-between">
        <div>
          <span className="text-2xl font-bold text-primary">
            R$ {dailyPrice}
          </span>
          <span className="text-sm text-muted-foreground">/dia</span>
        </div>
        <Button 
          variant={status === 'available' ? 'default' : 'secondary'}
          disabled={status === 'rented'}
        >
          {status === 'available' ? 'Reservar' : 'Indisponível'}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CarCard;