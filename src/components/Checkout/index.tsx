import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money } 
  from "phosphor-react";

import { 
  ButtonsContainer,
  CheckoutContainer, 
  FormContainer, 
  InputContainer, 
  InputSection, 
  PaymentForm, 
  PaymentSelector, 
  SelectedCoffees, 
  SelectedCoffeesSection, 
  Title 
} from "./styles";

import { Counter } from "../Buttons/Counter";
import { RemoveButton } from "../Buttons/RemoveButton";

import americano from '../../assets/coffee/americano.svg'



export function Checkout() {

  return (
    <CheckoutContainer>
      <FormContainer>
          <section>
            <Title>Complete seu pedido</Title>
            <InputSection>
              <div>
                <i><MapPinLine size={22} weight="regular"/></i>
                <h4>Endereço de Entrega</h4>
                <p></p>
                <p>Informe o endereço onde deseja receber o pedido</p>
              </div>
        
              <InputContainer>
                <input id="cep" type="text" placeholder="CEP" />
                <input id="rua" type="text" placeholder="Rua" />
                <input id="numero" type="number" placeholder="Número"/>
                <input id="complemento" type="text" placeholder="Complemento"/>
                <input id="bairro" type="text" placeholder="Bairro"/>
                <input id="cidade" type="text" placeholder="Cidade"/>
                <input id="uf" type="text" placeholder="UF"/>
              </InputContainer>
            </InputSection>

            <PaymentForm>
              <div>
                <i><CurrencyDollar size={22} weight="regular" /></i>
                <h4>Endereço de Entrega</h4>
                <p></p>
                <p>Informe o endereço onde deseja receber o pedido</p>
              </div>
              <PaymentSelector>
                <label htmlFor="debit">
                  <input type="radio" name="payment" id="debit" />
                  <i><CreditCard size={16} /></i> 
                  CARTÃO DE CRÉDITO
                </label>
                <label htmlFor="credit">
                  <input type="radio" name="payment" id="credit" />
                  <i><Bank size={16} /></i> 
                  CARTÃO DE DÉBITO
                </label>
                <label htmlFor="money">
                  <input type="radio" name="payment" id="money" />
                  <i><Money size={16} /></i>
                  DINHEIRO
                </label>
              </PaymentSelector>
            </PaymentForm>
          </section>

        <SelectedCoffeesSection>
          <Title>Cafés seleciondos</Title>
          <SelectedCoffees>
            <ul>
              <li>
                <img src={americano} alt="asd" />
                <span>
                  <h4>Americano</h4>
                  <ButtonsContainer>
                    <Counter />
                    <RemoveButton />
                  </ButtonsContainer>
                </span>
                <p>R$ 9,90</p>      
              </li>
              <li>
                <img src={americano} alt="asd" />
                <span>
                  <h4>Americano</h4>
                  <ButtonsContainer>
                    <Counter />
                    <RemoveButton />
                  </ButtonsContainer>
                </span>
                <p>R$ 9,90</p>      
              </li>
            </ul>
          </SelectedCoffees>
        </SelectedCoffeesSection>

      </FormContainer>
    </CheckoutContainer>
  )
}