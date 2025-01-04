import { createContext, ReactNode, useContext, useReducer } from 'react'
import { Coffee, coffeeReducer, GroupedCoffee } from '@/reducers/reducer'
import {
  addNewCoffeeAction,
  removeCoffee,
  setShippingFeeAction,
} from '@/reducers/actions'
import { useLocalStorage } from '@/hooks/useLocalStorage'
import { groupCoffeeById } from '@/utils/groupByItem'
import { DEFAULT_SHIPPING_FEE } from '@/constants'
import { toast } from 'react-toastify'

interface CoffeeStoreContextType {
  coffees: Coffee[]
  groupedCoffees: GroupedCoffee[]
  totalItems: number
  purchasePrice: number
  shippingFee: number
  addNewItem: (data: Coffee, quantity: number) => void
  removeItem: (coffeeId: string) => void
  setShippingFee: (fee: number) => void
}

interface CoffeeStoreContextProviderProps {
  children: ReactNode
}

const StoreContext = createContext({} as CoffeeStoreContextType)

export function CoffeeStoreContextProvider({
  children,
}: CoffeeStoreContextProviderProps) {
  const [storeState, dispatch] = useReducer(
    coffeeReducer,
    {
      coffees: [],
      shippingFee: DEFAULT_SHIPPING_FEE,
    },
    (initialState) => {
      const storedStateAsJSON = localStorage.getItem(
        '@coffee-delivery:store-state-1.0.0',
      )

      if (storedStateAsJSON) {
        return JSON.parse(storedStateAsJSON)
      }

      return initialState
    },
  )

  const { coffees, shippingFee } = storeState

  useLocalStorage<{ coffees: GroupedCoffee[] }>(
    '@coffee-delivery:store-state-1.0.0',
    storeState,
  )

  function addNewItem(data: Coffee, quantity: number) {
    dispatch(addNewCoffeeAction(data, quantity))
    toast.success(
      `${data.name} (${quantity} uni.) ${quantity > 1 ? 'adicionados' : 'adicionado'} a sua lista!`,
    )
  }

  function removeItem(id: string) {
    dispatch(removeCoffee(id))
  }

  function setShippingFee(fee: number) {
    dispatch(setShippingFeeAction(fee))
  }

  const groupedCoffees = groupCoffeeById(coffees)
  const purchasePrice = coffees.reduce(
    (acc, coffee) => acc + coffee.totalItemPrice,
    0,
  )
  const totalItems = coffees.reduce((acc, coffee) => acc + coffee.quantity, 0)

  return (
    <StoreContext.Provider
      value={{
        coffees,
        groupedCoffees,
        totalItems,
        purchasePrice,
        shippingFee,
        addNewItem,
        removeItem,
        setShippingFee,
      }}
    >
      {children}
    </StoreContext.Provider>
  )
}

export function useStore() {
  const context = useContext(StoreContext)
  if (!context) {
    throw new Error('useStore must be used within a StoreContextProvider')
  }
  return context
}
