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
        image: "/lovable-uploads/132662ce-d8a3-401d-b356-e657d617f7ed.png",
        category: "Econômico",
        passengers: 5,
        transmission: "Automático",
        fuel: "Flex",
        dailyPrice: 150,
        status: "rented" as const
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