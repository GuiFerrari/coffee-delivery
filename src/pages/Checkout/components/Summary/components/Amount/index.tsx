import { AmountContainer, AmountItem, AmountTotal } from './styles'

export function Amount() {
  return (
    <AmountContainer>
      <div>
        <AmountItem>Total de itens</AmountItem>
        <AmountItem>R$ 29,70</AmountItem>
      </div>

      <div>
        <AmountItem>Entrega</AmountItem>
        <AmountItem>R$ 3,50</AmountItem>
      </div>
      <div>
        <AmountTotal>Total</AmountTotal>
        <AmountTotal>R$ 33,20</AmountTotal>
      </div>
    </AmountContainer>
  )
}
