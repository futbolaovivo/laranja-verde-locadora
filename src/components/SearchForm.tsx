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

  return (
    <section className="py-8 bg-background border-b">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-4 max-w-6xl mx-auto">
          {/* Campo de busca */}
          <div className="relative flex-1 min-w-[300px]">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Busque por marca ou modelo..."
              value={searchData.search}
              onChange={(e) => setSearchData({...searchData, search: e.target.value})}
              className="pl-10 h-12 text-base"
            />
          </div>

          {/* Filtro Categoria */}
          <div className="flex items-center gap-2 min-w-[140px]">
            <Car className="h-4 w-4 text-muted-foreground" />
            <Select onValueChange={(value) => setSearchData({...searchData, category: value})}>
              <SelectTrigger className="h-12">
                <SelectValue placeholder="Categoria" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="economico">Econômico</SelectItem>
                <SelectItem value="compacto">Compacto</SelectItem>
                <SelectItem value="intermediario">Intermediário</SelectItem>
                <SelectItem value="suv">SUV</SelectItem>
                <SelectItem value="pickup">Pickup</SelectItem>
                <SelectItem value="suv-compacto">SUV Compacto</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Filtro Marca */}
          <div className="flex items-center gap-2 min-w-[120px]">
            <Tag className="h-4 w-4 text-muted-foreground" />
            <Select onValueChange={(value) => setSearchData({...searchData, brand: value})}>
              <SelectTrigger className="h-12">
                <SelectValue placeholder="Marca" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="chevrolet">Chevrolet</SelectItem>
                <SelectItem value="volkswagen">Volkswagen</SelectItem>
                <SelectItem value="toyota">Toyota</SelectItem>
                <SelectItem value="jeep">Jeep</SelectItem>
                <SelectItem value="fiat">Fiat</SelectItem>
                <SelectItem value="honda">Honda</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Filtro Câmbio */}
          <div className="flex items-center gap-2 min-w-[130px]">
            <Settings className="h-4 w-4 text-muted-foreground" />
            <Select onValueChange={(value) => setSearchData({...searchData, transmission: value})}>
              <SelectTrigger className="h-12">
                <SelectValue placeholder="Câmbio" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="manual">Manual</SelectItem>
                <SelectItem value="automatico">Automático</SelectItem>
                <SelectItem value="cvt">CVT</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Botão Limpar Filtros */}
          <Button 
            variant="outline" 
            onClick={clearFilters}
            className="h-12 gap-2 px-4"
          >
            <RotateCcw className="h-4 w-4" />
            Limpar filtros
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SearchForm;