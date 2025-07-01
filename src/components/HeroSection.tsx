import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import heroImage from "@/assets/hero-car.jpg";

const HeroSection = () => {
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-white">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            LOCAÇÃO DE VEÍCULOS
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90">
            A solução mais completa para suas necessidades de mobilidade
          </p>
          
          {/* Features */}
          <div className="space-y-4 mb-8">
            <div className="flex items-center space-x-3">
              <div className="flex-shrink-0 w-6 h-6 bg-secondary rounded-full flex items-center justify-center">
                <Check className="w-4 h-4 text-white" />
              </div>
              <span className="text-lg">Carros novos e seminovos</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="flex-shrink-0 w-6 h-6 bg-secondary rounded-full flex items-center justify-center">
                <Check className="w-4 h-4 text-white" />
              </div>
              <span className="text-lg">Documentação facilitada</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="flex-shrink-0 w-6 h-6 bg-secondary rounded-full flex items-center justify-center">
                <Check className="w-4 h-4 text-white" />
              </div>
              <span className="text-lg">Atendimento personalizado</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white">
              Ver Categorias
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black">
              Solicitar Contato
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;