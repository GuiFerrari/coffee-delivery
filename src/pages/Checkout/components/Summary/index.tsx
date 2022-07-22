import { SummaryContainer, ConfirmButton } from './styles'

import { CoffeeSelected } from './components/CoffeeSelected'
import { Amount } from './components/Amount'

export function Summary() {
  return (
    <SummaryContainer>
      <CoffeeSelected />
      <CoffeeSelected />
      <CoffeeSelected />

      <Amount />

      <ConfirmButton>Confirmar pedido</ConfirmButton>
    </SummaryContainer>
  )
}
