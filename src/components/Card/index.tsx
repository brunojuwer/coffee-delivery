import { CardContainer, CardsWrapper, TagContainer, AmountContainer } from "./styles";
import { cards }  from '../../constants/'
import { Minus, Plus, ShoppingCartSimple } from "phosphor-react";

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
              <div>
                <button><Minus size={16} weight="bold" /></button>
                <span>1</span>
                <button><Plus size={16} weight="bold" /></button>
              </div>
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