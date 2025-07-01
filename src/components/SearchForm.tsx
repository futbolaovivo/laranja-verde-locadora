import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Search, MapPin, Calendar, Users } from "lucide-react";

const SearchForm = () => {
  const [searchData, setSearchData] = useState({
    location: "",
    pickupDate: "",
    returnDate: "",
    passengers: ""
  });

  const handleSearch = () => {
    // Implementar lógica de busca
    console.log("Busca realizada:", searchData);
  };

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Encontre o Carro Ideal
          </h2>
          <p className="text-lg text-muted-foreground">
            Busque por localização, data e número de passageiros
          </p>
        </div>

        <Card className="max-w-4xl mx-auto">
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              {/* Local de Retirada */}
              <div className="space-y-2">
                <label className="text-sm font-medium flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-primary" />
                  Local de Retirada
                </label>
                <Select onValueChange={(value) => setSearchData({...searchData, location: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione o local" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="sao-paulo">São Paulo - SP</SelectItem>
                    <SelectItem value="rio-janeiro">Rio de Janeiro - RJ</SelectItem>
                    <SelectItem value="belo-horizonte">Belo Horizonte - MG</SelectItem>
                    <SelectItem value="brasilia">Brasília - DF</SelectItem>
                    <SelectItem value="salvador">Salvador - BA</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Data de Retirada */}
              <div className="space-y-2">
                <label className="text-sm font-medium flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-primary" />
                  Data de Retirada
                </label>
                <Input 
                  type="date" 
                  value={searchData.pickupDate}
                  onChange={(e) => setSearchData({...searchData, pickupDate: e.target.value})}
                />
              </div>

              {/* Data de Devolução */}
              <div className="space-y-2">
                <label className="text-sm font-medium flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-primary" />
                  Data de Devolução
                </label>
                <Input 
                  type="date" 
                  value={searchData.returnDate}
                  onChange={(e) => setSearchData({...searchData, returnDate: e.target.value})}
                />
              </div>

              {/* Número de Passageiros */}
              <div className="space-y-2">
                <label className="text-sm font-medium flex items-center gap-2">
                  <Users className="h-4 w-4 text-primary" />
                  Passageiros
                </label>
                <Select onValueChange={(value) => setSearchData({...searchData, passengers: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Quantos?" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1-2">1 a 2 pessoas</SelectItem>
                    <SelectItem value="3-4">3 a 4 pessoas</SelectItem>
                    <SelectItem value="5-7">5 a 7 pessoas</SelectItem>
                    <SelectItem value="8+">8+ pessoas</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Botão de Busca */}
            <div className="flex justify-center">
              <Button size="lg" onClick={handleSearch} className="w-full md:w-auto min-w-[200px]">
                <Search className="h-5 w-5 mr-2" />
                Buscar Veículos
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default SearchForm;