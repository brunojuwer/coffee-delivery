import styled, { css } from "styled-components";


export const SectionContainer = styled.section`
  display: grid;
  grid-template-columns: 50% 50%;
  gap: 20px;

  background: ${props => props.theme.background};

  max-width: 72rem;
  margin: 0 auto;
  width: 100%;
  margin-top: 9rem;
`

export const TextContainer = styled.div`
  h1 {
    font-family: 'Baloo 2', sans-serif;
    font-weight: 800;
    font-size: 3rem;

    line-height: 1.3;

    color: ${props => props.theme["base-title"]};
  }

  h4 {
    color: ${props => props.theme["base-subtitle"]};
    font-size: 1.25rem;
    font-weight: 400;
    margin-top: 1rem;
  }
`

export const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const AdvantagesContainer = styled.div`
  display: grid;
  grid-template-columns: 40% 60%;
  margin-top: 5rem;
  gap: 25px;

  div {
    display: flex;
    gap: 10px;
    align-items: center;
  }
`

const spanVariants = {
  'cart': '#C47F17',
  'coffee': '#4B2995',
  'pack': '#574F4D',
  'timer': '#DBAC2C'
} as const

type ColorVariants = keyof typeof spanVariants

interface SpanContainerProps {
  variant: ColorVariants 
}


export const IconWrapper = styled.span<SpanContainerProps>`
  height: 32px;
  width: 32px;
  border-radius: 50%;
  ${props => css`background-color: ${spanVariants[props.variant]}`};

  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.theme.white};
`
