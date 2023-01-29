import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money } from "phosphor-react";

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
  Title,
  TotalValue
} from "./styles";

import { Counter } from "../Buttons/Counter";
import { RemoveButton } from "../Buttons/RemoveButton";

import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { cards } from "../../constants";


export function Checkout() {

  const {addProductsToCart, productsCart} = useContext(CartContext);

  

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
                <label htmlFor="complemente" id="complemento">
                  <input type="text" placeholder="Complemento"/>
                  <p>Opcional</p>
                </label>
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
              {productsCart.map(product => (
              <li key={product.id}>
                <img src={product.id} alt="asd" />
                <div>
                  <h4>Americano</h4>
                  <ButtonsContainer>
                    <Counter id={product.id}/>
                    <RemoveButton />
                  </ButtonsContainer>
                </div>
                <p>R$ 9,90</p>      
              </li>
              ))}
            </ul>
            <TotalValue>
              <div>
                <p>Total de itens</p>
                <p>R$ 29,70</p>
              </div>
              <div>
                <p>Entrega</p>
                <p>R$ 3.50</p>
              </div>
              <div>
                <h3>Total</h3>
                <h3>R$ 33,20</h3>
              </div>
              <NavLink to={"/success"}>
                <button>
                  CONFIRMAR PEDIDO
                </button>
              </NavLink>
            </TotalValue>
          </SelectedCoffees>

           
        </SelectedCoffeesSection>

        
      </FormContainer>
    </CheckoutContainer>
  )
}