import {
  FREE_SHIPPING_CITY,
  FREE_SHIPPING_STATE,
  DEFAULT_SHIPPING_FEE,
} from '@/constants'

/**
 * Calculate the shipping fee based on city and state.
 * @param city Name of the city.
 * @param state Region code (UF).
 * @returns value of shipping fee.
 */
export function calculateShippingFee(city: string, state: string): number {
  if (
    city.trim().toLowerCase() === FREE_SHIPPING_CITY.trim().toLowerCase() &&
    state.trim().toUpperCase() === FREE_SHIPPING_STATE.trim().toUpperCase()
  ) {
    return 0
  }

  return DEFAULT_SHIPPING_FEE
}
