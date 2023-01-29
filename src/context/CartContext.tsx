import { createContext, ReactNode, useState } from "react";
import { cards } from "../constants";

interface CartContextType {
  addProductsToCart: (id: string, amount: number) => void;
  productsCart: Order[]
}

export interface Order {
  id: string;
  icon: string;
  tags: string[];
  title: string;
  content: string;
  price: number;
  amount: number;
}


interface CycleContextProviderProps {
  children: ReactNode
}

export const CartContext = createContext({} as CartContextType)

export function CartContextProvider({children}: CycleContextProviderProps) {
  const [productsCart, setProductsCart] = useState<Order[]>([]);

  function addProductsToCart(id: string, amount: number) {

    const order: Order | any = cards.find(item => item.id === id);

    order.amount = amount;

    if(order && !productsCart.includes(order) && amount !== 0) {
      setProductsCart((state) => [...state, order])
    }
  }
  
  console.log(productsCart)
  return (
    <CartContext.Provider value={{addProductsToCart, productsCart}}>
      {children}
    </CartContext.Provider>
  )
}