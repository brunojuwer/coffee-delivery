import { Minus, Plus } from "phosphor-react";
import { useState } from "react";
import { CounterContainer } from "./styles";

interface CardId {
  id: string
}

export function Counter({id}: CardId) {

  const [cardAmount, setCardAmount] = useState(0);

  function changeAmountOfCoffees(action: string,) {
    switch (action) {
      case 'INCREASE':
        setCardAmount(cardAmount => cardAmount + 1)
        break;
      case 'DECREASE':
        if(cardAmount !== 0){
          setCardAmount(cardAmount => cardAmount - 1)
        }
        break;
      default:
        break;
    }
  }

  return (
    <CounterContainer>
      <button >
        <Minus 
          size={16} 
          weight="bold" 
          onClick={() => changeAmountOfCoffees("DECREASE")}
          />
          
      </button>
      <span id="amount">
        {cardAmount}
        {id}
      </span>
      <button >
        <Plus 
          size={16} 
          weight="bold" 
          onClick={() => changeAmountOfCoffees("INCREASE")}
        />
      </button>
    </CounterContainer>
  )
}