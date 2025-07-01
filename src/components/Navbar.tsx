import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 py-2 rounded-lg shadow-lg">
              <span className="text-2xl font-bold tracking-wider">MOVI</span>
              <div className="text-xs font-medium opacity-90 -mt-1">RENT A CAR</div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-foreground hover:text-primary transition-colors">
              Início
            </a>
            <a href="/quem-somos" className="text-foreground hover:text-primary transition-colors">
              Quem Somos
            </a>
            <a href="/contato" className="text-foreground hover:text-primary transition-colors">
              Contato
            </a>
            <Button variant="default" size="sm" asChild>
              <a href="/contato">Solicitar Orçamento</a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              <a href="/" className="text-foreground hover:text-primary transition-colors">
                Início
              </a>
              <a href="/quem-somos" className="text-foreground hover:text-primary transition-colors">
                Quem Somos
              </a>
              <a href="/contato" className="text-foreground hover:text-primary transition-colors">
                Contato
              </a>
              <Button variant="default" size="sm" className="w-fit" asChild>
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