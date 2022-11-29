import styled from "styled-components";


export const HeaderContainer = styled.header`
  max-width: 72rem;
  margin: 0 auto;
  width: 100%;
  padding-top: 2rem;
`

export const HeaderContent = styled.div`
  max-width: 70rem;
  width: 100%;
  padding: 2rem 0;

  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${props => props.theme.background};

  nav {
    display: flex;
    gap: 1rem;
    font-size: 14px;
    height: 38px;

      div.location {
        display: flex;
        align-items: center;
        padding: 0 0.5rem;
        background-color: ${props => props.theme["purple-light"]};
        border-radius: 8px;
        color: ${props => props.theme["purple-dark"]};

          i {
            color: ${props => props.theme["purple"]};
            margin-right: 5px;
          }
        }
      }

      div.cart-container {
        position: relative;
        background: ${props => props.theme["yellow-light"]};
        width: 38px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 8px;
        cursor: pointer;

        &:hover {
          background: ${props => props.theme["yellow"]};
        }

          a {
            color: ${props => props.theme["yellow-dark"]};
          }

          div.orders-count {
            position: absolute;
            top: -25%;
            right: -25%;

            font-weight: bold;
            height: 1.25rem;
            width: 1.25rem;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;

            background: ${props => props.theme["yellow-dark"]} ;
            color: ${props => props.theme.white};
          }
      }
`