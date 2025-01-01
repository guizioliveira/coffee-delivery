import { Button } from '@/components/ui'
import { Content } from './styles'
import { useNavigate } from 'react-router-dom'

export default function EmptyCart() {
  const navigate = useNavigate()

  return (
    <Content>
      Você não tem itens no carrinho.
      <Button onClick={() => navigate('/')}>
        Escolha o melhor café para o seu momento
      </Button>
    </Content>
  )
}
