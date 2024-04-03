import React, {
  useState,
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
} from "react";

interface BagItemType {
  category: string;
  id: number;
  foodName: string;
  price: number;
  imagePath: string;
  ingredients: string[];
  stock: number;
  sale: number;
  count: number;
}

interface BagPropsContextType {
  bagItem: BagItemType[];
  setBagItem: Dispatch<SetStateAction<BagItemType[]>>;
}

const BagItemContext = createContext<BagPropsContextType>({
  bagItem: [],
  setBagItem: () => {},
});

const useBag = () => {
  return useContext(BagItemContext);
};

const BagItemContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [bagItem, setBagItem] = useState<BagItemType[]>([]);
  console.log("in contextL")

  return (
    <BagItemContext.Provider value={{ bagItem, setBagItem }}>
      {children}
    </BagItemContext.Provider>
  );
};

export { BagItemContext, BagItemContextProvider, useBag };
