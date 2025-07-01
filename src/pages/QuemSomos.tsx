import Navbar from "@/components/Navbar";
import { Clock, Users, TrendingUp, Award } from "lucide-react";

const QuemSomos = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-foreground mb-12 text-center">Quem Somos</h1>
        
        {/* Qualidade Garantida Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <div className="w-full max-w-md mx-auto mb-8 flex items-center justify-center">
              <img 
                src="/lovable-uploads/42100d53-07cf-4556-a1df-362f273f5056.png" 
                alt="Qualidade Garantida" 
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
          
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-6">Um pouco de nossa Empresa...</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>Além dos melhores produtos, trabalhamos de forma objetiva e eficiente, com integridade e senso de urgência para gerar os melhores serviços. Confira abaixo alguns dos pilares de nossa empresa.</p>
              
              <p><strong>Foco no Cliente:</strong> Nossos clientes são a razão da nossa existência. Nos comprometemos a atender suas demandas no local e prazo necessários.</p>
              
              <p><strong>Segurança:</strong> Somos rigorosos no cumprimento dos nossos padrões, prezando pela segurança dos nossos clientes e colaboradores.</p>
              
              <p><strong>Resultados com Qualidade:</strong> Buscamos maximizar os resultados, valorizando a qualidade em cada detalhe de nossa operação.</p>
              
              <p><strong>Trabalho em Equipe:</strong> Juntos alcançamos nossos objetivos, confiamos uns nos outros, compartilhando conquistas e resultados.</p>
            </div>
          </div>
        </div>

        {/* Sucesso dos Clientes */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-6">O sucesso de nossos clientes é o que nos motiva...</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>Visamos construir relacionamentos de longo prazo, tendo como base a ética profissional. Estamos comprometidas com o sucesso de cada um de nossos clientes, pois acreditamos que o crescimento deles também será seu e de seus colaboradores.</p>
              
              <p>Quando nossos clientes ganham, nós também ganhamos. <strong>Fomos reconhecidos por nossas conquistas</strong> em categorias como diversidade, ética, excelência, inovação e integridade.</p>
            </div>
          </div>
          <div className="bg-muted rounded-lg p-8">
            <img 
              src="/lovable-uploads/0f6022ae-3fd3-4461-b84f-f888ecfd47b8.png" 
              alt="Aperto de mãos entregando chaves do carro" 
              className="w-full h-64 object-cover rounded-lg"
            />
          </div>
        </div>

        {/* Missão, Visão, Valores */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">MISSÃO • VISÃO • VALORES</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Missão */}
            <div className="bg-card p-6 rounded-lg border">
              <h3 className="text-xl font-bold text-foreground mb-4 flex items-center">
                <Award className="w-6 h-6 text-primary mr-2" />
                Missão
              </h3>
              <p className="text-muted-foreground">
                Entregar soluções de qualidade na comercialização de prestação de nossos serviços. Proporcionar realização, satisfação no relacionamento com nossos clientes e colaboradores.
              </p>
            </div>

            {/* Visão */}
            <div className="bg-card p-6 rounded-lg border">
              <h3 className="text-xl font-bold text-foreground mb-4 flex items-center">
                <TrendingUp className="w-6 h-6 text-primary mr-2" />
                Visão
              </h3>
              <p className="text-muted-foreground">
                Nossa VISÃO é que trabalhamos duro, sermos competentes, nos esforçamos diariamente e honestamente para atender as mais diversas necessidades de nossos Clientes, todos os Fornecedores, Parceiros e Funcionários.
              </p>
            </div>

            {/* Valores */}
            <div className="bg-card p-6 rounded-lg border">
              <h3 className="text-xl font-bold text-foreground mb-4">Valores</h3>
              <ul className="text-muted-foreground space-y-2 text-sm">
                <li>• <strong>Responsabilidade:</strong> Ser responsável por suas ações e decisões</li>
                <li>• <strong>Inovação:</strong> Buscar novas soluções, ideias e melhorias</li>
                <li>• <strong>Competência:</strong> Executar suas atividades com qualidade</li>
                <li>• <strong>Comprometimento:</strong> Estar comprometido com os princípios</li>
                <li>• <strong>Profissionalismo:</strong> Exercer suas atribuições com dedicação</li>
                <li>• <strong>Transparência:</strong> Atuar e informar de forma clara e verdadeira</li>
                <li>• <strong>Ética:</strong> Agir de acordo com valores que norteiam uma conduta íntegra</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Por que escolher nossa empresa */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-6">POR QUE ESCOLHER A NOSSA EMPRESA?</h2>
          <p className="text-muted-foreground mb-12">
            Entregamos os resultados que você busca e porque consideramos que as nossas pessoas são o nosso maior patrimônio.
          </p>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-foreground mb-2">Agilidade e eficiência</h3>
              <p className="text-sm text-muted-foreground">no serviço realizado</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-foreground mb-2">Equipe altamente</h3>
              <p className="text-sm text-muted-foreground">qualificada no que faz</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-foreground mb-2">Soluções de acordo</h3>
              <p className="text-sm text-muted-foreground">com a sua necessidade</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-foreground mb-2">Qualidade comprovada</h3>
              <p className="text-sm text-muted-foreground">por nossos clientes</p>
            </div>
          </div>
        </div>

        {/* Visita */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">Gostaria de nos fazer uma visita?</h2>
          <p className="text-muted-foreground">
            Clique aqui e confira nosso endereço e o mapa de como{" "}
            <a 
              href="https://www.google.com.br/maps/place/Av.+Goi%C3%A1s,+1374+-+Alvorada,+Lucas+do+Rio+Verde+-+MT,+78455-000/@-13.081501,-55.9146912,16z/data=!3m1!4b1!4m6!3m5!1s0x93a0f3ecc15b976f:0xb45b6ae1594100e2!8m2!3d-13.081501!4d-55.9146912!16s%2Fg%2F11mcncjczd?entry=ttu&g_ep=EgoyMDI1MDYyNi4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80 font-semibold underline"
            >
              chegar até a nós.
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default QuemSomos;