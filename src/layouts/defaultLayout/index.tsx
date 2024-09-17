import { Outlet } from 'react-router-dom'
import { Header } from '../../components/header'
import { Container } from './styles'

export function DefaultLayout() {
  return (
    <>
      <Header />
      <Container>
        <Outlet />
      </Container>
    </>
  )
}
