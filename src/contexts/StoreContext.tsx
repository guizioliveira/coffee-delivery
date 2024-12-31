import { createContext, ReactNode, useContext, useReducer } from 'react'
import { Coffee, coffeeReducer, GroupedCoffee } from '@/reducers/reducer'
import { addNewCoffeeAction, removeCoffee } from '@/reducers/actions'
import { useLocalStorage } from '@/hooks/useLocalStorage'
import { groupCoffeeById } from '@/utils/groupByItem'

interface CoffeeStoreContextType {
  coffees: Coffee[]
  groupedCoffees: GroupedCoffee[]
  totalItems: number
  totalPrice: number
  addNewItem: (data: Coffee, quantity: number) => void
  removeItem: (coffeeId: string) => void
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

  const { coffees } = storeState

  useLocalStorage<{ coffees: GroupedCoffee[] }>(
    '@coffee-delivery:store-state-1.0.0',
    storeState,
  )

  function addNewItem(data: Coffee, quantity: number) {
    dispatch(addNewCoffeeAction(data, quantity))
  }

  function removeItem(id: string) {
    dispatch(removeCoffee(id))
  }

  const groupedCoffees = groupCoffeeById(coffees)
  const totalPrice = coffees.reduce((acc, coffee) => acc + coffee.totalPrice, 0)
  const totalItems = coffees.reduce((acc, coffee) => acc + coffee.quantity, 0)

  return (
    <StoreContext.Provider
      value={{
        coffees,
        groupedCoffees,
        totalItems,
        totalPrice,
        addNewItem,
        removeItem,
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
