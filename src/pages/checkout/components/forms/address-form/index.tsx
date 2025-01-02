import { Box, Input, Spacing } from '@/components/ui'
import { GridThreeColumns, GridTwoColumns } from './styles'
import { useLocation } from '@/hooks/useLocation'
import { MapPinLine } from 'phosphor-react'
import { useFormContext, Controller } from 'react-hook-form'
import { useEffect } from 'react'
import { MaskedInput } from '@/components/ui/mask-input'

export function AddressForm() {
  const { location } = useLocation()

  const {
    register,
    formState: { errors },
    setValue,
    control,
  } = useFormContext()

  useEffect(() => {
    if (location) {
      setValue('city', location.city)
      setValue('regionCode', location.state)
    }
  }, [location, setValue])

  return (
    <Box.root
      title="Endereço de entrega"
      description="Informe o endereço onde deseja receber seu pedido"
      icon={{ color: 'yellow-dark', element: <MapPinLine /> }}
    >
      <Spacing apparence="xl" />

      <Box.content orientation="column">
        <GridThreeColumns>
          <Controller
            name="cep"
            control={control}
            render={({ field, fieldState }) => (
              <MaskedInput
                placeholder="CEP"
                mask="CEP"
                value={field.value}
                onChange={field.onChange}
                error={fieldState.error?.message as string | undefined}
              />
            )}
          />
        </GridThreeColumns>

        <Input
          placeholder="Endereço"
          {...register('address')}
          error={errors.address?.message as string | undefined}
        />

        <GridTwoColumns>
          <Input
            placeholder="Número"
            {...register('number')}
            error={errors.number?.message as string | undefined}
          />
          <Input
            placeholder="Complemento (Opcional)"
            {...register('complement')}
            error={errors.complement?.message as string | undefined}
          />
        </GridTwoColumns>

        <GridThreeColumns>
          <Input
            placeholder="Bairro"
            {...register('district')}
            error={errors.district?.message as string | undefined}
          />
          <Input
            placeholder="Cidade"
            {...register('city')}
            error={errors.city?.message as string | undefined}
          />
          <Controller
            name="regionCode"
            control={control}
            render={({ field, fieldState }) => (
              <MaskedInput
                placeholder="UF"
                mask="REGION_CODE"
                value={field.value}
                error={fieldState.error?.message as string | undefined}
                onChange={(e) => {
                  e.target.value = String(e.target.value).toUpperCase()
                  field.onChange(e)
                }}
              />
            )}
          />
        </GridThreeColumns>
      </Box.content>
    </Box.root>
  )
}
