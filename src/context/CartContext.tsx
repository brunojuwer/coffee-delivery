import { createContext, ReactNode, useState } from "react";
import { cards } from '../constants/';

interface CartContextType {
  addProductsToCart: (id: string) => void;
}

export interface Order {
  id: string,
  name?: string,
  price?: number,
  amount?: number
}


interface CycleContextProviderProps {
  children: ReactNode
}

export const CartContext = createContext({} as CartContextType)

export function CartContextProvider({children}: CycleContextProviderProps) {
  const productsCart = useState<Order[]>([]);

  function addProductsToCart(id: string) {
      const card = cards.find(card=> card.id === id);
    
    console.log(card)
    const copyProdutcsCart = [...productsCart];

  }

  return (
    <CartContext.Provider value={{addProductsToCart}}>
      {children}
    </CartContext.Provider>
  )
}