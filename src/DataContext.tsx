import { createContext, useEffect, useState } from "react";

interface DataContextValue {
  cartItems: Item[];
  removeItem: (newItem: Item) => void;
  total: number;
  singleAddCard: (newItem: Item) => void;
}

export interface Item {
  _id: number;
  images: string[];
  category: string;
  name: string;
  price: number;
  size: string[];
  desc: string;
  quantity: number;
}

const DataContext = createContext<DataContextValue | null>(null);

export const DataProvider = ({ children }: { children: React.ReactNode }) => {
  const [cartItems, setCartItems] = useState<Item[]>([]);
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
  const removeItem = (newItem: Item) => {
    const removedArray = cartItems.filter((item) => {
      const idMatch = item._id === newItem._id;
      const sizesMatch = item.size.every(
        (size, index) => size === newItem.size[index]
      );
      const imgMatch = item.images.every(
        (img, index) => img === newItem.images[index]
      );

      return !(idMatch && sizesMatch && imgMatch);
    });

    setCartItems(removedArray);
  };

  // Add to card

  const singleAddCard = (newItem: Item) => {
    const existingItem = cartItems.find(
      (item) =>
        item._id === newItem._id &&
        item.size.every((size, index) => size === newItem.size[index]) &&
        item.images.every((img, index) => img === newItem.images[index])
    );

    if (existingItem) {
      setCartItems((prevCartItems) =>
        prevCartItems.map((item) =>
          item._id === newItem._id &&
          item.size.every((size, index) => size === newItem.size[index]) &&
          item.images.every((img, index) => img === newItem.images[index])
            ? { ...item, quantity: item.quantity + newItem.quantity }
            : item
        )
      );
    } else {
      setCartItems((prevCartItems) => [...prevCartItems, newItem]);
    }
  };

  const contextValue: DataContextValue = {
    cartItems,
    removeItem,
    total,
    singleAddCard,
  };

  return (
    <DataContext.Provider value={contextValue}>{children}</DataContext.Provider>
  );
};

export default DataContext;
