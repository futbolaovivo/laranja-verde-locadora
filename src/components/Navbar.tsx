import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-primary backdrop-blur border-b border-primary-foreground/20 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-white">
              <span className="text-2xl font-bold tracking-wider">MOVI </span>
              <span className="text-lg font-inter font-light tracking-normal">LOCADORA DE VEÍCULO</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-white hover:text-white/80 transition-colors">
              Início
            </a>
            <a href="/quem-somos" className="text-white hover:text-white/80 transition-colors">
              Quem Somos
            </a>
            <a href="/contato" className="text-white hover:text-white/80 transition-colors">
              Contato
            </a>
            <Button variant="default" size="sm" className="bg-secondary hover:bg-secondary/90 text-white" asChild>
              <a href="/contato">Solicitar Orçamento</a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              className="text-white hover:bg-white/20"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/20">
            <div className="flex flex-col space-y-4">
              <a href="/" className="text-white hover:text-white/80 transition-colors">
                Início
              </a>
              <a href="/quem-somos" className="text-white hover:text-white/80 transition-colors">
                Quem Somos
              </a>
              <a href="/contato" className="text-white hover:text-white/80 transition-colors">
                Contato
              </a>
              <Button variant="default" size="sm" className="bg-secondary hover:bg-secondary/90 text-white w-fit" asChild>
                <a href="/contato">Solicitar Orçamento</a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;