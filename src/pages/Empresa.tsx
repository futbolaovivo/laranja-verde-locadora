import Navbar from "@/components/Navbar";

const Empresa = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Teste simples */}
      <div className="py-8 text-center">
        <h1 className="text-4xl font-bold">Página Empresa - Teste</h1>
        <p>Se você está vendo isso, a página está carregando!</p>
      </div>
    </div>
  );
};

export default Empresa;