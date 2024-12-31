import { formatPrice } from '@/utils/formatPrice'
import { Item, Total } from './styles'

interface BalancePrpos {
  total: number
  shipping?: number
}

export default function Balance({ total, shipping = 0 }: BalancePrpos) {
  return (
    <>
      <Item>
        <p>Total de itens</p>
        <span>{formatPrice(total)}</span>
      </Item>
      <Item value={shipping}>
        <p>Entrega</p>
        <span>{shipping !== 0 ? formatPrice(shipping) : 'Grátis'}</span>
      </Item>
      <Total>
        <p>Total</p>
        <span>{formatPrice(total + shipping)}</span>
      </Total>
    </>
  )
}
