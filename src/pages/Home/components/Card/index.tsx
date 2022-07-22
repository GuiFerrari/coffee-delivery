import { useState } from 'react'
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
import { QuantityInput } from '../../../../components/QuantityInput'

import { formatMoney } from '../../../../utils/formatMoney'

import { useCart } from '../../../../hooks/useCart'

export interface Coffee {
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
  const [quantity, setQuantity] = useState(1)

  const { addCoffeeToCart } = useCart()
  const { colors } = useTheme()

  function handleAddToCart() {
    const coffeeToAdd = {
      ...coffee,
      quantity,
    }

    addCoffeeToCart(coffeeToAdd)
  }

  function handleIncrement() {
    setQuantity((quantityState) => quantityState + 1)
  }

  function handleDecrement() {
    setQuantity((quantityState) =>
      quantityState === 1 ? quantityState : quantityState - 1,
    )
  }

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
          <QuantityInput
            onIncrement={handleIncrement}
            onDecrement={handleDecrement}
            quantity={quantity}
          />

          <Button variant="cart-secondary" onClick={handleAddToCart}>
            <ShoppingCart size={22} weight="fill" color={colors.white} />
          </Button>
        </FooterActions>
      </FooterContainer>
    </Container>
  )
}
