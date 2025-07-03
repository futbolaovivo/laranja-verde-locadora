import { createContext, useContext, useState, useEffect, ReactNode } from "react";

export interface Car {
  id: string;
  name: string;
  image: string;
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
    // Limpa localStorage na inicialização para evitar duplicação
    localStorage.removeItem('cars');
    return [
      {
        id: "cronos-001",
        name: "CRONOS DRIVE 1.3 AUT",
        image: "/lovable-uploads/077e6481-a56d-46f2-b645-29cebea4d71a.png",
        category: "Econômico",
        passengers: 5,
        transmission: "Automático",
        fuel: "Flex",
        dailyPrice: 150,
        status: "available" as const
      },
      {
        id: "onix-001",
        name: "CHEVROLET ONIX 1.0 TURBO",
        image: "/lovable-uploads/132662ce-d8a3-401d-b356-e657d617f7ed.png",
        category: "Compacto",
        passengers: 5,
        transmission: "Manual",
        fuel: "Flex",
        dailyPrice: 120,
        status: "available" as const
      },
      {
        id: "virtus-001",
        name: "VOLKSWAGEN VIRTUS 1.6 MSI",
        image: "/src/assets/virtus-black.jpg",
        category: "Intermediário",
        passengers: 5,
        transmission: "Manual",
        fuel: "Flex",
        dailyPrice: 180,
        status: "available" as const
      },
      {
        id: "compass-001",
        name: "JEEP COMPASS 2.0 DIESEL",
        image: "/lovable-uploads/75717a4b-8d0a-4734-8ec8-4d4b60c3660d.png",
        category: "SUV",
        passengers: 5,
        transmission: "Automático",
        fuel: "Diesel",
        dailyPrice: 320,
        status: "available" as const
      },
      {
        id: "s10-001",
        name: "CHEVROLET S10 2.8 DIESEL",
        image: "/lovable-uploads/7f822c8b-80a4-4ec0-a34a-e3a33d7ade01.png",
        category: "Pickup",
        passengers: 5,
        transmission: "Manual",
        fuel: "Diesel",
        dailyPrice: 280,
        status: "rented" as const
      },
      {
        id: "tracker-001",
        name: "CHEVROLET TRACKER 1.0 TURBO",
        image: "/lovable-uploads/0f6022ae-3fd3-4461-b84f-f888ecfd47b8.png",
        category: "SUV Compacto",
        passengers: 5,
        transmission: "Automático",
        fuel: "Flex",
        dailyPrice: 220,
        status: "available" as const
      },
      {
        id: "corolla-001",
        name: "TOYOTA COROLLA 2.0 HYBRID",
        image: "/lovable-uploads/42100d53-07cf-4556-a1df-362f273f5056.png",
        category: "Intermediário",
        passengers: 5,
        transmission: "CVT",
        fuel: "Híbrido",
        dailyPrice: 250,
        status: "available" as const
      },
      {
        id: "hilux-001",
        name: "TOYOTA HILUX 2.8 DIESEL 4X4",
        image: "/lovable-uploads/377a4e9d-1a5b-4b35-b114-6e80af608e36.png",
        category: "Pickup",
        passengers: 5,
        transmission: "Automático",
        fuel: "Diesel",
        dailyPrice: 380,
        status: "available" as const
      }
    ];
  });

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