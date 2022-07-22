import { MapPin, Timer, CurrencyDollar } from 'phosphor-react'

import {
  SuccessContainer,
  SuccessHeader,
  OrderDetailsContainer,
  BadgeText,
} from './styles'

import { Badge } from '../../components/Badge'
import { Illustration } from '../../components/Illustration'

export function SuccessPage() {
  return (
    <SuccessContainer>
      <SuccessHeader>
        <h2>Uhu! Pedido confirmado</h2>
        <span>Agora é só aguardar que logo o café chegará até você</span>
      </SuccessHeader>

      <section>
        <OrderDetailsContainer>
          <Badge
            variant="purple"
            icon={<MapPin size={16} weight="fill" />}
            text={
              <BadgeText>
                Entrega em <strong>Rua João Daniel Martinelli, 102</strong>
                <br />
                Farrapos - Porto Alegre, RS
              </BadgeText>
            }
          />

          <Badge
            variant="yellow"
            icon={<Timer size={16} weight="fill" />}
            text={
              <BadgeText>
                Previsão de entrega
                <br />
                <strong>20 min - 30 min</strong>
              </BadgeText>
            }
          />

          <Badge
            variant="orange"
            icon={<CurrencyDollar size={16} weight="fill" />}
            text={
              <BadgeText>
                Pagamento na entrega
                <br />
                <strong>Cartão de crédito</strong>
              </BadgeText>
            }
          />
        </OrderDetailsContainer>

        <Illustration />
      </section>
    </SuccessContainer>
  )
}
