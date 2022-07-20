import { MapPin, ShoppingCart } from 'phosphor-react'

import { Container, ButtonsContainer } from './styles'

import { Logo } from '../Logo'
import { Button } from '../Button'
import { defaultTheme } from '../../styles/themes/default'

export function Header() {
  return (
    <Container>
      <Logo />

      <ButtonsContainer>
        <Button variant="secondary">
          <MapPin size={22} weight="fill" color={defaultTheme.purple} />
          Porto alegre, RS
        </Button>
        <Button variant="cart">
          <ShoppingCart
            size={22}
            weight="fill"
            color={defaultTheme['yellow-dark']}
          />
        </Button>
      </ButtonsContainer>
    </Container>
  )
}
