import { Header } from '@/components/header'
import { Outlet } from 'react-router-dom'
import { Container } from './styles'
import { ToastContainer } from 'react-toastify'

export function DefaultLayout() {
  return (
    <>
      <Container>
        <Header />
        <Outlet />
        <ToastContainer
          position="top-right"
          autoClose={5000}
          newestOnTop={true}
          pauseOnHover
          theme="colored"
          limit={3}
        />
      </Container>
    </>
  )
}
