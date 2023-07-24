import { array } from "../src/components/products/Products";
import { createContext, useEffect, useState } from "react";

interface DataContextValue {
  handleClick: (id: number) => void;
  cartItems: CartItem[];
  removeItem: (id: number) => void;
  singleProduct: (id: number) => void;
  total: number;
  singleProductUse: CartItem | null;
}

export interface CartItem {
  id: number;
  img: string[];
  category: string;
  cname: string;
  name: string;
  price: number;
  quantity: number;
  sizes: string[];
  des: string;
}

const DataContext = createContext<DataContextValue | null>(null);

export const DataProvider = ({ children }: { children: React.ReactNode }) => {
  // Cart Section
  // Add to cart and increase quantity
  const [cartItems, setCartItems] = useState<CartItem[]>(array);
  const handleClick = (id: number): void => {
    const existingItem = cartItems.find((item) => item.id === id);
    if (existingItem) {
      // increase quantity
      setCartItems((prevCartItems) =>
        prevCartItems.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      // Add to card
      const filteredProducts = array.filter((item) => item.id === id);
      setCartItems((prevCartItems) => [...prevCartItems, ...filteredProducts]);
    }
  };
  //Total card
  const [total, setTotal] = useState(0);
  useEffect(() => {
    const newTotal = cartItems.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    setTotal(newTotal);
  }, [cartItems]);
  // RemoveFrom card
  const removeItem = (id: number) => {
    const removedArray = cartItems.filter((cartItem) => cartItem.id !== id);
    setCartItems(removedArray);
  };
  // Cart section end

  // Single product
  const [singleProductUse, setSingleProductUse] = useState<CartItem | null>(
    null
  );
  const singleProduct = (id: number) => {
    const singleReady = cartItems.filter((cartItem) => cartItem.id === id);
    setSingleProductUse(singleReady[0]);
  };

  const contextValue: DataContextValue = {
    handleClick,
    cartItems,
    removeItem,
    singleProduct,
    singleProductUse,
    total,
  };

  return (
    <DataContext.Provider value={contextValue}>{children}</DataContext.Provider>
  );
};

export default DataContext;
