import { Box, Spacing, RadioButton, RadioGroup } from '@/components/ui'
import { Bank, CreditCard, CurrencyDollar, Money } from 'phosphor-react'
import { useFormContext } from 'react-hook-form'
import { ErrorMessage } from './styles'

export function PaymentMethodForm() {
  const {
    register,
    formState: { errors },
  } = useFormContext()

  return (
    <Box.root
      title="Pagamento"
      description="O pagamento é feito na entrega. Escolha a forma que deseja pagar"
      icon={{ color: 'purple', element: <CurrencyDollar /> }}
    >
      <Spacing apparence="xl" />

      <RadioGroup>
        <RadioButton value="credit" {...register('paymentMethod')}>
          <CreditCard size={16} />
          Cartão de Crédito
        </RadioButton>
        <RadioButton value="debit" {...register('paymentMethod')}>
          <Bank size={16} />
          Cartão de Débito
        </RadioButton>
        <RadioButton value="cash" {...register('paymentMethod')}>
          <Money size={16} />
          Dinheiro
        </RadioButton>
      </RadioGroup>

      {errors.paymentMethod && (
        <>
          <Spacing apparence="s" />
          <ErrorMessage>
            {errors.paymentMethod.message as string | undefined}
          </ErrorMessage>
        </>
      )}
    </Box.root>
  )
}
