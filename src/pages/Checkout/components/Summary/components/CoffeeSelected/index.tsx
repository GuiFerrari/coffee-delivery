import { Trash } from 'phosphor-react'

import {
  CoffeeSelectedContainer,
  CoffeeDetails,
  ActionsContainer,
  RemoveButton,
} from './styles'

import { QuantityInput } from '../../../../../../components/QuantityInput'

import { CartItem } from '../../../../../../contexts/CartContext'

import { formatMoney } from '../../../../../../utils/formatMoney'

import { useCart } from '../../../../../../hooks/useCart'

interface CoffeeSelectedProps {
  coffee: CartItem
}

export function CoffeeSelected({ coffee }: CoffeeSelectedProps) {
  const { changeCartItemQuantity, removeCartItem } = useCart()

  const coffeeTotal = coffee.price * coffee.quantity
  const formattedPrice = formatMoney(coffeeTotal)

  function handleIncrement() {
    changeCartItemQuantity(coffee.id, 'increment')
  }

  function handleDecrement() {
    changeCartItemQuantity(coffee.id, 'decrement')
  }

  function handleRemoveItem() {
    removeCartItem(coffee.id)
  }

  return (
    <CoffeeSelectedContainer>
      <CoffeeDetails>
        <img src={`/coffees/${coffee.image}`} alt={coffee.name} />

        <div>
          <h2>{coffee.name}</h2>
          <ActionsContainer>
            <QuantityInput
              size="small"
              onIncrement={handleIncrement}
              onDecrement={handleDecrement}
              quantity={coffee.quantity}
            />

            <RemoveButton onClick={handleRemoveItem}>
              <Trash size={16} />
              REMOVER
            </RemoveButton>
          </ActionsContainer>
        </div>
      </CoffeeDetails>

      <p>R$ {formattedPrice}</p>
    </CoffeeSelectedContainer>
  )
}
