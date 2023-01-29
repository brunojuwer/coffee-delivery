import { Minus, Plus, ShoppingCartSimple } from "phosphor-react";
import { useContext, useState } from "react";
import { CartContext } from "../../../context/CartContext";
import { CounterContainer, ButtonAddCart } from "./styles";

interface CardId {
  id: string
}

export function Counter({id}: CardId) {

  const [cardAmount, setCardAmount] = useState(0);
  const {addProductsToCart} = useContext(CartContext);


  function handleAddToCart(id: string) {
    addProductsToCart(id);
  }

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
    <>
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
        </span>
        <button >
          <Plus 
            size={16} 
            weight="bold" 
            onClick={() => changeAmountOfCoffees("INCREASE")}
          />
        </button>
        </CounterContainer>
                
        <ButtonAddCart
          type="button"
          onClick={() => handleAddToCart(id)}
        >
          <ShoppingCartSimple size={22} weight="fill" color="#FFF"/>
        </ButtonAddCart>

    </>
  )
}