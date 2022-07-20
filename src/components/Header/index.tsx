import { MapPin, ShoppingCart } from 'phosphor-react'
import { NavLink } from 'react-router-dom'

import { Container, ButtonsContainer } from './styles'

import { Logo } from '../Logo'
import { Button } from '../Button'
import { defaultTheme } from '../../styles/themes/default'

export function Header() {
  return (
    <Container>
      <NavLink to="/" title="Home">
        <Logo />
      </NavLink>

      <ButtonsContainer>
        <Button variant="secondary">
          <MapPin size={22} weight="fill" color={defaultTheme.purple} />
          Porto alegre, RS
        </Button>
        <NavLink to="/checkout" title="Checkout">
          <Button variant="cart">
            <ShoppingCart
              size={22}
              weight="fill"
              color={defaultTheme['yellow-dark']}
            />
          </Button>
        </NavLink>
      </ButtonsContainer>
    </Container>
  )
}
