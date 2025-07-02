import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CarsProvider } from "@/contexts/CarsContext";
import Index from "./pages/Index";
import Admin from "./pages/Admin";
import Empresa from "./pages/Empresa";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  console.log("App component loading...");
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <CarsProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="/empresa" element={<Empresa />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </CarsProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
