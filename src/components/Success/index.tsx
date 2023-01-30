import { BorderDiv, IconWrapper, OrderStatus, SuccessContainer } from "./styles";
import entrega from '../../assets/entrega.svg'
import { CurrencyDollar, MapPin, Timer } from "phosphor-react";

export function Success() {
  return (
    <SuccessContainer>
      <div className="information-container">
        <h2>Uhu! Pedido confirmado</h2>
        <p>Agora é só aguardar que logo o café chegará até você</p>
        <BorderDiv>
          <OrderStatus>
            <div>
              <IconWrapper variant="map">
                <MapPin size={16} weight="fill" color="#FFF"/>
              </IconWrapper>
              <span>
                Entrega em <strong>Rua João Daniel Martinelli, 102 </strong>
                Farrapos - Porto Alegre, RS
              </span>
            </div>
            <div>
              <IconWrapper variant="timer">
                <Timer size={16} weight="fill" color="#FFF"/>
              </IconWrapper>
              <span>
                Previsão de entrega <br />
                <strong>20 min - 30 min</strong>
              </span>
            </div>
            <div>
              <IconWrapper variant="money">
                <CurrencyDollar size={16} color="#FFF"/>
              </IconWrapper>
              <span>
                Pagamento na Entrega <br />
                <strong>Cartão de crédito</strong>
              </span>
            </div>
          </OrderStatus>
        </BorderDiv>
      </div>

        <div>
          <img src={entrega} alt="Motoboy levando entrega" />
        </div>
    </SuccessContainer>
  )
}