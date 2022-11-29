import styled from "styled-components";

export const CheckoutContainer = styled.form`
  max-width: 72rem;
  margin: 0 auto;
  width: 100%;
`

export const FormContainer = styled.div`
  margin-top: 8rem;
  display: flex;
  justify-content: space-between;
`

export const Title = styled.h3`
  font-family: 'Baloo 2', sans-serif;
  color: ${props => props.theme["base-title"]};
  font-size: 1.125rem;

`

const BaseSection = styled.section`
  background: ${props => props.theme["base-card"]};
    padding: 2.5rem;
    margin-top: 1rem;
    border-radius: 10px;
    max-width: 40rem;
    width: 100%;

    div:first-child {
      display: grid;
      grid-template-columns: 6% 90%;

      i {
        color: ${props => props.theme["yellow-dark"]};
      }

      h4 {
        display: block;
        font-weight: 400;
        color: ${props => props.theme["base-subtitle"]};
      }
      
      p {
        font-size: 0.857rem;
        color: ${props => props.theme["base-text"]};
      }
    }
`

export const InputSection = styled(BaseSection)`

`

export const InputContainer = styled.div`
  display: grid;
  margin-top: 2rem;
  gap: 1rem;
  grid-template-columns: auto auto auto auto;
  
  #cep {
    grid-column-start: 1;
    grid-column-end: 2;
  }
  
  #rua {
    grid-column-start: 1;
    grid-column-end: 5;
  }

  #numero {
    grid-column-start: 1;
    grid-column-end: 2;
  }

  #complemento {
    grid-column-start: 2;
    grid-column-end: 5;
  }

  #bairro {
    grid-column-start: 1;
    grid-column-end: 2;
  }

  #cidade {
    grid-column-start: 2;
    grid-column-end: 4;
  }

  #uf {
    align-self: end;
    width: 3.75rem;
  }

  input {
    border: solid 1px ${props => props.theme["base-hover"]};
    border-radius: 5px;
    background: ${props => props.theme["base-input"]};
    padding: 0.5rem;
    height: 2.625rem;
    
    &::placeholder {
      font-size: 0.875rem;
    }

    &:hover{
      border: 1px solid ${props => props.theme["yellow-dark"]};
    }
  }
  
`

export const PaymentForm = styled(BaseSection)`
  
  div:first-child {
    i {
      color: ${props => props.theme["purple"]};
    }
  }
`

export const PaymentSelector = styled.div`
  margin-top: 1rem;
  margin-bottom: 1rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;

  label {
    border: none;
    background: ${props => props.theme["base-button"]};
    padding: 1rem;
    font-size: 0.75rem;
    color: ${props => props.theme["base-text"]};
    border-radius: 5px;
    border: 1px solid transparent;
    cursor: pointer;

    display: flex;
    white-space: nowrap;
    align-items: center;
    gap: 10px;

    &:hover {
      background: ${props => props.theme["base-hover"]};
    }

    i {
      color: ${props => props.theme.purple};
    }

    input[type="radio"] {
      display:none;
    }
}
    
  label:has(input:checked)  {
      border: solid 1px ${props => props.theme.purple};
      background: ${props => props.theme["purple-light"]};
  }

`
