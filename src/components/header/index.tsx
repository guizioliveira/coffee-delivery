import { NavLink } from 'react-router-dom'
import { CartButton, HeaderContainer, LocationButton } from './styles'
import coffeeLogo from '@/assets/logo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'

export function Header() {
  return (
    <HeaderContainer>
      <NavLink to={'/'} title="Mome">
        <img src={coffeeLogo} alt="Copo de café" width={85} />
      </NavLink>

      <nav>
        <LocationButton>
          <MapPin size={22} weight="fill" />
          Porto Alegre, RS
        </LocationButton>

        <CartButton content={0}>
          <ShoppingCart size={22} weight="fill" />
        </CartButton>
      </nav>
    </HeaderContainer>
  )
}
