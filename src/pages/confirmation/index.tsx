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
import { useLocation, useNavigate } from 'react-router-dom'
import { validators } from '../checkout/components/forms'
import { useEffect } from 'react'
import { FREE_SHIPPING_CITY, FREE_SHIPPING_STATE } from '@/constants'
import useDocumentTitle from '@/hooks/useDocumentTitle'

type ConfirmationData = validators.formData

export default function Confirmation() {
  const location = useLocation()
  const navigate = useNavigate()
  const data = location.state as ConfirmationData | undefined

  useDocumentTitle('Confirmação de compra')

  const formatPaymentMethod = (
    method: 'credit' | 'debit' | 'cash' | undefined,
  ) => {
    switch (method) {
      case 'credit':
        return 'Cartão de Crédito'
      case 'debit':
        return 'Cartão de Débito'
      case 'cash':
        return 'Dinheiro'
      default:
        return ''
    }
  }

  const deliveryTime = () => {
    if (
      data?.city === FREE_SHIPPING_CITY &&
      data.regionCode === FREE_SHIPPING_STATE
    ) {
      return '20 min - 30 min'
    } else {
      return '60min - 80min'
    }
  }

  useEffect(() => {
    if (!data) {
      navigate('/', { replace: true })
    }
  }, [data, navigate])

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
              Entrega em{' '}
              <b>
                {data?.address}, {data?.number} {data?.complement}
              </b>{' '}
              <br /> {data?.district} - {data?.city}, {data?.regionCode}
            </p>
          </Item>

          <Item>
            <Icon bgColor="yellow">
              <Clock size={16} weight="fill" />
            </Icon>
            <p>
              Previsão de entrega <br />
              <b>{deliveryTime()}</b>
            </p>
          </Item>

          <Item>
            <Icon bgColor="yellow-dark">
              <CurrencyDollar size={16} weight="fill" />
            </Icon>
            <p>
              Pagamento na entrega <br />
              <b>{formatPaymentMethod(data?.paymentMethod)}</b>
            </p>
          </Item>
        </PurchaseResume>

        <img src={'/delivery-boy.svg'} alt="Homem sorrindo andando de moto" />
      </ContentWrapper>
    </ConfirmationContaier>
  )
}
