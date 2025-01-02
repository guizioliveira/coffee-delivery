import { Box, Spacing } from '@/components/ui'
import { CurrencyDollar } from 'phosphor-react'
import { useFormContext } from 'react-hook-form'

export function PaymentMethodForm() {
  const { register } = useFormContext()

  return (
    <Box.root
      title="Pagamento"
      description="O pagamento é feito na entrega. Escolha a forma que deseja pagar"
      icon={{ color: 'purple', element: <CurrencyDollar /> }}
    >
      <Spacing apparence="xl" />
      <label>
        <input type="radio" value="credit" {...register('paymentMethod')} />
        Cartão de Crédito
      </label>
      <label>
        <input type="radio" value="debit" {...register('paymentMethod')} />
        Cartão de Débito
      </label>
      <label>
        <input type="radio" value="cash" {...register('paymentMethod')} />
        Dinheiro
      </label>
    </Box.root>
  )
}
