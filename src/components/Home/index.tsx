import { Card } from "../Card";
import { Hero } from "../Hero";
import { CoffeesSection, HomeContainer } from "./styles";


export function Home() {
  return (
    <HomeContainer>
      <Hero />

      <h2>Nossos cafés</h2>
      
      <CoffeesSection>
        <Card />
      </CoffeesSection>
    </HomeContainer>
  )
}