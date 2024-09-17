import { Header } from '@/components/header'
import { Outlet } from 'react-router-dom'
import { Container } from './styles'

export function DefaultLayout() {
  return (
    <>
      <Container>
        <Header />
        <Outlet />
      </Container>
    </>
  )
}
