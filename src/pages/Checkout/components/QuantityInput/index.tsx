import { Minus, Plus } from 'phosphor-react'
import { useState } from 'react'

import { QuantityInputContainer } from './styles'

interface QuantityInputProps {
  size?: 'medium' | 'small'
}

export function QuantityInput({ size = 'medium' }: QuantityInputProps) {
  const [count, setCount] = useState(1)

  function incrementCount() {
    setCount((count) => count + 1)
  }

  function decrementCount() {
    setCount((count) => (count === 1 ? count : count - 1))
  }

  return (
    <QuantityInputContainer size={size}>
      <button type="button" onClick={decrementCount}>
        <Minus size={14} weight="bold" />
      </button>

      <span>{count}</span>

      <button type="button" onClick={incrementCount}>
        <Plus size={14} weight="bold" />
      </button>
    </QuantityInputContainer>
  )
}
