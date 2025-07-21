import Navbar from "@/components/Navbar";
import VehicleCategoriesSection from "@/components/VehicleCategoriesSection";
import VehicleFilters from "@/components/VehicleFilters";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Clock, Users, TrendingUp, Award, Mail, Phone, MapPin, MessageCircle, Shield, Zap, Star, CheckCircle } from "lucide-react";
import { useState } from "react";
const Veiculos = () => {
  const [formData, setFormData] = useState({
    nome: "",
    telefone: "",
    email: "",
    endereco: "",
    detalhes: "",
    verificacao: ""
  });
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Formulário enviado:", formData);
    // Aqui você pode adicionar a lógica para enviar o formulário
  };
  return <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-background">
      <Navbar />
      
      {/* Hero Section with Search */}
      <section className="relative py-20 bg-gradient-to-br from-primary via-primary/90 to-secondary overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
            NOSSA <span className="text-secondary">FROTA</span>
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Veículos de última geração com tecnologia avançada e segurança garantida para sua tranquilidade
          </p>
        </div>
      </section>
      
      {/* Stats Section */}
      
      
      {/* Vehicle Categories Section */}
      <VehicleCategoriesSection />
      
      {/* Filters Section */}
      <section className="py-16 bg-muted/50">
        <VehicleFilters />
      </section>
      
      {/* Company Section with Modern Design */}
      <section id="quem-somos" className="py-20 bg-gradient-to-br from-card via-background to-muted/30">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-20">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              QUEM <span className="text-primary">SOMOS</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              Líder em locação de veículos com mais de uma década de experiência
            </p>
          </div>
          
          {/* Trust Indicators */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <div className="text-center p-8 bg-card rounded-2xl border shadow-lg hover:shadow-xl transition-all">
              <Shield className="w-16 h-16 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">Segurança Total</h3>
              <p className="text-muted-foreground">Todos os veículos com seguro completo e assistência 24h</p>
            </div>
            <div className="text-center p-8 bg-card rounded-2xl border shadow-lg hover:shadow-xl transition-all">
              <Zap className="w-16 h-16 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">Agilidade</h3>
              <p className="text-muted-foreground">Processo rápido de locação em menos de 30 minutos</p>
            </div>
            <div className="text-center p-8 bg-card rounded-2xl border shadow-lg hover:shadow-xl transition-all">
              <Star className="w-16 h-16 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">Excelência</h3>
              <p className="text-muted-foreground">Nota 5 estrelas na avaliação dos nossos clientes</p>
            </div>
          </div>
          
          {/* Company Info with Modern Layout */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-xl"></div>
              <div className="relative bg-card p-8 rounded-2xl border shadow-xl">
                <img src="/lovable-uploads/42100d53-07cf-4556-a1df-362f273f5056.png" alt="Qualidade Garantida" className="w-full h-auto object-contain rounded-xl" />
              </div>
            </div>
            
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-foreground mb-8">
                <span className="text-primary">Excelência</span> em Cada Detalhe
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4 p-4 bg-card rounded-xl border">
                  <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-foreground mb-2">Foco Total no Cliente</h4>
                    <p className="text-muted-foreground">Nossos clientes são nossa prioridade máxima. Atendemos suas necessidades com precisão e rapidez.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 p-4 bg-card rounded-xl border">
                  <Shield className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-foreground mb-2">Segurança Incomparável</h4>
                    <p className="text-muted-foreground">Padrões rigorosos de segurança para proteger nossos clientes e colaboradores.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 p-4 bg-card rounded-xl border">
                  <Award className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-foreground mb-2">Qualidade Premium</h4>
                    <p className="text-muted-foreground">Maximizamos resultados valorizando cada detalhe de nossa operação.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Success Story */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-foreground">
                Seu <span className="text-primary">Sucesso</span> nos Motiva
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>Construímos relacionamentos duradouros baseados na ética profissional e no compromisso com o sucesso de cada cliente.</p>
                <p>Fomos <strong className="text-foreground">reconhecidos nacionalmente</strong> por nossa excelência em diversidade, ética, inovação e integridade.</p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-secondary/20 to-primary/20 rounded-3xl blur-xl"></div>
              <div className="relative bg-card p-8 rounded-2xl border shadow-xl">
                <img src="/lovable-uploads/0f6022ae-3fd3-4461-b84f-f888ecfd47b8.png" alt="Aperto de mãos entregando chaves do carro" className="w-full h-80 object-cover rounded-xl" />
              </div>
            </div>
          </div>

          {/* Mission, Vision, Values - Modern Cards */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-center text-foreground mb-16">
              MISSÃO • VISÃO • <span className="text-primary">VALORES</span>
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
                <div className="relative bg-card p-8 rounded-2xl border shadow-lg hover:shadow-xl transition-all">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center mb-6">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">Missão</h3>
                  <p className="text-muted-foreground">
                    Entregar soluções de qualidade premium na prestação de nossos serviços, proporcionando satisfação e realização completa aos nossos clientes e colaboradores.
                  </p>
                </div>
              </div>

              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-secondary to-primary rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
                <div className="relative bg-card p-8 rounded-2xl border shadow-lg hover:shadow-xl transition-all">
                  <div className="w-16 h-16 bg-gradient-to-br from-secondary to-primary rounded-xl flex items-center justify-center mb-6">
                    <TrendingUp className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">Visão</h3>
                  <p className="text-muted-foreground">
                    Ser reconhecida como líder em locação de veículos, atendendo com excelência as necessidades de clientes, fornecedores, parceiros e funcionários.
                  </p>
                </div>
              </div>

              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
                <div className="relative bg-card p-8 rounded-2xl border shadow-lg hover:shadow-xl transition-all">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center mb-6">
                    <Star className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">Valores</h3>
                  <div className="space-y-3 text-muted-foreground">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="font-semibold">Responsabilidade</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="font-semibold">Inovação</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="font-semibold">Competência</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="font-semibold">Transparência</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Why Choose Us - Enhanced */}
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              POR QUE ESCOLHER A <span className="text-primary">MOVI?</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-16 max-w-4xl mx-auto">
              Somos líderes do mercado porque entregamos resultados excepcionais e consideramos nossos colaboradores nosso maior patrimônio.
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="group text-center p-6 bg-card rounded-2xl border shadow-lg hover:shadow-xl transition-all hover:-translate-y-2">
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Clock className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Agilidade Total</h3>
                <p className="text-muted-foreground">Processo otimizado para máxima eficiência</p>
              </div>
              
              <div className="group text-center p-6 bg-card rounded-2xl border shadow-lg hover:shadow-xl transition-all hover:-translate-y-2">
                <div className="w-20 h-20 bg-gradient-to-br from-secondary to-primary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Users className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Equipe Expert</h3>
                <p className="text-muted-foreground">Profissionais altamente qualificados</p>
              </div>
              
              <div className="group text-center p-6 bg-card rounded-2xl border shadow-lg hover:shadow-xl transition-all hover:-translate-y-2">
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Zap className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Soluções Personalizadas</h3>
                <p className="text-muted-foreground">Sob medida para suas necessidades</p>
              </div>
              
              <div className="group text-center p-6 bg-card rounded-2xl border shadow-lg hover:shadow-xl transition-all hover:-translate-y-2">
                <div className="w-20 h-20 bg-gradient-to-br from-secondary to-primary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Award className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Qualidade Comprovada</h3>
                <p className="text-muted-foreground">Excelência reconhecida pelos clientes</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Section - Modern Design */}
      <section id="contato" className="py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              ENTRE EM <span className="text-primary">CONTATO</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Pronto para acelerar? Nossa equipe está disponível para atender você com excelência
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            {/* Contact Information */}
            <div className="space-y-8 text-center">
              {/* Email */}
              <div className="group flex flex-col items-center space-y-4 p-6 bg-card rounded-2xl border shadow-lg hover:shadow-xl transition-all mx-auto max-w-md">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-3">Email</h3>
                  <p className="text-lg text-muted-foreground font-medium">locadoramovi@gmail.com</p>
                </div>
              </div>

              {/* Phone */}
              <div className="group flex flex-col items-center space-y-4 p-6 bg-card rounded-2xl border shadow-lg hover:shadow-xl transition-all mx-auto max-w-md">
                <div className="w-16 h-16 bg-gradient-to-br from-secondary to-primary rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-3">WhatsApp & Telefone</h3>
                  <p className="text-lg text-muted-foreground font-medium">(65) 99285-1872</p>
                  <p className="text-sm text-muted-foreground">Resposta rápida garantida</p>
                </div>
              </div>

              {/* Business Hours */}
              <div className="group flex flex-col items-center space-y-4 p-6 bg-card rounded-2xl border shadow-lg hover:shadow-xl transition-all mx-auto max-w-md">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-3">Horário de Atendimento</h3>
                  <div className="text-muted-foreground space-y-2">
                    <p className="text-lg font-medium">Segunda a Sexta: 7:00 - 11:30 | 13:00 - 18:00</p>
                    <p className="text-lg font-medium">Sábado: 7:00 - 11:30</p>
                  </div>
                </div>
              </div>

              {/* Address */}
              <div className="group flex flex-col items-center space-y-4 p-6 bg-card rounded-2xl border shadow-lg hover:shadow-xl transition-all mx-auto max-w-md">
                <div className="w-16 h-16 bg-gradient-to-br from-secondary to-primary rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-3">Localização</h3>
                  <div className="text-muted-foreground space-y-1">
                    <p className="text-lg font-medium">Avenida Goiás 1374-S, Bairro Alvorada</p>
                    <p className="text-lg font-medium">Lucas do Rio Verde - MT</p>
                    <p className="text-base">Sala 02 anexo posto São Paulo</p>
                  </div>
                </div>
              </div>

              {/* Map Link */}
              <div className="pt-8">
                <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 text-white max-w-lg mx-auto">
                  <h3 className="text-3xl font-bold mb-4">Venha nos Visitar!</h3>
                  <p className="text-lg mb-6">
                    Clique no botão abaixo e confira nossa localização exata no mapa
                  </p>
                  <a href="https://www.google.com.br/maps/place/Av.+Goi%C3%A1s,+1374+-+Alvorada,+Lucas+do+Rio+Verde+-+MT,+78455-000/@-13.081501,-55.9146912,16z/data=!3m1!4b1!4m6!3m5!1s0x93a0f3ecc15b976f:0xb45b6ae1594100e2!8m2!3d-13.081501!4d-55.9146912!16s%2Fg%2F11mcncjczd?entry=ttu&g_ep=EgoyMDI1MDYyNi4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-8 py-4 bg-white text-primary font-bold rounded-xl hover:bg-white/90 transition-all transform hover:scale-105">
                    <MapPin className="w-5 h-5 mr-2" />
                    Ver no Google Maps
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>;
};
export default Veiculos;