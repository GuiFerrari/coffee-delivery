import { SummaryContainer, ConfirmButton } from './styles'

import { CoffeeSelected } from './components/CoffeeSelected'
import { Amount } from './components/Amount'

import { useCart } from '../../../../hooks/useCart'

export function Summary() {
  const { cartItems, cartQuantity } = useCart()

  return (
    <SummaryContainer>
      {cartItems.map((cartItem) => (
        <CoffeeSelected key={cartItem.id} coffee={cartItem} />
      ))}

      <Amount />

      <ConfirmButton disabled={cartQuantity <= 0} type="submit">
        Confirmar pedido
      </ConfirmButton>
    </SummaryContainer>
  )
}
