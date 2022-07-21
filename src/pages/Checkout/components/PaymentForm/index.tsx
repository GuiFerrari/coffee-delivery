import { useFormContext } from 'react-hook-form'

import {
  FormContainer,
  CepInput,
  StreetInput,
  NumberInput,
  ComplementInput,
  NeighborhoodInput,
  CityInput,
  UfInput,
  Grid1,
  Grid2,
} from './styles'

export function PaymentForm() {
  const { register } = useFormContext()

  return (
    <FormContainer>
      <CepInput id="cep" type="number" placeholder="CEP" {...register('cep')} />

      <StreetInput
        id="street"
        type="text"
        placeholder="Rua"
        {...register('street')}
      />

      <Grid1>
        <NumberInput
          id="number"
          type="number"
          placeholder="Número"
          {...register('number')}
        />

        <ComplementInput
          id="complement"
          type="text"
          placeholder="Complemento"
          {...register('complement')}
        />
      </Grid1>

      <Grid2>
        <NeighborhoodInput
          id="neighborhood"
          type="text"
          placeholder="Bairro"
          {...register('neighborhood')}
        />

        <CityInput
          id="city"
          type="text"
          placeholder="Cidade"
          {...register('city')}
        />

        <UfInput id="uf" type="text" placeholder="UF" {...register('uf')} />
      </Grid2>
    </FormContainer>
  )
}
