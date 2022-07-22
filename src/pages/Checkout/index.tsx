import { useTheme } from 'styled-components'
import { MapPinLine, CurrencyDollar } from 'phosphor-react'
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'

import {
  Container,
  OrderBody,
  OrderContainer,
  OrderBase,
  SummaryContainer,
} from './styles'

import { AddressForm } from './components/AddressForm'

import { SectionTitle } from './components/SectionTitle'
import { PaymentMethods } from './components/PaymentMethods'
import { Summary } from './components/Summary'

const paymentFormValidationSchema = zod.object({
  cep: zod
    .number()
    .min(7, 'Informe um CEP correto')
    .max(8, 'Informe um CEP correto'),
  street: zod.string(),
  number: zod.number().min(1, 'Informe um número correto'),
  complement: zod.string().nullable(),
  neighborhood: zod.string(),
  city: zod.string(),
  uf: zod.string().min(2, 'Informe um UF correto'),
})

type PaymentFormData = zod.infer<typeof paymentFormValidationSchema>

export function Checkout() {
  const { colors } = useTheme()

  const paymentForm = useForm<PaymentFormData>({
    resolver: zodResolver(paymentFormValidationSchema),
    defaultValues: {
      cep: 0,
      street: '',
      number: 0,
      complement: '',
      neighborhood: '',
      city: '',
      uf: '',
    },
  })

  const { handleSubmit, reset } = paymentForm

  function handleCreatePayment(data: PaymentFormData) {
    console.log('paymentForm: ', data)
    reset()
  }

  return (
    <Container>
      <OrderContainer>
        <h2>Complete seu pedido</h2>

        <OrderBase>
          <SectionTitle
            title="Endereço de entrega"
            subtitle="Informe o endereço onde deseja receber seu pedido"
            icon={<MapPinLine size={22} color={colors['yellow-dark']} />}
          />

          <OrderBody>
            <form onSubmit={handleSubmit(handleCreatePayment)}>
              <FormProvider {...paymentForm}>
                <AddressForm />
              </FormProvider>
            </form>
          </OrderBody>
        </OrderBase>

        <OrderBase>
          <SectionTitle
            title="Pagamento"
            subtitle="O pagamento é feito na entrega. Escolha a forma que deseja pagar"
            icon={<CurrencyDollar size={22} color={colors.purple} />}
          />

          <OrderBody>
            <PaymentMethods />
          </OrderBody>
        </OrderBase>
      </OrderContainer>

      <SummaryContainer>
        <h2>Cafés selecionados</h2>

        <Summary />
      </SummaryContainer>
    </Container>
  )
}
