import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [prevScrollY, setPrevScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > prevScrollY && currentScrollY > 80) {
        // Scrolling down and past 80px threshold
        setIsVisible(false);
      } else {
        // Scrolling up or at the top
        setIsVisible(true);
      }
      
      setPrevScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollY]);

  return (
    <nav className={`bg-primary backdrop-blur border-b border-primary-foreground/20 sticky top-0 z-50 transition-transform duration-300 ${
      isVisible ? "translate-y-0" : "-translate-y-full"
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="hover:opacity-80 transition-opacity">
              <img src="/lovable-uploads/377a4e9d-1a5b-4b35-b114-6e80af608e36.png" alt="MOVI Locadora" className="h-10" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-white hover:text-white/80 transition-colors">
              Início
            </Link>
            <a href="#carros" className="text-white hover:text-white/80 transition-colors">
              Veículos
            </a>
            <Button variant="default" size="sm" className="bg-secondary hover:bg-secondary/90 text-white" asChild>
              <a href="https://wa.me/5565992851872" target="_blank" rel="noopener noreferrer">Solicitar Orçamento</a>
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
              <Link to="/" className="text-white hover:text-white/80 transition-colors">
                Início
              </Link>
              <a href="#carros" className="text-white hover:text-white/80 transition-colors">
                Veículos
              </a>
              <Button variant="default" size="sm" className="bg-secondary hover:bg-secondary/90 text-white w-fit" asChild>
                <a href="https://wa.me/5565992851872" target="_blank" rel="noopener noreferrer">Solicitar Orçamento</a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;