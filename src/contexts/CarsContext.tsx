import { createContext, useContext, useState, useEffect, ReactNode } from "react";

export interface Car {
  id: string;
  name: string;
  images: string[]; // Array de imagens em vez de uma única imagem
  category: string;
  passengers: number;
  transmission: string;
  fuel: string;
  dailyPrice: number;
  status: 'available' | 'rented';
}

interface CarsContextType {
  cars: Car[];
  addCar: (car: Car) => void;
  updateCar: (id: string, updates: Partial<Car>) => void;
  deleteCar: (id: string) => void;
}

const CarsContext = createContext<CarsContextType | undefined>(undefined);

export const useCars = () => {
  const context = useContext(CarsContext);
  if (!context) {
    throw new Error('useCars must be used within a CarsProvider');
  }
  return context;
};

interface CarsProviderProps {
  children: ReactNode;
}

export const CarsProvider = ({ children }: CarsProviderProps) => {
  const [cars, setCars] = useState<Car[]>(() => {
    // Tenta carregar do localStorage primeiro
    const savedCars = localStorage.getItem('cars');
    if (savedCars) {
      return JSON.parse(savedCars);
    }
    
    // Se não há dados salvos, usa os dados iniciais
    return [
      {
        id: "cronos-001",
        name: "FIAT CRONOS DRIVE 1.3 AUT - VL",
        images: ["/lovable-uploads/077e6481-a56d-46f2-b645-29cebea4d71a.png"],
        category: "Econômico",
        passengers: 5,
        transmission: "Automático",
        fuel: "Flex",
        dailyPrice: 145,
        status: "available" as const
      },
      {
        id: "onix-sedan-001",
        name: "CHEVROLET ONIX SEDAN PREMIER AT - VL",
        images: ["/lovable-uploads/132662ce-d8a3-401d-b356-e657d617f7ed.png"],
        category: "Compacto",
        passengers: 5,
        transmission: "Automático",
        fuel: "Flex",
        dailyPrice: 160,
        status: "available" as const
      },
      {
        id: "strada-cd-001",
        name: "FIAT STRADA FREEDOM CD - VL",
        images: ["/lovable-uploads/7f822c8b-80a4-4ec0-a34a-e3a33d7ade01.png"],
        category: "Pickup",
        passengers: 5,
        transmission: "Manual",
        fuel: "Flex",
        dailyPrice: 180,
        status: "available" as const
      },
      {
        id: "montana-001",
        name: "CHEVROLET MONTANA LTZ 1.2 TURBO AUT",
        images: ["/lovable-uploads/75717a4b-8d0a-4734-8ec8-4d4b60c3660d.png"],
        category: "Pickup",
        passengers: 5,
        transmission: "Automático",
        fuel: "Flex",
        dailyPrice: 195,
        status: "available" as const
      },
      {
        id: "virtus-001",
        name: "VOLKSWAGEN VIRTUS TSI AUT",
        images: ["/lovable-uploads/377a4e9d-1a5b-4b35-b114-6e80af608e36.png"],
        category: "Intermediário",
        passengers: 5,
        transmission: "Automático",
        fuel: "Flex",
        dailyPrice: 175,
        status: "rented" as const
      },
      {
        id: "argo-001",
        name: "FIAT ARGO DRIVE COM KIT",
        images: ["/lovable-uploads/0f6022ae-3fd3-4461-b84f-f888ecfd47b8.png"],
        category: "Compacto",
        passengers: 5,
        transmission: "Manual",
        fuel: "Flex",
        dailyPrice: 125,
        status: "available" as const
      },
      {
        id: "strada-cs-001",
        name: "FIAT STRADA FREEDOM CS 1.3 ZERO KM",
        images: ["/lovable-uploads/42100d53-07cf-4556-a1df-362f273f5056.png"],
        category: "Pickup",
        passengers: 2,
        transmission: "Manual",
        fuel: "Flex",
        dailyPrice: 165,
        status: "available" as const
      },
      {
        id: "cronos-002",
        name: "FIAT CRONOS DRIVE 1.3 AUT - VL",
        images: ["/lovable-uploads/077e6481-a56d-46f2-b645-29cebea4d71a.png"],
        category: "Econômico",
        passengers: 5,
        transmission: "Automático",
        fuel: "Flex",
        dailyPrice: 145,
        status: "available" as const
      },
      {
        id: "hb20s-001",
        name: "HYUNDAI HB20S10TA EVOLUT",
        images: ["/lovable-uploads/377a4e9d-1a5b-4b35-b114-6e80af608e36.png"],
        category: "Compacto",
        passengers: 5,
        transmission: "Automático",
        fuel: "Flex",
        dailyPrice: 155,
        status: "available" as const
      },
      {
        id: "onix-lt-001",
        name: "CHEVROLET ONIX LT2",
        images: ["/lovable-uploads/132662ce-d8a3-401d-b356-e657d617f7ed.png"],
        category: "Econômico",
        passengers: 5,
        transmission: "Manual",
        fuel: "Flex",
        dailyPrice: 130,
        status: "available" as const
      }
    ];
  });

  // Salva no localStorage sempre que cars mudar
  useEffect(() => {
    localStorage.setItem('cars', JSON.stringify(cars));
  }, [cars]);

  const addCar = (car: Car) => {
    setCars(prev => [...prev, car]);
  };

  const updateCar = (id: string, updates: Partial<Car>) => {
    setCars(prev => prev.map(car => 
      car.id === id ? { ...car, ...updates } : car
    ));
  };

  const deleteCar = (id: string) => {
    setCars(prev => prev.filter(car => car.id !== id));
  };

  return (
    <CarsContext.Provider value={{ cars, addCar, updateCar, deleteCar }}>
      {children}
    </CarsContext.Provider>
  );
};