import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Plus, Edit, Trash2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useCars, Car } from "@/contexts/CarsContext";

const AdminPanel = () => {
  const { toast } = useToast();
  const { cars, addCar, updateCar, deleteCar } = useCars();

  const [isAddingCar, setIsAddingCar] = useState(false);
  const [newCar, setNewCar] = useState({
    name: "",
    image: "",
    category: "",
    passengers: "",
    transmission: "",
    fuel: "",
    dailyPrice: "",
    status: 'available' as 'available' | 'rented'
  });

  const handleAddCar = () => {
    if (!newCar.name || !newCar.category || !newCar.dailyPrice) {
      toast({
        title: "Erro",
        description: "Preencha todos os campos obrigatórios",
        variant: "destructive"
      });
      return;
    }

    const car: Car = {
      id: Date.now().toString(),
      name: newCar.name,
      image: newCar.image || "https://images.unsplash.com/photo-1549399290-8121fd9f9c80?w=400&h=300&fit=crop",
      category: newCar.category,
      passengers: parseInt(newCar.passengers) || 5,
      transmission: newCar.transmission,
      fuel: newCar.fuel,
      dailyPrice: parseFloat(newCar.dailyPrice),
      status: newCar.status
    };

    addCar(car);
    setNewCar({
      name: "",
      image: "",
      category: "",
      passengers: "",
      transmission: "",
      fuel: "",
      dailyPrice: "",
      status: 'available'
    });
    setIsAddingCar(false);

    toast({
      title: "Sucesso",
      description: "Carro adicionado com sucesso! Acesse a página de veículos para ver na frota.",
    });
  };

  const handleStatusChange = (carId: string, newStatus: 'available' | 'rented') => {
    updateCar(carId, { status: newStatus });
    toast({
      title: "Status atualizado",
      description: `Carro marcado como ${newStatus === 'available' ? 'disponível' : 'alugado'}`,
    });
  };

  const handleDeleteCar = (carId: string) => {
    deleteCar(carId);
    toast({
      title: "Carro removido",
      description: "Carro removido da frota",
    });
  };

  return (
    <div className="min-h-screen bg-muted/30 p-6">
      <div className="container mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold">Painel Administrativo</h1>
          <Button onClick={() => setIsAddingCar(!isAddingCar)}>
            <Plus className="h-4 w-4 mr-2" />
            Adicionar Carro
          </Button>
        </div>

        {/* Formulário de adicionar carro */}
        {isAddingCar && (
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Adicionar Novo Carro</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div>
                  <Label htmlFor="name">Nome do Carro *</Label>
                  <Input
                    id="name"
                    value={newCar.name}
                    onChange={(e) => setNewCar({...newCar, name: e.target.value})}
                    placeholder="Ex: Chevrolet Onix"
                  />
                </div>
                <div>
                  <Label htmlFor="category">Categoria *</Label>
                  <Select onValueChange={(value) => setNewCar({...newCar, category: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione a categoria" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Econômico">Econômico</SelectItem>
                      <SelectItem value="Compacto">Compacto</SelectItem>
                      <SelectItem value="Intermediário">Intermediário</SelectItem>
                      <SelectItem value="SUV">SUV</SelectItem>
                      <SelectItem value="Pickup">Pickup</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="passengers">Passageiros</Label>
                  <Input
                    id="passengers"
                    type="number"
                    value={newCar.passengers}
                    onChange={(e) => setNewCar({...newCar, passengers: e.target.value})}
                    placeholder="5"
                  />
                </div>
                <div>
                  <Label htmlFor="transmission">Transmissão</Label>
                  <Select onValueChange={(value) => setNewCar({...newCar, transmission: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Transmissão" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Manual">Manual</SelectItem>
                      <SelectItem value="Automático">Automático</SelectItem>
                      <SelectItem value="CVT">CVT</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="fuel">Combustível</Label>
                  <Select onValueChange={(value) => setNewCar({...newCar, fuel: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Combustível" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Flex">Flex</SelectItem>
                      <SelectItem value="Gasolina">Gasolina</SelectItem>
                      <SelectItem value="Diesel">Diesel</SelectItem>
                      <SelectItem value="Híbrido">Híbrido</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="dailyPrice">Preço Diário *</Label>
                  <Input
                    id="dailyPrice"
                    type="number"
                    value={newCar.dailyPrice}
                    onChange={(e) => setNewCar({...newCar, dailyPrice: e.target.value})}
                    placeholder="89.00"
                  />
                </div>
                <div>
                  <Label htmlFor="image">URL da Imagem</Label>
                  <Input
                    id="image"
                    value={newCar.image}
                    onChange={(e) => setNewCar({...newCar, image: e.target.value})}
                    placeholder="https://..."
                  />
                </div>
                <div>
                  <Label htmlFor="status">Status</Label>
                  <Select onValueChange={(value: 'available' | 'rented') => setNewCar({...newCar, status: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="available">Disponível</SelectItem>
                      <SelectItem value="rented">Alugado</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="flex gap-3 mt-6">
                <Button onClick={handleAddCar}>Adicionar Carro</Button>
                <Button variant="outline" onClick={() => setIsAddingCar(false)}>
                  Cancelar
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Lista de carros */}
        <div className="grid gap-4">
          {cars.map((car) => (
            <Card key={car.id}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <img 
                      src={car.image} 
                      alt={car.name}
                      className="w-20 h-20 object-cover rounded"
                    />
                    <div>
                      <h3 className="text-lg font-semibold">{car.name}</h3>
                      <p className="text-sm text-muted-foreground">{car.category}</p>
                      <p className="text-lg font-bold text-primary">R$ {car.dailyPrice}/dia</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Badge 
                      className={
                        car.status === 'available' 
                          ? 'bg-success hover:bg-success/90' 
                          : 'bg-warning hover:bg-warning/90'
                      }
                    >
                      {car.status === 'available' ? 'Disponível' : 'Alugado'}
                    </Badge>
                    
                    <Select 
                      value={car.status} 
                      onValueChange={(value: 'available' | 'rented') => handleStatusChange(car.id, value)}
                    >
                      <SelectTrigger className="w-32">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="available">Disponível</SelectItem>
                        <SelectItem value="rented">Alugado</SelectItem>
                      </SelectContent>
                    </Select>
                    
                    <Button variant="outline" size="sm">
                      <Edit className="h-4 w-4" />
                    </Button>
                    
                    <Button 
                      variant="outline" 
                      size="sm" 
                      onClick={() => handleDeleteCar(car.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;