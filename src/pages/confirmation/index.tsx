import { Clock, CurrencyDollar, MapPin } from 'phosphor-react'
import {
  ConfirmationContaier,
  ContentWrapper,
  Icon,
  Item,
  PurchaseResume,
  SuccessMessage,
} from './styles'
import { Spacing } from '@/components/ui'

export default function Confirmation() {
  return (
    <ConfirmationContaier>
      <SuccessMessage>
        <h2>Uhu! Pedido confirmado</h2>
        <p>Agora é só aguardar que logo o café chegará até você</p>
      </SuccessMessage>
      <Spacing apparence="xl" />

      <ContentWrapper>
        <PurchaseResume>
          <Item>
            <Icon bgColor="purple">
              <MapPin size={16} weight="fill" />
            </Icon>
            <p>
              Entrega em <b>Rua João Daniel Martinelli, 102</b> <br /> Farrapos
              - Porto Alegre, RS
            </p>
          </Item>

          <Item>
            <Icon bgColor="yellow">
              <Clock size={16} weight="fill" />
            </Icon>
            <p>
              Previsão de entrega <br />
              <b>20 min - 30 min</b>
            </p>
          </Item>

          <Item>
            <Icon bgColor="yellow-dark">
              <CurrencyDollar size={16} weight="fill" />
            </Icon>
            <p>
              Pagamento na entrega <br />
              <b>Cartão de Crédito</b>
            </p>
          </Item>
        </PurchaseResume>

        <img src={'/delivery-boy.svg'} alt="Homem sorrindo andando de moto" />
      </ContentWrapper>
    </ConfirmationContaier>
  )
}
