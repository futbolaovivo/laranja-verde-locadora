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
    const savedCars = localStorage.getItem('cars');
    return savedCars ? JSON.parse(savedCars) : [];
  });

  useEffect(() => {
    console.log('Salvando carros no localStorage:', cars);
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