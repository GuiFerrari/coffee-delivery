import { useFormContext } from 'react-hook-form'

import { AddressFormContainer } from './styles'

import Input from '../../../../components/Input'

interface ErrorsType {
  errors: {
    [key: string]: {
      message: string
    }
  }
}

export function AddressForm() {
  const { register, formState } = useFormContext()

  const { errors } = formState as unknown as ErrorsType

  return (
    <AddressFormContainer>
      <Input
        placeholder="CEP"
        className="cep"
        {...register('cep')}
        error={errors.cep?.message}
      />

      <Input
        type="text"
        placeholder="Rua"
        className="street"
        {...register('street')}
        error={errors.street?.message}
      />

      <Input
        type="number"
        placeholder="Número"
        className="number"
        {...register('number')}
        error={errors.number?.message}
      />

      <Input
        type="text"
        placeholder="Complemento"
        className="complement"
        {...register('complement')}
        error={errors.complement?.message}
        rightText="Opcional"
      />

      <Input
        type="text"
        placeholder="Bairro"
        className="district"
        {...register('district')}
        error={errors.district?.message}
      />

      <Input
        type="text"
        placeholder="Cidade"
        className="city"
        {...register('city')}
        error={errors.city?.message}
      />

      <Input
        type="text"
        placeholder="UF"
        className="uf"
        {...register('uf')}
        error={errors.uf?.message}
      />
    </AddressFormContainer>
  )
}
