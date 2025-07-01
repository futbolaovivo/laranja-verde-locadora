import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, CreditCard, Heart, Shield, ClipboardList } from "lucide-react";

const VehicleFilters = () => {
  const filters = [
    {
      icon: CreditCard,
      title: "Pague com cartão",
      description: "Uma opção mais prática para pagar sua reserva."
    },
    {
      icon: Heart,
      title: "Sem dores de cabeça",
      description: "Licenciamento, emplacamento, impostos e IPVA inclusos."
    },
    {
      icon: Shield,
      title: "Proteção completa inclusive para terceiros",
      description: "Proteção contra roubos, furtos e reparo completo."
    },
    {
      icon: ClipboardList,
      title: "Gestão de multas",
      description: "Indique o condutor responsável no app e nós cuidamos do resto."
    }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="relative">
          {/* Botão esquerdo */}
          <Button 
            variant="default" 
            size="icon" 
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 rounded-full bg-primary hover:bg-primary/90 shadow-lg"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>

          {/* Grid de filtros */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mx-16">
            {filters.map((filter, index) => (
              <Card key={index} className="border-0 bg-white hover:shadow-md transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <filter.icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <h3 className="font-semibold text-primary mb-2 text-lg">
                    {filter.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {filter.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Botão direito */}
          <Button 
            variant="default" 
            size="icon" 
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 rounded-full bg-primary hover:bg-primary/90 shadow-lg"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>

        {/* Indicadores */}
        <div className="flex justify-center mt-8 space-x-2">
          <div className="w-2 h-2 rounded-full bg-primary"></div>
          <div className="w-2 h-2 rounded-full bg-muted"></div>
        </div>
      </div>
    </section>
  );
};

export default VehicleFilters;