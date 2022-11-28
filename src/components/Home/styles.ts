import styled from "styled-components";


export const HomeContainer = styled.main`
  max-width: 72rem;
  margin: 0 auto;
  width: 100%;

  h2 {
    font-family:'Baloo 2', sans-serif;
    font-weight: 800;
    color: ${props => props.theme["base-title"]};
    margin-top: 3.4rem;
    font-size: 1.9rem;
  }
`

export const CoffeesSection = styled.section`
  margin-top: 4rem;
`
