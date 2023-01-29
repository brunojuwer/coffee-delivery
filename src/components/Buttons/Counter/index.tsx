import { Minus, Plus, ShoppingCartSimple } from "phosphor-react";
import { useContext, useState } from "react";
import { CartContext } from "../../../context/CartContext";
import { CounterContainer, ButtonAddCart } from "./styles";

interface CardId {
  id: string
  isCheckoutPage: boolean,
  amountItens?: number
}

export function Counter({id, isCheckoutPage, amountItens = 1}: CardId) {

  const [cardAmount, setCardAmount] = useState(amountItens);
  const {addProductsToCart} = useContext(CartContext);


  function handleAddToCart(amount: number, id: string) {
    addProductsToCart(id, amount);
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
        {
          !isCheckoutPage ? <ButtonAddCart
          type="button"
          onClick={(e) => handleAddToCart(cardAmount, id)}
        >
          <ShoppingCartSimple size={22} weight="fill" color="#FFF"/>
        </ButtonAddCart>
        : null
        }
        

    </>
  )
}