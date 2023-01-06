import { createContext, ReactNode, useEffect, useState } from "react";
import { cards } from '../constants'

interface CartContextType {
  coffees: Coffee[]
  changeAmountOfCoffees: (action: string) => void
  handleAmounOfCoffees: () => void
}

export interface Coffee {
  id: string,
  icon: string,
  title: string,
  tags: string[]
  content:string,
  price: number,
  amount: number
}

interface CartProducts {
  cart: Coffee[]
}

interface CycleContextProviderProps {
  children: ReactNode
}

export const CartContext = createContext({} as CartContextType)

export function CartContextProvider({children}: CycleContextProviderProps) {
  const [coffees, setCoffees] = useState<Coffee[]>([])  

  useEffect(() => {
    setCoffees(cards)
  }, [])

  function handleAmounOfCoffees() {
  }

  function changeAmountOfCoffees(action: string) {
    switch (action) {
      case 'INCREASE':
        // setCoffees()
        break;
      case 'DECREASE':
        // setCoffees(state => state - 1)
        break;
      default:
        break;
    }
  }

  return (
    <CartContext.Provider value={{coffees, changeAmountOfCoffees, handleAmounOfCoffees}}>
      {children}
    </CartContext.Provider>
  )
}