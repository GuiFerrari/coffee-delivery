import { Bank, CreditCard, Money } from 'phosphor-react'
import { useState } from 'react'

import { PaymentMethodsContainer, PaymentItem } from './styles'

enum PaymentTypes {
  'CARTAO_DE_CREDITO' = 'CARTAO_DE_CREDITO',
  'CARTAO_DE_DEBITO' = 'CARTAO_DE_DEBITO',
  'DINHEIRO' = 'DINHEIRO'
}

export function PaymentMethods() {
  const [paymentType, setPaymentType] = useState<PaymentTypes | null>(null)

  function handleSelectPaymentOption(paymentSelected: PaymentTypes) {
    setPaymentType(paymentSelected)
  }

  return (
    <PaymentMethodsContainer>
      <PaymentItem
        type="button"
        onClick={() =>
          handleSelectPaymentOption(PaymentTypes.CARTAO_DE_CREDITO)
        }
        active={paymentType === PaymentTypes.CARTAO_DE_CREDITO}
      >
        <CreditCard size={16} />
        <span>Cartão de crédito</span>
      </PaymentItem>

      <PaymentItem
        type="button"
        onClick={() =>
          handleSelectPaymentOption(PaymentTypes.CARTAO_DE_DEBITO)
        }
        active={paymentType === PaymentTypes.CARTAO_DE_DEBITO}
      >
        <Bank size={16} />
        <span>Cartão de débito</span>
      </PaymentItem>

      <PaymentItem
        type="button"
        onClick={() => handleSelectPaymentOption(PaymentTypes.DINHEIRO)}
        active={paymentType === PaymentTypes.DINHEIRO}
      >
        <Money size={16} />
        <span>Dinheiro</span>
      </PaymentItem>
    </PaymentMethodsContainer>
  )
}
