import { Header } from "../../components/Header"
import { LayoutContainer } from "./styles"
import { Outlet } from 'react-router-dom'
import { Footer } from "../../components/Footer"


export function DefaultLayout() {
  return (
    <LayoutContainer>
      <Header />
      <Outlet />
      <Footer />
    </LayoutContainer>
  )
}