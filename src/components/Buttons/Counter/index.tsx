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
  const {addProductsToCart, productsCart, changeState} = useContext(CartContext);


  function handleAddToCart(amount: number, id: string) {
    addProductsToCart(id, amount);
  }

  function changeInCheckOutPage(id: string, action: string) {
      if(isCheckoutPage) {
        const copyProductsCart = [...productsCart];
        copyProductsCart.forEach(product => {
          if(product.id === id) {
            action ? product.amount = cardAmount + 1 : product.amount = cardAmount - 1
          }
        })
        changeState(copyProductsCart)
      }
  }

  function changeAmountOfCoffees(action: string,) {
    switch (action) {
      case 'INCREASE':
        setCardAmount(cardAmount => cardAmount + 1)
        changeInCheckOutPage(id, 'INCREASE')
        break;
      case 'DECREASE':
        if(cardAmount !== 1){
          setCardAmount(cardAmount => cardAmount - 1)
          changeInCheckOutPage(id, "")
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