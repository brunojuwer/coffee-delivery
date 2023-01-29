import { HeaderContainer, HeaderContent } from "./styles";
import Logo from '../../assets/Logo.svg'
import { ShoppingCart, MapPin } from 'phosphor-react'
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

export function Header(){
  const {productsCart} = useContext(CartContext);

  return (
    <HeaderContainer>
      <HeaderContent>
        <NavLink to="/">
          <img src={Logo} alt="Coffee Delivery" />
        </NavLink>
        <nav>
          <div className="location">
            <i><MapPin size={22} weight="fill" /></i>
            <p>Porto Alegre, RS</p>
          </div>
          <div className="cart-container">
            <NavLink to="/checkout" >
              <i><ShoppingCart size={22} weight="fill" /></i>
            </NavLink>
            <div className="orders-count">{productsCart.length}</div>
          </div>
        </nav>
      </HeaderContent>
    </HeaderContainer>
  )
}