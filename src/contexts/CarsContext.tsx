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
    const saved = localStorage.getItem('cars');
    if (saved) {
      const parsedCars = JSON.parse(saved);
      return parsedCars.length > 0 ? parsedCars : getDefaultCars();
    }
    return getDefaultCars();
  });

  const getDefaultCars = (): Car[] => [
    {
      id: "default-1",
      name: "Chevrolet Onix",
      image: "https://images.unsplash.com/photo-1549399290-8121fd9f9c80?w=400&h=300&fit=crop",
      category: "Econômico",
      passengers: 5,
      transmission: "Manual",
      fuel: "Flex",
      dailyPrice: 89,
      status: 'available'
    },
    {
      id: "default-2", 
      name: "Volkswagen Polo",
      image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=400&h=300&fit=crop",
      category: "Compacto",
      passengers: 5,
      transmission: "Automático",
      fuel: "Flex",
      dailyPrice: 120,
      status: 'available'
    },
    {
      id: "default-3",
      name: "Toyota Corolla",
      image: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=400&h=300&fit=crop",
      category: "Intermediário", 
      passengers: 5,
      transmission: "Automático",
      fuel: "Flex",
      dailyPrice: 150,
      status: 'available'
    }
  ];

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