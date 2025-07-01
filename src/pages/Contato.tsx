import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, Clock, MapPin, MessageCircle } from "lucide-react";
import { useState } from "react";

const Contato = () => {
  const [formData, setFormData] = useState({
    nome: "",
    telefone: "",
    email: "",
    endereco: "",
    detalhes: "",
    verificacao: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
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

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-foreground mb-12 text-center">Contato</h1>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Informações de Contato */}
          <div className="space-y-8">
            {/* Email */}
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Email</h3>
                <p className="text-muted-foreground">locadoramovi@gmail.com</p>
              </div>
            </div>

            {/* Telefones */}
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Telefones</h3>
                <p className="text-muted-foreground">(65) 99285-1872</p>
              </div>
            </div>

            {/* Horário de Funcionamento */}
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Horário de funcionamento</h3>
                <div className="text-muted-foreground space-y-1">
                  <p>Segunda a sexta das 7:00 às 11:30</p>
                  <p>das 13:00 às 18:00</p>
                  <p>Sábado das 7:00 às 11:30</p>
                </div>
              </div>
            </div>

            {/* Endereço */}
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Endereço</h3>
                <div className="text-muted-foreground space-y-1">
                  <p>Avenida Goiás 1374- S, Bairro Alvorada</p>
                  <p>Lucas do Rio Verde MT</p>
                  <p>Sala 02 anexo posto São Paulo</p>
                </div>
              </div>
            </div>
          </div>

          {/* Formulário de Contato */}
          <div className="bg-card p-8 rounded-lg border">
            <div className="flex items-center space-x-2 mb-6">
              <MessageCircle className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-bold text-foreground">Fale Conosco!</h2>
            </div>
            
            <p className="text-muted-foreground mb-6">
              Assim que recebermos seu contato, retornaremos o mais rápido possível. 
              Preencha todas as informações do formulário para solicitar um orçamento com mais 
              precisão. <strong>Obrigado(a)!</strong>
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="nome">Nome</Label>
                <Input
                  id="nome"
                  name="nome"
                  type="text"
                  value={formData.nome}
                  onChange={handleInputChange}
                  required
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="telefone">Telefone</Label>
                <Input
                  id="telefone"
                  name="telefone"
                  type="tel"
                  value={formData.telefone}
                  onChange={handleInputChange}
                  required
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="email">E-mail</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="endereco">Endereço Completo (Cidade, Rua, Número)</Label>
                <Input
                  id="endereco"
                  name="endereco"
                  type="text"
                  value={formData.endereco}
                  onChange={handleInputChange}
                  required
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="detalhes">Mais Detalhes</Label>
                <Textarea
                  id="detalhes"
                  name="detalhes"
                  value={formData.detalhes}
                  onChange={handleInputChange}
                  rows={4}
                  className="mt-1"
                />
              </div>

              <Button type="submit" className="w-full bg-secondary hover:bg-secondary/80">
                Solicitar orçamento
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contato;