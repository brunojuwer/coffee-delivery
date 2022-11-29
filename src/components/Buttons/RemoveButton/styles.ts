import styled from "styled-components";

export const ButtonContainer = styled.button`
  height: 2rem;
  background: ${props => props.theme["base-button"]};
  color: ${props => props.theme["base-text"]};
  border: none;
  padding: 0 0.3rem;
  font-size: 0.875rem;
  display: flex;
  align-items: center;
  border-radius: 8px;
  justify-content: space-around;
  gap: 5px;
  cursor: pointer;

  i {
    display: flex;
    align-items: center;
    color: ${props => props.theme["purple"]};
  }

  &:hover {
    background: ${props => props.theme["base-hover"]};
  }
`