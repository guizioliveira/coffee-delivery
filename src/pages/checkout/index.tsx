import * as Box from '@/components/ui/box'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import Spacing from '@/components/ui/spacing'
import { useStore } from '@/contexts/StoreContext'
import { CurrencyDollar, MapPinLine } from 'phosphor-react'
import Balance from './components/balance'
import { CartItem } from './components/cart-item'
import { Container, GridThreeColumns, GridTwoColumns, Section } from './styles'
import EmptyCart from './components/empty-cart'

export function Checkout() {
  const { groupedCoffees, totalPrice } = useStore()

  return (
    <main>
      <Container>
        {groupedCoffees.length > 0 ? (
          <>
            <Section size={640}>
              <h5>Complete seu pedido</h5>

              <Box.root
                title="Endereço de entrega"
                description="Informe o endereço onde deseja receber seu pedido"
                icon={{ color: 'yellow-dark', element: <MapPinLine /> }}
              >
                <Spacing apparence="xl" />

                <Box.content orientation="column">
                  <GridThreeColumns>
                    <Input placeholder="CPF" />
                  </GridThreeColumns>

                  <Input placeholder="Endereço" />

                  <GridTwoColumns>
                    <Input placeholder="Número" />
                    <Input placeholder="Complemento (Opcional)" />
                  </GridTwoColumns>

                  <GridThreeColumns>
                    <Input placeholder="Bairro" />
                    <Input placeholder="Cidade" />
                    <Input placeholder="UF" />
                  </GridThreeColumns>
                </Box.content>
              </Box.root>

              <Box.root
                title="Pagamento"
                description="O pagamento é feito na entrega. Escolha a forma que deseja pagar"
                icon={{ color: 'purple', element: <CurrencyDollar /> }}
              >
                <Spacing apparence="xl" />
                <p>text</p>
              </Box.root>
            </Section>

            <Section size={448}>
              <h5>Cafés selecionados</h5>
              <Box.root>
                <Box.content orientation="column">
                  {groupedCoffees.map((coffee) => (
                    <>
                      <CartItem key={coffee.id} item={coffee} />
                      <Separator />
                    </>
                  ))}
                  <Balance total={totalPrice} shipping={5.9} />
                </Box.content>

                <Spacing apparence="l" />

                <Box.content>
                  <Button>confirmar pedido</Button>
                </Box.content>
              </Box.root>
            </Section>
          </>
        ) : (
          <EmptyCart />
        )}
      </Container>
    </main>
  )
}
