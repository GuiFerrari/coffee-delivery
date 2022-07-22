import { Trash } from 'phosphor-react'

import {
  CoffeeSelectedContainer,
  CoffeeDetails,
  ActionsContainer,
  RemoveButton,
} from './styles'

import { QuantityInput } from '../../../QuantityInput'

export function CoffeeSelected() {
  return (
    <CoffeeSelectedContainer>
      <CoffeeDetails>
        <img src="/coffees/latte.png" alt="Expresso tradicional" />

        <div>
          <h2>Expresso tradicional</h2>
          <ActionsContainer>
            <QuantityInput size="small" />

            <RemoveButton>
              <Trash size={16} />
              REMOVER
            </RemoveButton>
          </ActionsContainer>
        </div>
      </CoffeeDetails>

      <p>R$ 9,90</p>
    </CoffeeSelectedContainer>
  )
}
