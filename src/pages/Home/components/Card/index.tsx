import { useState } from 'react'
import { ShoppingCart, Minus, Plus } from 'phosphor-react'

import {
  Container,
  HeaderContainer,
  BodyContainer,
  Tags,
  FooterContainer,
  Price,
  FooterActions,
  Count,
} from './styles'

import { Button } from '../../../../components/Button'

import { defaultTheme } from '../../../../styles/themes/default'

import { formatMoney } from '../../../../utils/formatMoney'

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
  const [count, setCount] = useState(1)

  const formattedPrice = formatMoney(coffee.price)

  function incrementCount() {
    setCount((count) => count + 1)
  }

  function decrementCount() {
    setCount((count) => (count === 1 ? count : count - 1))
  }

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
          <Count>
            <button type="button" onClick={decrementCount}>
              <Minus size={14} weight="bold" color={defaultTheme.purple} />
            </button>

            <span>{count}</span>

            <button type="button" onClick={incrementCount}>
              <Plus size={14} weight="bold" color={defaultTheme.purple} />
            </button>
          </Count>

          <Button variant="cart-secondary">
            <ShoppingCart size={22} weight="fill" color={defaultTheme.white} />
          </Button>
        </FooterActions>
      </FooterContainer>
    </Container>
  )
}
