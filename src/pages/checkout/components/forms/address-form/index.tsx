import { Fragment } from 'react'
import { Input } from '@/components/ui'
import { GridThreeColumns, GridTwoColumns } from './styles'
import { useLocation } from '@/hooks/useLocation'

export function AddressForm() {
  const { location } = useLocation()

  return (
    <Fragment>
      <GridThreeColumns>
        <Input placeholder="CEP" />
      </GridThreeColumns>

      <Input placeholder="Endereço" />

      <GridTwoColumns>
        <Input placeholder="Número" />
        <Input placeholder="Complemento (Opcional)" />
      </GridTwoColumns>

      <GridThreeColumns>
        <Input placeholder="Bairro" />
        <Input placeholder="Cidade" value={location?.city} />
        <Input placeholder="UF" value={location?.state} />
      </GridThreeColumns>
    </Fragment>
  )
}
