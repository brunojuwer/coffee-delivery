import { createContext, ReactNode, useState } from "react";

interface CartContextType {
  addProductsToCart: (id: string, amount: number) => void;
}

export interface Order {
  id: string,
  amount: number
}


interface CycleContextProviderProps {
  children: ReactNode
}

export const CartContext = createContext({} as CartContextType)

export function CartContextProvider({children}: CycleContextProviderProps) {
  const [productsCart, setProductsCart] = useState<Order[]>([]);

  function addProductsToCart(id: string, amount: number) {
    const product: Order = {
       id,
       amount
    }

    setProductsCart((state) => [...state, product])
  }
  
  console.log(productsCart)
  return (
    <CartContext.Provider value={{addProductsToCart}}>
      {children}
    </CartContext.Provider>
  )
}