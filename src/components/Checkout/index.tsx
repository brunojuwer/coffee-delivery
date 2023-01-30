import {
  ButtonsContainer,
  CheckoutContainer,
  FormContainer,
  InputContainer,
  InputSection,
  MessageFillAllFieldsForm,
  PaymentForm,
  PaymentSelector,
  SelectedCoffees,
  SelectedCoffeesSection,
  Title,
  TotalValue
} from "./styles";

import { CartContext } from "../../context/CartContext";
import { Counter } from "../Buttons/Counter";
import { RemoveButton } from "../Buttons/RemoveButton";

import { zodResolver } from '@hookform/resolvers/zod';
import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money } from "phosphor-react";
import { useContext, useEffect, useState } from "react";
import { useForm } from 'react-hook-form';
import * as zod from 'zod';

const newOrderFormValidation = zod.object({
  cep: zod.string().max(8).min(8),
  rua: zod.string().min(1),
  numero: zod.string().min(1),
  complemento: zod.string().max(30),
  bairro: zod.string().min(1),
  cidade: zod.string().min(1),
  uf: zod.string().max(2).min(2),
  pagamento: zod.string().min(1)
})

export type OrderFormData = zod.infer<typeof newOrderFormValidation>

export function Checkout() {

  const {productsCart, handleNewOrder} = useContext(CartContext);
  const [totalPriceItems, setTotalPriceItems] = useState(0)
  const { register, handleSubmit, formState } = useForm<OrderFormData>({
    resolver: zodResolver(newOrderFormValidation)
  })

  useEffect(() => {
    const total = productsCart
      .reduce((acc, product) => product.price * product.amount + acc, 0)
  
      setTotalPriceItems(total)
  }, [productsCart])
  
  

  const isFormWithErrors = !!Object.keys(formState.errors).length
   
  return (
    <CheckoutContainer onSubmit={handleSubmit(handleNewOrder)} action=""> 
      <FormContainer >
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
                <input id="cep" type="text" placeholder="CEP" {...register('cep')} maxLength={8}/>
                <input id="rua" type="text" placeholder="Rua" {...register('rua')} />
                <input id="numero" type="text" placeholder="Número" {...register('numero')} />
                <label htmlFor="complemento" id="complemento">
                  <input type="text" placeholder="Complemento" maxLength={30} {...register('complemento')} />
                  <p>Opcional</p>
                </label>
                <input id="bairro" type="text" placeholder="Bairro" {...register('bairro')} />
                <input id="cidade" type="text" placeholder="Cidade" {...register('cidade')} />
                <input id="uf" type="text" placeholder="UF" {...register('uf')} />
              </InputContainer>
            </InputSection>

            <PaymentForm >
              <div>
                <i><CurrencyDollar size={22} weight="regular" /></i>
                <h4>Endereço de Entrega</h4>
                <p></p>
                <p>Informe o endereço onde deseja receber o pedido</p>
              </div>
              <PaymentSelector>
                <label htmlFor="credit">
                  <input type="radio" id="credit" {...register('pagamento')} defaultValue="Cartão de Crédito"/>
                  <i><CreditCard size={16} /></i> 
                  CARTÃO DE CRÉDITO
                </label>
                <label htmlFor="debit">
                  <input type="radio" id="debit" {...register('pagamento')} defaultValue="Cartão de Débito"/>
                  <i><Bank size={16} /></i> 
                  CARTÃO DE DÉBITO
                </label>
                <label htmlFor="money">
                  <input type="radio" id="money" {...register('pagamento')} defaultValue="Dinheiro"/>
                  <i><Money size={16} /></i>
                  DINHEIRO
                </label>
              </PaymentSelector>
            </PaymentForm>
          </section>

        <SelectedCoffeesSection>
          <Title>Cafés seleciondos</Title>
          <SelectedCoffees>
          {
            !productsCart.length
              ? <p>Você ainda não adicionou nenhum produto</p>
              : <ul>
                  {productsCart.map(product => (
                    <li key={product.id}>
                    <img src={product.icon} alt="asd" />
                    <div>
                      <h4>{product.title}</h4>
                      <ButtonsContainer>
                        <Counter 
                          id={product.id} 
                          isCheckoutPage={true}
                          amountItens={product.amount}                          
                        />
                        <RemoveButton id={product.id}/>
                      </ButtonsContainer>
                    </div>
                    <p>R$ {(product.price).toFixed(2)}</p> 
                  </li>
                  ))}
                </ul>
            }
            <TotalValue>
              <div>
                <p>Total de itens</p>
                <p>{totalPriceItems.toFixed(2)}</p>
              </div>
              <div>
                <p>Entrega</p>
                <p>R$ 3.50</p>
              </div>
              <div>
                <h3>Total</h3>
                <h3>R$ {(totalPriceItems + 3.50).toFixed(2)}</h3>
              </div>
                <button type="submit" disabled={!productsCart.length}>
                  CONFIRMAR PEDIDO
                </button>
            </TotalValue>
            {isFormWithErrors ? 
              <MessageFillAllFieldsForm>
                Por Favor preencha todos os campos
              </MessageFillAllFieldsForm>: ""}
          </SelectedCoffees>
        </SelectedCoffeesSection>
      </FormContainer>
    </CheckoutContainer>
  )
}