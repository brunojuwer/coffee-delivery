import { Minus, Plus } from "phosphor-react";
import { useState } from "react";
import { CounterContainer } from "./styles";


export function Counter() {
  const [amount, setAmount] = useState(1)



  return (
    <CounterContainer>
      <button >
        <Minus 
          size={16} 
          weight="bold" 
          onClick={() => setAmount(state => state - 1)}
        />
      </button>
      <span>{amount}</span>
      <button >
        <Plus 
          size={16} 
          weight="bold" 
          onClick={() => setAmount(state => state + 1)}
        />
      </button>
    </CounterContainer>
  )
}