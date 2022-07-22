import { ShoppingCart } from 'phosphor-react'
import { useTheme } from 'styled-components'

import {
  Container,
  HeaderContainer,
  BodyContainer,
  Tags,
  FooterContainer,
  Price,
  FooterActions,
} from './styles'

import { Button } from '../../../../components/Button'

import { formatMoney } from '../../../../utils/formatMoney'
import { QuantityInput } from '../../../Checkout/components/QuantityInput'

interface Coffee {
  id: string
  name: string
  description: string
  price: number
  tags: string[]
  image: string
}

interface CardProps {
  coffee: Coffee
}

export function Card({ coffee }: CardProps) {
  const { colors } = useTheme()

  const formattedPrice = formatMoney(coffee.price)
  return (
    <Container>
      <HeaderContainer>
        <img src={`/coffees/${coffee.image}`} alt={coffee.name} />
      </HeaderContainer>

      <BodyContainer>
        <Tags>
          {coffee.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </Tags>

        <h2>{coffee.name}</h2>
        <p>{coffee.description}</p>
      </BodyContainer>

      <FooterContainer>
        <Price>
          R$
          <strong>{' ' + formattedPrice}</strong>
        </Price>

        <FooterActions>
          <QuantityInput />

          <Button variant="cart-secondary">
            <ShoppingCart size={22} weight="fill" color={colors.white} />
          </Button>
        </FooterActions>
      </FooterContainer>
    </Container>
  )
}
