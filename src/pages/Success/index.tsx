import { useEffect } from 'react'
import { MapPin, Timer, CurrencyDollar } from 'phosphor-react'
import { useLocation, useNavigate } from 'react-router-dom'

import {
  SuccessContainer,
  SuccessHeader,
  OrderDetailsContainer,
  BadgeText,
} from './styles'

import { Badge } from '../../components/Badge'
import { Illustration } from '../../components/Illustration'

import { PaymentFormData } from '../Checkout'
import { paymentMethods } from '../Checkout/components/PaymentMethods'

interface LocationType {
  state: PaymentFormData
}

export function SuccessPage() {
  const { state } = useLocation() as unknown as LocationType
  const navigate = useNavigate()

  useEffect(() => {
    if (!state) {
      navigate('/')
    }
  }, [navigate, state])

  if (!state) return <></>

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
                Entrega em{' '}
                <strong>
                  {state.street}, {state.number}
                </strong>
                <br />
                {state.district} - {state.city}, {state.uf}
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
                <strong>{paymentMethods[state.paymentMethod].label}</strong>
              </BadgeText>
            }
          />
        </OrderDetailsContainer>

        <Illustration />
      </section>
    </SuccessContainer>
  )
}
