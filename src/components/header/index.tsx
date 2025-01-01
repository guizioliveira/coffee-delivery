import coffeeLogo from '@/assets/logo.svg'
import { useStore } from '@/contexts/StoreContext'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { NavLink, useNavigate } from 'react-router-dom'
import { CartButton, HeaderContainer, LocationButton } from './styles'
import { useLocation } from '@/hooks/useLocation'

export function Header() {
  const navigate = useNavigate()
  const { totalItems } = useStore()
  const { location } = useLocation()

  return (
    <HeaderContainer>
      <NavLink to={'/'} title="Mome">
        <img src={coffeeLogo} alt="Copo de café" width={85} />
      </NavLink>

      <nav>
        {location && (
          <LocationButton>
            <MapPin size={22} weight="fill" />
            {location?.city}, {location?.state}
          </LocationButton>
        )}

        <CartButton onClick={() => navigate('/checkout')} content={totalItems}>
          <ShoppingCart size={22} weight="fill" />
        </CartButton>
      </nav>
    </HeaderContainer>
  )
}
