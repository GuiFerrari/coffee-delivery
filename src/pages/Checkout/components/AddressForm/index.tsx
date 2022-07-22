// import { useFormContext } from 'react-hook-form'

import { AddressFormContainer } from './styles'

import { Input } from '../../../../components/Input'

export function AddressForm() {
  // const { register } = useFormContext()

  return (
    <AddressFormContainer>
      <Input id="cep" type="number" placeholder="CEP" className="cep" />

      <Input id="street" type="text" placeholder="Rua" className="street" />

      <Input
        id="number"
        type="number"
        placeholder="Número"
        className="number"
      />

      <Input
        id="complement"
        type="text"
        placeholder="Complemento"
        className="complement"
      />

      <Input
        id="neighborhood"
        type="text"
        placeholder="Bairro"
        className="neighborhood"
      />

      <Input id="city" type="text" placeholder="Cidade" className="city" />

      <Input id="uf" type="text" placeholder="UF" className="uf" />
    </AddressFormContainer>
  )
}
