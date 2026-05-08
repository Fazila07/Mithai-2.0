export interface IProduct {
  _id: string
  name: string
  slug: string
  description: string
  shortDescription: string
  price: number
  comparePrice?: number
  images: string[]
  category: ICategory | string
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

export interface ICategory {
  _id: string
  name: string
  slug: string
  description?: string
  image?: string
  emoji: string
  productCount?: number
}

export interface IUser {
  _id: string
  name: string
  email: string
  image?: string
  role: 'user' | 'admin'
  addresses: IAddress[]
  createdAt: string
}

export interface IAddress {
  _id?: string
  label: string
  name: string
  phone: string
  line1: string
  line2?: string
  city: string
  state: string
  pincode: string
  isDefault: boolean
}

export interface IOrderItem {
  product: IProduct | string
  name: string
  image: string
  price: number
  quantity: number
}

export interface IOrder {
  _id: string
  user: IUser | string
  items: IOrderItem[]
  shippingAddress: IAddress
  subtotal: number
  shippingCost: number
  discount: number
  total: number
  status: 'pending' | 'confirmed' | 'processing' | 'shipped' | 'delivered' | 'cancelled' | 'refunded'
  paymentStatus: 'pending' | 'paid' | 'failed' | 'refunded'
  paymentMethod: 'razorpay' | 'cod'
  razorpayOrderId?: string
  razorpayPaymentId?: string
  notes?: string
  createdAt: string
  updatedAt: string
}

export interface IReview {
  _id: string
  product: string
  user: IUser | string
  rating: number
  title: string
  body: string
  verified: boolean
  createdAt: string
}

// Cart
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

// API responses
export interface ApiResponse<T = unknown> {
  success: boolean
  data?: T
  message?: string
  error?: string
}

export interface PaginatedResponse<T> {
  data: T[]
  total: number
  page: number
  limit: number
  totalPages: number
}

// Shop filters
export interface ShopFilters {
  category?: string
  search?: string
  sort?: 'newest' | 'price-asc' | 'price-desc' | 'rating' | 'popular'
  minPrice?: number
  maxPrice?: number
  tags?: string[]
  page?: number
  limit?: number
}