import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Car, Tag, Settings, RotateCcw } from "lucide-react";
const SearchForm = () => {
  const [searchData, setSearchData] = useState({
    search: "",
    category: "",
    brand: "",
    transmission: ""
  });
  const clearFilters = () => {
    setSearchData({
      search: "",
      category: "",
      brand: "",
      transmission: ""
    });
  };
  const handleSearch = () => {
    console.log("Executando busca com os filtros:", searchData);
    // Aqui você pode adicionar a lógica de busca/filtro
  };
  return (
    <div className="bg-card rounded-lg p-6 shadow-sm border">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        <div className="relative">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Buscar veículo..."
            value={searchData.search}
            onChange={(e) => setSearchData({ ...searchData, search: e.target.value })}
            className="pl-10"
          />
        </div>
        
        <Select value={searchData.category} onValueChange={(value) => setSearchData({ ...searchData, category: value })}>
          <SelectTrigger>
            <Car className="h-4 w-4 mr-2" />
            <SelectValue placeholder="Categoria" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="hatch">Hatch</SelectItem>
            <SelectItem value="sedan">Sedan</SelectItem>
            <SelectItem value="suv">SUV</SelectItem>
            <SelectItem value="picape">Picape</SelectItem>
          </SelectContent>
        </Select>

        <Select value={searchData.brand} onValueChange={(value) => setSearchData({ ...searchData, brand: value })}>
          <SelectTrigger>
            <Tag className="h-4 w-4 mr-2" />
            <SelectValue placeholder="Marca" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="volkswagen">Volkswagen</SelectItem>
            <SelectItem value="chevrolet">Chevrolet</SelectItem>
            <SelectItem value="ford">Ford</SelectItem>
            <SelectItem value="fiat">Fiat</SelectItem>
          </SelectContent>
        </Select>

        <Select value={searchData.transmission} onValueChange={(value) => setSearchData({ ...searchData, transmission: value })}>
          <SelectTrigger>
            <Settings className="h-4 w-4 mr-2" />
            <SelectValue placeholder="Transmissão" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="manual">Manual</SelectItem>
            <SelectItem value="automatica">Automática</SelectItem>
          </SelectContent>
        </Select>

        <div className="flex gap-2">
          <Button onClick={handleSearch} className="flex-1">
            <Search className="h-4 w-4 mr-2" />
            Buscar
          </Button>
          <Button variant="outline" onClick={clearFilters}>
            <RotateCcw className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};
export default SearchForm;