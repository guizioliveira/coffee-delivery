import { Item, Total } from './styles'

interface BalancePrpos {
  total: number
  shipping?: number
}

export default function Balance({ total, shipping = 0 }: BalancePrpos) {
  const currencyFormatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })

  return (
    <>
      <Item>
        <p>Total de itens</p>
        <span>{currencyFormatter.format(total)}</span>
      </Item>
      <Item value={shipping}>
        <p>Entrega</p>
        <span>
          {shipping !== 0 ? currencyFormatter.format(shipping) : 'Grátis'}
        </span>
      </Item>
      <Total>
        <p>Total</p>
        <span>{currencyFormatter.format(total + shipping)}</span>
      </Total>
    </>
  )
}
