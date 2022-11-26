import { CardContainer } from "./styles";
import { cards }  from '../../constants/'

export function Card() {
  return (
    <CardContainer>
      {cards.map(card => (
        <div key={card.id}>
          <img src={card.icon} alt="coffee cup" />
          {card.tags.map(tag => <span>{tag}</span>)}
          <h4>{card.title}</h4>
          <p>{card.content}</p>
          <div>R$ <strong>{card.price}</strong></div> 
        </div>
      ))}
    </CardContainer>
  )
}