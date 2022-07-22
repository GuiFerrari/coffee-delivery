import { Minus, Plus } from 'phosphor-react'

import { QuantityInputContainer } from './styles'

interface QuantityInputProps {
  size?: 'medium' | 'small'
  onIncrement(): void
  onDecrement(): void
  quantity: number
}

export function QuantityInput({
  size = 'medium',
  onIncrement,
  onDecrement,
  quantity,
}: QuantityInputProps) {
  return (
    <QuantityInputContainer size={size}>
      <button type="button" onClick={onDecrement} disabled={quantity <= 1}>
        <Minus size={14} weight="bold" />
      </button>

      <span>{quantity}</span>

      <button type="button" onClick={onIncrement}>
        <Plus size={14} weight="bold" />
      </button>
    </QuantityInputContainer>
  )
}
