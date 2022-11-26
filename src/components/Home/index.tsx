import { Card } from "../Card";
import { Hero } from "../Hero";
import { CoffeesSection } from "./styles";


export function Home() {
  return (
    <>
      <Hero />

      <h2>Nossos cafés</h2>
      
      <CoffeesSection>
        <Card />
      </CoffeesSection>
    </>
  )
}