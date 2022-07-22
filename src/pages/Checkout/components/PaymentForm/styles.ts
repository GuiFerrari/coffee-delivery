import styled from 'styled-components'

export const FormContainer = styled.div`
  display: grid;
  grid-template-columns: auto;
  justify-content: stretch;
  row-gap: 16px;
  column-gap: 12px;
`

export const Grid1 = styled.div`
  display: grid;
  grid-template-columns: 200px 1fr;
  column-gap: 12px;
`

export const Grid2 = styled.div`
  display: grid;
  grid-template-columns: 200px 1fr 60px;
  column-gap: 12px;
`

const BaseInput = styled.input`
  background: ${({ theme }) => theme.colors['base-input']};
  padding: 12px;
  border: 2px solid ${({ theme }) => theme.colors['base-button']};
  border-radius: 6px;

  font-size: 0.875rem;
  line-height: 130%;
  font-weight: 400;
  color: ${({ theme }) => theme.colors['base-text']};

  &:focus {
    box-shadow: none;
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors['base-label']};
  }
`

export const CepInput = styled(BaseInput)`
  width: 100px;
`

export const StreetInput = styled(BaseInput)``

export const NumberInput = styled(BaseInput)``

export const ComplementInput = styled(BaseInput)``

export const NeighborhoodInput = styled(BaseInput)``

export const CityInput = styled(BaseInput)``

export const UfInput = styled(BaseInput)``
