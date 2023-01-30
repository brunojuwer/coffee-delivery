import { createContext, ReactNode, useState } from "react";
import { cards } from "../constants";
import { OrderFormData } from "../components/Checkout";
import { useNavigate } from "react-router-dom";


interface CartContextType {
  handleNewOrder: (data: OrderFormData) => void;
  changeState: (newState: Order[]) => void;
  handleRemoveProduct: (id: string) => void;
  addProductsToCart: (id: string, amount: number) => void;
  productsCart: Order[];
  orderInformation: OrderFormData;
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


interface ContextProviderProps {
  children: ReactNode
}

export const CartContext = createContext({} as CartContextType)

export function CartContextProvider({children}: ContextProviderProps) {
  const [productsCart, setProductsCart] = useState<Order[]>([]);
  const [orderInformation, setOrderInformation] = useState<OrderFormData>({} as OrderFormData)
  const navigate = useNavigate()

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
  
  function handleNewOrder(data: OrderFormData){
    setOrderInformation(data)
    setProductsCart([])
    navigate("/success")
  }

  return (
    <CartContext.Provider 
      value={{
        addProductsToCart, 
        productsCart, 
        handleRemoveProduct, 
        changeState,
        handleNewOrder,
        orderInformation
      }}>
      {children}
    </CartContext.Provider>
  )
}