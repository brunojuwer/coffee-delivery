import styled from "styled-components";

export const CardsWrapper = styled.form`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-row-gap: 45px;
  grid-column-gap: 2px;

  @media (max-width: 1110px) {
    display: flex;
    flex-wrap: wrap;
    gap: 10px
  }

`

export const CardContainer = styled.div`
  background: ${props => props.theme["base-card"]};
  max-width: 16rem;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  border-radius: 5px 40px 5px 40px;

  padding: 1rem;

  img {
    width: 7.5rem;
    height: 7.5rem;
    margin-top: -35px;
  }

  h4 {
    margin-bottom: 1rem;
    font-family: 'Baloo 2', sans-serif;
    font-size: 1.25rem;
    font-weight: bold;

    line-height: 1.3;
    color: ${props => props.theme["base-title"]};
  }

  p {
    line-height: 1.3;
    font-size: 0.875rem;
    color: ${props => props.theme["base-label"]};
    margin-bottom: 1rem;

  }

  div {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    max-width: 13rem;
    width: 100%;

    span strong {
      font-family: 'Baloo 2', sans-serif;
      font-size: 1.7rem;
      font-weight: 800;
    }
  }

`

export const TagContainer = styled.span`
  display: flex;
  gap: 10px;

  span {
    padding: 0.2rem 0.4rem;
    margin: 1rem 0;
    max-width: 5.0625rem;
    width: 100%;
    white-space: nowrap;
    font-size: 0.625rem;
    font-weight: bold;
    line-height: 1.3;
    text-align: center;
    background: ${props => props.theme["yellow-light"]};
    color: ${props => props.theme["yellow-dark"]};
    border-radius: 15px;
  }

`
export const AmountContainer = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2.5rem;
`

export const ButtonAddCart = styled.button`
  height: 100%;
  border: unset;
  margin-left: 8px;
  padding: 0.5rem;
  border-radius: 8px;
  background: ${props => props.theme["purple-dark"]};
  cursor: pointer;

  :hover {
    background: ${props => props.theme["purple"]};
  }
`