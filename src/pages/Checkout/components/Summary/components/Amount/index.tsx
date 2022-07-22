import { AmountContainer, AmountItem, AmountTotal } from './styles'

import { useCart } from '../../../../../../hooks/useCart'
import { formatMoney } from '../../../../../../utils/formatMoney'

const DELIVERY_PRICE = 3.5

export function Amount() {
  const { cartItemsTotal } = useCart()

  const cartTotal = DELIVERY_PRICE + cartItemsTotal

  const formattedItemsTotal = formatMoney(cartTotal)
  const formattedDelivery = formatMoney(DELIVERY_PRICE)
  const formattedTotal = formatMoney(cartTotal)

  return (
    <AmountContainer>
      <div>
        <AmountItem>Total de itens</AmountItem>
        <AmountItem>R$ {formattedItemsTotal}</AmountItem>
      </div>

      <div>
        <AmountItem>Entrega</AmountItem>
        <AmountItem>R$ {formattedDelivery}</AmountItem>
      </div>
      <div>
        <AmountTotal>Total</AmountTotal>
        <AmountTotal>R$ {formattedTotal}</AmountTotal>
      </div>
    </AmountContainer>
  )
}
