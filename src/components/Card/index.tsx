import { ShoppingCartSimple } from "phosphor-react";
import { FormEvent, useContext } from "react";
import { cards } from '../../constants/';
import { CartContext } from "../../context/CartContext";
import { Counter } from "../Buttons/Counter";
import { AmountContainer, ButtonAddCart, CardContainer, CardsWrapper, TagContainer } from "./styles";


export function Card() {

  const {addProductsToCart} = useContext(CartContext);

  function preventFormReload(event: FormEvent) {
    event.preventDefault();
  }

  function handleAddToCart(id: string) {
    console.log(id)
    addProductsToCart(id);
  }

  return (
    <CardsWrapper onSubmit={(e) => preventFormReload(e)}>
      {cards.map(card => (
        <CardContainer key={card.id}>
          <img src={card.icon} alt="coffee cup" />
          <TagContainer>
            {card.tags.map(tag => <span key={tag}>{tag}</span>)}
            </TagContainer>
          <h4>{card.title}</h4>
          <p>{card.content}</p>
          <div>
            <span>R$ <strong>{card.price.toFixed(2)}</strong></span>
            <AmountContainer>
              <Counter id={card.id}/>
              <ButtonAddCart
                type="button"
                onClick={() => handleAddToCart(card.id)}
              > 
                <ShoppingCartSimple size={22} weight="fill" color="#FFF"/>
              </ButtonAddCart>
            </AmountContainer>
          </div> 
        </CardContainer>
      ))}
    </CardsWrapper>
  )
}