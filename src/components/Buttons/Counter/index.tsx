import { Minus, Plus } from "phosphor-react";
import { useContext, useEffect } from "react";
import { CounterContainer } from "./styles";
import { CartContext } from "../../../context/CartContext";


export function Counter() {
  const {changeAmountOfCoffees, coffees} = useContext(CartContext)

 
  console.log(coffees)

  return (
    <CounterContainer>
      <button >
        <Minus 
          size={16} 
          weight="bold" 
          onClick={() => changeAmountOfCoffees('DECREASE')}
        />
      </button>
      <span>{}</span>
      <button >
        <Plus 
          size={16} 
          weight="bold" 
          onClick={() => changeAmountOfCoffees('INCREASE')}
        />
      </button>
    </CounterContainer>
  )
}