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
  return;
};
export default SearchForm;