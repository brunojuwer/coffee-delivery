import styled from "styled-components";

export const CounterContainer = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    background: ${props => props.theme["base-button"]};
    padding: 0.5rem;
    border-radius: 8px;
    color: ${props => props.theme["base-title"]};
    
    span {
      display: flex;
      align-items: center;
      font-size: 1rem;
    }
    
    button {
      display: flex;
      align-items: center;
      cursor: pointer;
      border: none;
      color: ${props => props.theme["purple-dark"]};
      background: ${props => props.theme["base-button"]};
      padding: 0 0.2rem;

      :hover {
        color: ${props => props.theme["purple"]};
      }
    }
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