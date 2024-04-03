import React, {
  useState,
  createContext,
  Dispatch,
  SetStateAction,
  useEffect,
  useContext,
} from "react";

interface FoodType {
  category: string;
  id: number;
  foodName: string;
  price: number;
  imagePath: string;
  ingredients: string[];
  stock: number;
  sale: number;
}

interface FoodPropsContextType {
  allFood: FoodType[];
  setAllFood: Dispatch<SetStateAction<FoodType[]>>;
}

const foodContext = createContext<FoodPropsContextType>({
  allFood: [],
  setAllFood: () => {},
});

const useFood = () => {
  return useContext(foodContext);
};

const FoodContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [allFood, setAllFood] = useState<FoodType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("./dummyData.json");
        const data = await response.json();
        setAllFood(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <foodContext.Provider value={{ allFood, setAllFood }}>
      {children}
    </foodContext.Provider>
  );
};

export { foodContext, FoodContextProvider, useFood };
