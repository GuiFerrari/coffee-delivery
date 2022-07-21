import {
  MapPinLine,
  CurrencyDollar,
  CreditCard,
  Bank,
  Money,
} from 'phosphor-react'
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'

import {
  Container,
  OrderBody,
  OrderContainer,
  OrderHeader,
  PaymentOptionButton,
  PaymentOptionsContainer,
  SummaryContainer,
} from './styles'

import { PaymentForm } from './components/PaymentForm'

import { defaultTheme } from '../../styles/themes/default'
import { useState } from 'react'

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

enum PaymentTypes {
  'CARTAO_DE_CREDITO' = 'CARTAO_DE_CREDITO',
  'CARTAO_DE_DEBITO' = 'CARTAO_DE_DEBITO',
  'DINHEIRO' = 'DINHEIRO'
}

export function Checkout() {
  const [paymentType, setPaymentType] = useState<PaymentTypes | null>(null);

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

  function handleSelectPaymentOption(paymentSelected: PaymentTypes) {
    setPaymentType(paymentSelected)
  }

  return (
    <Container>
      <OrderContainer>
        <h2>Complete seu pedido</h2>

        <div>
          <OrderHeader>
            <div>
              <MapPinLine size={22} color={defaultTheme['yellow-dark']} />
            </div>
            <div>
              <h4>Endereço de entrega</h4>
              <span>Informe o endereço onde deseja receber seu pedido</span>
            </div>
          </OrderHeader>

          <OrderBody>
            <form onSubmit={handleSubmit(handleCreatePayment)}>
              <FormProvider {...paymentForm}>
                <PaymentForm />
              </FormProvider>
            </form>
          </OrderBody>
        </div>

        <div>
          <OrderHeader>
            <div>
              <CurrencyDollar size={22} color={defaultTheme.purple} />
            </div>
            <div>
              <h4>Pagamento</h4>
              <span>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </span>
            </div>
          </OrderHeader>

          <OrderBody>
            <PaymentOptionsContainer>
              <PaymentOptionButton
                type="button"
                onClick={() => handleSelectPaymentOption(PaymentTypes.CARTAO_DE_CREDITO)}
                active={paymentType === PaymentTypes.CARTAO_DE_CREDITO}
              >
                <CreditCard size={16} color={defaultTheme.purple} />
                <span>Cartão de crédito</span>
              </PaymentOptionButton>

              <PaymentOptionButton
                type="button"
                onClick={() => handleSelectPaymentOption(PaymentTypes.CARTAO_DE_DEBITO)}
                active={paymentType === PaymentTypes.CARTAO_DE_DEBITO}
              >
                <Bank size={16} color={defaultTheme.purple} />
                <span>Cartão de débito</span>
              </PaymentOptionButton>

              <PaymentOptionButton
                type="button"
                onClick={() => handleSelectPaymentOption(PaymentTypes.DINHEIRO)}
                active={paymentType === PaymentTypes.DINHEIRO}
              >
                <Money size={16} color={defaultTheme.purple} />
                <span>Dinheiro</span>
              </PaymentOptionButton>
            </PaymentOptionsContainer>
          </OrderBody>
        </div>
      </OrderContainer>

      <SummaryContainer>
        <h2>Cafés selecionados</h2>

        <div>Aqui</div>
      </SummaryContainer>
    </Container>
  )
}
