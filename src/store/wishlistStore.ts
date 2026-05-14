import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { IProduct } from './cartStore'

interface WishlistState {
  items: IProduct[]
  toggle: (product: IProduct) => void
  removeItem: (productId: string) => void
  isWishlisted: (productId: string) => boolean
  count: number
}

export const useWishlistStore = create<WishlistState>()(
  persist(
    (set, get) => ({
      items: [],

      toggle: (product) => {
        const { items } = get()
        const exists = items.find((p) => p._id === product._id)
        set({
          items: exists
            ? items.filter((p) => p._id !== product._id)
            : [...items, product],
        })
      },

      removeItem: (productId) => {
        set({ items: get().items.filter((p) => p._id !== productId) })
      },

      isWishlisted: (productId) => {
        return !!get().items.find((p) => p._id === productId)
      },

      get count() {
        return get().items.length
      },
    }),
    { name: 'mithai-wishlist' }
  )
)
