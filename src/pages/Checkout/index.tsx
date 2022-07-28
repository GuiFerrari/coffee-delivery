import { useTheme } from 'styled-components'
import { MapPinLine, CurrencyDollar } from 'phosphor-react'
import { FormProvider, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'

import {
  Container,
  FormContainer,
  OrderBody,
  OrderContainer,
  OrderBase,
  SummaryContainer,
} from './styles'

import { AddressForm } from './components/AddressForm'

import { SectionTitle } from './components/SectionTitle'
import { PaymentMethods } from './components/PaymentMethods'
import { Summary } from './components/Summary'

import { useCart } from '../../hooks/useCart'

enum PaymentMethodsEnum {
  'credit' = 'credit',
  'debit' = 'debit',
  'money' = 'money',
}

const paymentFormValidationSchema = zod.object({
  cep: zod.string().min(1, 'Informe o CEP'),
  street: zod.string().min(1, 'Informe o Rua'),
  number: zod.string().min(1, 'Informe o Número'),
  complement: zod.string(),
  district: zod.string().min(1, 'Informe o Bairro'),
  city: zod.string().min(1, 'Informe a Cidade'),
  uf: zod.string().min(1, 'Informe a UF'),
  paymentMethod: zod.nativeEnum(PaymentMethodsEnum, {
    errorMap: () => {
      return { message: 'Informe o método de pagamento' }
    },
  }),
})

export type PaymentFormData = zod.infer<typeof paymentFormValidationSchema>

export function CheckoutPage() {
  const { colors } = useTheme()
  const navigate = useNavigate()
  const { cleanCart } = useCart()

  const paymentForm = useForm<PaymentFormData>({
    resolver: zodResolver(paymentFormValidationSchema),
  })

  const { handleSubmit, reset } = paymentForm

  function handleCreatePayment(data: PaymentFormData) {
    navigate("/success", {
      state: data
    })
    cleanCart()
  }

  return (
    <Container>
      <FormProvider {...paymentForm}>
        <FormContainer onSubmit={handleSubmit(handleCreatePayment)}>
          <OrderContainer>
            <h2>Complete seu pedido</h2>

            <OrderBase>
              <SectionTitle
                title="Endereço de entrega"
                subtitle="Informe o endereço onde deseja receber seu pedido"
                icon={<MapPinLine size={22} color={colors['yellow-dark']} />}
              />

              <OrderBody>
                <AddressForm />
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
        </FormContainer>
      </FormProvider>
    </Container>
  )
}
