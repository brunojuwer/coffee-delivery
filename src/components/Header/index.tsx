import { HeaderContainer, HeaderContent } from "./styles";
import Logo from '../../assets/Logo.svg'
import { ShoppingCart, MapPin } from 'phosphor-react'

export function Header(){
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={Logo} alt="Coffee Delivery" />

        <nav>
          <div className="location">
            <i><MapPin size={22} weight="fill" /></i>
            <p>Porto Alegre, RS</p>
          </div>
          <div className="cart-container">
            <a href="#">
              <i><ShoppingCart size={22} weight="fill" /></i>
            </a>
            <div className="orders-count">3</div>
          </div>
        </nav>
      </HeaderContent>
    </HeaderContainer>
  )
}