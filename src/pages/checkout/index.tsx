import { Box, Button, Separator, Spacing } from '@/components/ui'
import { useStore } from '@/contexts/StoreContext'
import { zodResolver } from '@hookform/resolvers/zod'
import { Fragment } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import * as zod from 'zod'
import Balance from './components/balance'
import { CartItem } from './components/cart-item'
import EmptyCart from './components/empty-cart'
import { AddressForm } from './components/forms/address-form'
import { Container, Form as FormContainer, Section } from './styles'
import { PaymentMethodForm } from './components/forms/payment-method-form'

const paymentRequestSchema = zod.object({
  cep: zod.string().regex(/^\d{5}-\d{3}$/, 'CEP inválido'),
  address: zod.string().min(1, 'Campo inválido'),
  number: zod.coerce.number().min(1, 'Campo inválido'),
  complement: zod.string().optional(),
  district: zod.string().min(1, 'Campo inválido'),
  city: zod.string().min(1, 'Campo inválido'),
  regionCode: zod
    .string()
    .length(2, 'Campo inválido')
    .regex(/^[A-Za-z]{2}$/, 'Somente letras. Ex.: RS, SC, SP'),
  paymentMethod: zod.enum(['credit', 'debit', 'cash'], {
    invalid_type_error: 'Escolha uma forma de pagamento',
  }),
})

type PaymentRequestFormData = zod.infer<typeof paymentRequestSchema>

export function Checkout() {
  const { groupedCoffees, totalItemPrice } = useStore()

  const paymentRequestForm = useForm<PaymentRequestFormData>({
    resolver: zodResolver(paymentRequestSchema),
    defaultValues: {
      cep: '',
      address: '',
      complement: '',
      district: '',
      city: '',
      regionCode: '',
    },
  })

  const { handleSubmit } = paymentRequestForm

  function handleCreateNewPaymentRequest(data: PaymentRequestFormData) {
    console.log(data, totalItemPrice)
  }

  return (
    <main>
      <Container>
        {groupedCoffees.length > 0 ? (
          <FormContainer onSubmit={handleSubmit(handleCreateNewPaymentRequest)}>
            <Section size={640}>
              <h5>Complete seu pedido</h5>

              <FormProvider {...paymentRequestForm}>
                <AddressForm />
                <PaymentMethodForm />
              </FormProvider>
            </Section>

            <Section size={448}>
              <h5>Cafés selecionados</h5>
              <Box.root>
                <Box.content orientation="column">
                  {groupedCoffees.map((coffee) => (
                    <Fragment key={coffee.id}>
                      <CartItem item={coffee} />
                      <Separator />
                    </Fragment>
                  ))}
                  <Balance total={totalItemPrice} shipping={5.9} />
                </Box.content>

                <Spacing apparence="l" />

                <Box.content>
                  <Button type="submit">confirmar pedido</Button>
                </Box.content>
              </Box.root>
            </Section>
          </FormContainer>
        ) : (
          <EmptyCart />
        )}
      </Container>
    </main>
  )
}
