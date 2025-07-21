import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Car, Truck, Shield, Zap } from "lucide-react";

interface VehicleCategory {
  id: string;
  name: string;
  mainModel: string;
  image: string;
  icon: React.ReactNode;
  description: string;
  includedModels: string[];
  features: string[];
}

const vehicleCategories: VehicleCategory[] = [
  {
    id: "sedan-compacto",
    name: "SEDÃ COMPACTO OU SIMILAR",
    mainModel: "Fiat Cronos ou similar",
    image: "/lovable-uploads/abb84d08-7eeb-4134-a308-f133a4ca30fc.png",
    icon: <Car className="w-8 h-8" />,
    description: "Conforto e economia para suas viagens urbanas",
    includedModels: [
      "Fiat Cronos Drive 1.3 Aut – VL",
      "Chevrolet Onix Sedan Premier AT – VL", 
      "Hyundai HB20S10TA Evolution",
      "Volkswagen Virtus TSI Aut",
      "Chevrolet Onix LT2"
    ],
    features: ["Ar Condicionado", "Direção Hidráulica", "4-5 Passageiros", "Câmbio Automático"]
  },
  {
    id: "suv-compacto",
    name: "SUV COMPACTO OU SIMILAR", 
    mainModel: "Jeep Compass ou similar",
    image: "/lovable-uploads/75717a4b-8d0a-4734-8ec8-4d4b60c3660d.png",
    icon: <Car className="w-8 h-8" />,
    description: "Versatilidade e segurança para todos os terrenos",
    includedModels: [
      "Jeep Compass",
      "Hyundai Creta", 
      "VW T-Cross",
      "Chevrolet Tracker"
    ],
    features: ["4x4 Disponível", "Espaço Amplo", "5 Passageiros", "Alta Segurança"]
  },
  {
    id: "picape-dupla",
    name: "PICAPE CABINE DUPLA OU SIMILAR",
    mainModel: "Fiat Strada CD ou similar", 
    image: "/lovable-uploads/7f822c8b-80a4-4ec0-a34a-e3a33d7ade01.png",
    icon: <Truck className="w-8 h-8" />,
    description: "Robustez e capacidade para trabalho e lazer",
    includedModels: [
      "Fiat Strada Freedom CD – VL",
      "Chevrolet Montana LTZ 1.2 Turbo Aut"
    ],
    features: ["Cabine Dupla", "Caçamba", "5 Passageiros", "Grande Capacidade"]
  },
  {
    id: "picape-simples", 
    name: "PICAPE CABINE SIMPLES OU SIMILAR",
    mainModel: "Fiat Strada CS ou similar",
    image: "/lovable-uploads/132662ce-d8a3-401d-b356-e657d617f7ed.png", 
    icon: <Truck className="w-8 h-8" />,
    description: "Solução eficiente para cargas e trabalho",
    includedModels: [
      "Fiat Strada Freedom CS 1.3 Zero KM",
      "VW Saveiro"
    ],
    features: ["Cabine Simples", "Caçamba Grande", "2 Passageiros", "Máxima Eficiência"]
  },
  {
    id: "hatch-compacto",
    name: "HATCH COMPACTO OU SIMILAR", 
    mainModel: "Fiat Argo ou similar",
    image: "/lovable-uploads/077e6481-a56d-46f2-b645-29cebea4d71a.png",
    icon: <Car className="w-8 h-8" />,
    description: "Agilidade urbana com economia garantida",
    includedModels: [
      "Fiat Argo Drive com kit",
      "Chevrolet Onix LT2", 
      "Hyundai HB20"
    ],
    features: ["Compacto", "Econômico", "4-5 Passageiros", "Fácil Estacionamento"]
  }
];

const VehicleCategoriesSection = () => {
  return (
    <section id="categorias-veiculos" className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            NOSSA <span className="text-primary">FROTA</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-4">
            Veículos organizados por categoria para atender suas necessidades específicas
          </p>
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <Shield className="w-4 h-4" />
            <span>Imagens ilustrativas. O modelo entregue pode variar conforme disponibilidade.</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {vehicleCategories.map((category) => (
            <Card key={category.id} className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-card">
              <div className="relative overflow-hidden">
                <img 
                  src={category.image} 
                  alt={category.mainModel}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary" className="bg-primary text-primary-foreground font-semibold">
                    {category.icon}
                    <span className="ml-2">Disponível</span>
                  </Badge>
                </div>
              </div>
              
              <CardHeader className="pb-4">
                <CardTitle className="text-lg font-bold text-foreground leading-tight">
                  {category.name}
                </CardTitle>
                <div className="text-center py-2">
                  <p className="text-xl font-bold text-primary">
                    {category.mainModel}
                  </p>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm">
                  {category.description}
                </p>
                
                <div className="space-y-2">
                  <h4 className="font-semibold text-sm text-foreground">Características:</h4>
                  <div className="grid grid-cols-2 gap-1">
                    {category.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Zap className="w-3 h-3 text-primary" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="font-semibold text-sm text-foreground">Modelos incluídos:</h4>
                  <ul className="space-y-1">
                    {category.includedModels.slice(0, 3).map((model, index) => (
                      <li key={index} className="text-xs text-muted-foreground flex items-center gap-1">
                        <span className="w-1 h-1 bg-primary rounded-full"></span>
                        {model}
                      </li>
                    ))}
                    {category.includedModels.length > 3 && (
                      <li className="text-xs text-muted-foreground italic">
                        e outros modelos similares...
                      </li>
                    )}
                  </ul>
                </div>
              </CardContent>

              <CardFooter className="pt-4">
                <Button 
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
                  size="lg"
                >
                  Consultar Disponibilidade
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-muted/50 rounded-2xl p-8 border">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Não encontrou o que procura?
            </h3>
            <p className="text-muted-foreground mb-6">
              Entre em contato conosco e encontraremos a solução ideal para sua necessidade
            </p>
            <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              Falar com Especialista
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VehicleCategoriesSection;