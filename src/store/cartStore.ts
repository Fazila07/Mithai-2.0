import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export interface IProduct {
  _id: string
  name: string
  slug: string
  description: string
  shortDescription: string
  price: number
  comparePrice?: number
  images: string[]
  category: string
  ingredients: string[]
  stock: number
  tags: string[]
  featured: boolean
  bestSeller: boolean
  rating: number
  reviewCount: number
  weight?: string
  allergens?: string[]
  nutritionFacts?: Record<string, string>
  createdAt: string
  updatedAt: string
}

export interface CartItem {
  product: IProduct
  quantity: number
}

export interface CartState {
  items: CartItem[]
  isOpen: boolean
  addItem: (product: IProduct, qty?: number) => void
  removeItem: (productId: string) => void
  updateQty: (productId: string, qty: number) => void
  clearCart: () => void
  openCart: () => void
  closeCart: () => void
  total: number
  itemCount: number
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      isOpen: false,

      addItem: (product: IProduct, qty = 1) => {
        const { items } = get()
        const existing = items.find((item) => item.product._id === product._id)

        if (existing) {
          set({
            items: items.map((item) =>
              item.product._id === product._id ? { ...item, quantity: item.quantity + qty } : item
            ),
          })
        } else {
          set({ items: [...items, { product, quantity: qty }] })
        }

        get().openCart()
      },

      removeItem: (productId: string) => {
        set({ items: get().items.filter((item) => item.product._id !== productId) })
      },

      updateQty: (productId: string, qty: number) => {
        if (qty <= 0) {
          get().removeItem(productId)
        } else {
          set({
            items: get().items.map((item) =>
              item.product._id === productId ? { ...item, quantity: qty } : item
            ),
          })
        }
      },

      clearCart: () => {
        set({ items: [], isOpen: false })
      },

      openCart: () => {
        set({ isOpen: true })
      },

      closeCart: () => {
        set({ isOpen: false })
      },

      get total() {
        return get().items.reduce((sum, item) => sum + item.product.price * item.quantity, 0)
      },

      get itemCount() {
        return get().items.reduce((sum, item) => sum + item.quantity, 0)
      },
    }),
    {
      name: 'mithai-cart',
    }
  )
)
