import { Minus, Plus } from "phosphor-react";
import { CounterContainer } from "./styles";
import { useState } from "react";

export function Counter() {
  const [amount, setAmount] = useState(1)  

  
  return (
    <CounterContainer>
      <button onClick={() => setAmount(state => state - 1)}>
        <Minus size={16} weight="bold" />
      </button>
      <span>{amount}</span>
      <button onClick={() => setAmount(state => state + 1)}>
        <Plus size={16} weight="bold" />
      </button>
    </CounterContainer>
  )
}