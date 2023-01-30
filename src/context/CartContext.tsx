import { createContext, ReactNode, useState } from "react";
import { cards } from "../constants";

interface CartContextType {
  changeState: (newState: Order[]) => void;
  handleRemoveProduct: (id: string) => void;
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

  function changeState(newState: Order[]) {
    setProductsCart(newState)
  }

  function handleRemoveProduct(id: string) {
    const productsCartFiltered = productsCart.filter(product => product.id !== id);
    setProductsCart(productsCartFiltered);
  }
  
  return (
    <CartContext.Provider value={{addProductsToCart, productsCart, handleRemoveProduct, changeState}}>
      {children}
    </CartContext.Provider>
  )
}