import { Box, Button, Separator, Spacing } from '@/components/ui'
import { useStore } from '@/contexts/StoreContext'
import { Fragment } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import Balance from './components/balance'
import { CartItem } from './components/cart-item'
import EmptyCart from './components/empty-cart'
import { AddressForm, PaymentMethodForm, validators } from './components/forms'
import { Container, Form as FormContainer, Section } from './styles'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

export function Checkout() {
  const { groupedCoffees, purchasePrice, shippingFee, removeAll } = useStore()
  const navigate = useNavigate()

  const paymentRequestForm = useForm<validators.formData>({
    resolver: validators.resolver,
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

  function handleCreateNewPaymentRequest(data: validators.formData) {
    const payload = {
      ...data,
      purchasePrice,
      shippingFee,
    }

    const toastId = toast.loading('Seus dados estão sendo processados...')

    setTimeout(() => {
      toast.update(toastId, {
        render: 'Compra finalizada!',
        type: 'success',
        isLoading: false,
        autoClose: 3000,
      })
      removeAll()
      navigate('/confirmation', { state: payload })
    }, 3000)
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
                  <Balance total={purchasePrice} shipping={shippingFee} />
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
