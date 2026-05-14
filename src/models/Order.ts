import mongoose, { Schema, Document, Model } from 'mongoose'

export type OrderStatus =
  | 'Pending'
  | 'Confirmed'
  | 'In Process'
  | 'Packed'
  | 'Shipped'
  | 'Delivered'
  | 'Cancelled'

export type PaymentStatus = 'Pending' | 'Paid' | 'Failed' | 'Refunded'

export interface IOrderItem {
  productId: string
  name: string
  image: string
  price: number
  quantity: number
}

export interface IOrder extends Document {
  orderNumber: string
  customer: {
    name: string
    email: string
    phone: string
  }
  shippingAddress: {
    street: string
    city: string
    state: string
    pincode: string
  }
  items: IOrderItem[]
  subtotal: number
  shippingCharge: number
  tax: number
  total: number
  paymentStatus: PaymentStatus
  paymentMethod: string
  razorpayOrderId?: string
  razorpayPaymentId?: string
  status: OrderStatus
  couponCode?: string
  discount: number
  notes?: string
  createdAt: Date
  updatedAt: Date
}

const OrderSchema = new Schema<IOrder>(
  {
    orderNumber: { type: String, required: true, unique: true },
    customer: {
      name: { type: String, required: true },
      email: { type: String, required: true },
      phone: { type: String, required: true },
    },
    shippingAddress: {
      street: { type: String, required: true },
      city: { type: String, required: true },
      state: { type: String, default: 'India' },
      pincode: { type: String, required: true },
    },
    items: [
      {
        productId: { type: String, required: true },
        name: { type: String, required: true },
        image: { type: String, default: '' },
        price: { type: Number, required: true },
        quantity: { type: Number, required: true, min: 1 },
      },
    ],
    subtotal: { type: Number, required: true },
    shippingCharge: { type: Number, default: 0 },
    tax: { type: Number, default: 0 },
    total: { type: Number, required: true },
    paymentStatus: {
      type: String,
      enum: ['Pending', 'Paid', 'Failed', 'Refunded'],
      default: 'Pending',
    },
    paymentMethod: { type: String, default: 'COD' },
    razorpayOrderId: { type: String },
    razorpayPaymentId: { type: String },
    status: {
      type: String,
      enum: ['Pending', 'Confirmed', 'In Process', 'Packed', 'Shipped', 'Delivered', 'Cancelled'],
      default: 'Pending',
    },
    couponCode: { type: String },
    discount: { type: Number, default: 0 },
    notes: { type: String },
  },
  { timestamps: true }
)

// Auto-generate order number
OrderSchema.pre('validate', async function (next) {
  if (this.isNew && !this.orderNumber) {
    const count = await mongoose.models.Order.countDocuments()
    this.orderNumber = `MTH${String(count + 1).padStart(5, '0')}`
  }
  next()
})

const Order: Model<IOrder> = mongoose.models.Order ?? mongoose.model<IOrder>('Order', OrderSchema)
export default Order
