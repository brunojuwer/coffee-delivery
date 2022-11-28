import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money } from "phosphor-react";
import { CheckoutContainer } from "./styles";
import americano from '../../assets/coffee/americano.svg'


export function Checkout() {
  return (
    <CheckoutContainer>
      <h3>Complete seu pedido</h3>
      <div>
        <section>
          <div>
            <i><MapPinLine size={22} weight="regular" /></i>
            <h4>Endereço de Entrega</h4>
          </div>
          <p>Informe o endereço onde deseja receber o pedido</p>

          <div>
            <input type="text" placeholder="CEP" />
            <input type="text" placeholder="Rua" />
            <input type="number" placeholder="Número"/>
            <input type="text" placeholder="Complemento"/>
            <input type="text" placeholder="Bairro"/>
            <input type="text" placeholder="Cidade"/>
            <input type="text" placeholder="UF"/>
          </div>

          <section>
            <div>
              <i><CurrencyDollar size={22} weight="regular" /></i>
              <h4>Endereço de Entrega</h4>
            </div>
            <p>Informe o endereço onde deseja receber o pedido</p>
            <div>
              <span><CreditCard size={22} /> CARTÃO DE CRÉDITO</span>
              <span><Bank size={22} /> CARTÃO DE DÉBITO</span>
              <span><Money size={22} /> DINHEIRO</span>
            </div>
          </section>
        </section>

        <section>
          <h3>Cafés seleciondos</h3>
          <div>
            <ul>
              <li>
                <img src={americano} alt="asd" />
                <div>
                  <h4>Americano</h4>
                  <div>Botao - e + | botao remover</div>

                </div>
              </li>
              <li>
                <img src={americano} alt="asd" />
                <div>
                  <h4>Americano</h4>
                  <div>Botao - e + | botao remover</div>

                </div>
              </li>
            </ul>
          </div>

          
        </section>

      </div>
    </CheckoutContainer>
  )
}