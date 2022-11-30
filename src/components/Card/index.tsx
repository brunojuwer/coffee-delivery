import { CardContainer, CardsWrapper, TagContainer, AmountContainer } from "./styles";
import { cards }  from '../../constants/'
import { ShoppingCartSimple } from "phosphor-react";
import { Counter } from "../Buttons/Counter";

export function Card() {

  return (
    <CardsWrapper>
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
              <Counter />
              <div>
                <ShoppingCartSimple size={22} weight="fill" color="#FFF"/>
              </div>
            </AmountContainer>
          </div> 
        </CardContainer>
      ))}
    </CardsWrapper>
  )
}