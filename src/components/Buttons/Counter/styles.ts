import styled from "styled-components";

export const CounterContainer = styled.div`
    height: 2rem;
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
      font-size: 1.25rem;

      :hover {
        color: ${props => props.theme["purple"]};
      }
    }
`