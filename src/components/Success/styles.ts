import styled, { css } from "styled-components";


export const SuccessContainer = styled.section`
  max-width: 72rem;
  margin: 0 auto;
  width: 100%;
  margin-top: 10rem;

  display: flex;
  justify-content: space-between;

  div.information-container {

    h2 {
      font-family: 'Baloo 2', sans-serif;
      color: ${props => props.theme["yellow-dark"]};
      font-weight: 800;
      font-size: 2rem;
    }

    p {
      color: ${props => props.theme["base-subtitle"]};
      font-size: 1.124rem;
    }
  }

`

export const BorderDiv = styled.div`
  margin-top: 3rem;
  border-radius: 8px 40px 8px 40px;
  max-width: 32.9rem;
  width: 100%;
  background: rgb(219,172,44);
  background: linear-gradient(90deg, rgba(219,172,44,1) 0%, rgba(128,71,248,1) 100%);
  padding: 1px;
`

export const OrderStatus = styled.div`
  border-radius: 7px 38px 7px 38px;
  padding: 2rem;
  max-width: 32.9rem;
  width: 100%;
  background: ${props => props.theme.background};
  display: flex;
  flex-direction: column;
  gap: 2rem;

  div {
    width: 100%;
    max-width: 354px;
    font-size: 0.875rem;
    display: flex;
    gap: 20px;

    span {
      font-size: 0.875rem;
      line-height: 1.4;
    }
  }
`

const iconVariants = {
  'money': '#C47F17',
  'map': '#8047F8',
  'timer': '#DBAC2C'
} as const

type ColorVariants = keyof typeof iconVariants

interface IconContainerProps {
  variant: ColorVariants 
}

export const IconWrapper = styled.i<IconContainerProps>`
  width: 32px;
  height: 32px;
  ${props => css`background-color: ${iconVariants[props.variant]}`};
  padding: 0.5rem;
  border-radius: 50%;

  display: flex;
  align-items: center;
    
`