import { AdvantagesContainer, SectionContainer, TextContainer, IconWrapper, ImageContainer } from "./styles";
import coffeCup from '../../assets/CoffeCup.svg'
import { ShoppingCart, Timer, Package, Coffee } from 'phosphor-react'

export function Hero() {
  return (
    <SectionContainer>
      <TextContainer>
        <h1>Encontre o café perfeito <br /> para qualquer hora do dia</h1>
        <h4>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</h4>

        <AdvantagesContainer>
          <div>
            <IconWrapper variant="cart">
              <ShoppingCart size={16} weight="fill"/>
            </IconWrapper>
            <p>Compra simples e segura</p>
          </div>
          <div>
            <IconWrapper variant="pack">
              <Package size={16} weight="fill" />
            </IconWrapper>
            <p>Embalagem mantém o café intacto</p>
          </div>
          <div>
            <IconWrapper variant="timer">
              <Timer size={16} weight="fill"/>
            </IconWrapper>
            <p>Entrega rápida e rastreada</p>
          </div>
          <div>
            <IconWrapper variant="coffee">
            <Coffee size={16} weight="fill" />
            </IconWrapper>
            <p>O café chega fresquinho até você</p>
          </div>
        </AdvantagesContainer>
      </TextContainer>

      <ImageContainer>
        <img src={coffeCup} alt="Copo de café com grãos de café em seu entorno" />
      </ImageContainer>
    </SectionContainer>
  )
}