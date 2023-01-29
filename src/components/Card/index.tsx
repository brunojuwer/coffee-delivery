import { FormEvent } from "react";
import { cards } from '../../constants/';
import { Counter } from "../Buttons/Counter";
import { AmountContainer, CardContainer, CardsWrapper, TagContainer } from "./styles";


export function Card() {


  function preventFormReload(event: FormEvent) {
    event.preventDefault();
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
              <Counter 
                id={card.id} 
                isCheckoutPage={false}
                />
            </AmountContainer>
          </div> 
        </CardContainer>
      ))}
    </CardsWrapper>
  )
}