import * as Box from '@/components/ui/box'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Spacing from '@/components/ui/spacing'
import { Container, GridThreeColumns, GridTwoColumns, Section } from './styles'
import { MapPinLine, CurrencyDollar } from 'phosphor-react'

export function Checkout() {
  return (
    <main>
      <Container>
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
            <Box.content>
              <Button>confirmar pedido</Button>
            </Box.content>
          </Box.root>
        </Section>
      </Container>
    </main>
  )
}
