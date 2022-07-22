import { MapPin, ShoppingCart } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import { useTheme } from 'styled-components'

import {
  HeaderContainer,
  ButtonsContainer,
  HeaderContent,
  CartButton,
} from './styles'

import { Logo } from '../Logo'
import { Button } from '../Button'

import { useCart } from '../../hooks/useCart'

export function Header() {
  const { colors } = useTheme()
  const { cartQuantity } = useCart()

  return (
    <HeaderContainer>
      <HeaderContent>
        <NavLink to="/" title="Home">
          <Logo />
        </NavLink>

        <ButtonsContainer>
          <Button variant="secondary">
            <MapPin size={22} weight="fill" color={colors.purple} />
            Porto alegre, RS
          </Button>
          <NavLink to="/checkout" title="Checkout">
            <CartButton>
              {cartQuantity >= 1 && <span>{cartQuantity}</span>}
              <ShoppingCart
                size={22}
                weight="fill"
                color={colors['yellow-dark']}
              />
            </CartButton>
          </NavLink>
        </ButtonsContainer>
      </HeaderContent>
    </HeaderContainer>
  )
}
