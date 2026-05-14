import mongoose, { Schema, Document, Model } from 'mongoose'

export interface ICoupon extends Document {
  code: string
  discountType: 'percentage' | 'fixed'
  value: number
  minOrderAmount: number
  expiryDate: Date
  usageLimit: number
  usedCount: number
  active: boolean
  createdAt: Date
  updatedAt: Date
}

const CouponSchema = new Schema<ICoupon>(
  {
    code: { type: String, required: true, unique: true, uppercase: true, trim: true },
    discountType: { type: String, enum: ['percentage', 'fixed'], required: true },
    value: { type: Number, required: true, min: 0 },
    minOrderAmount: { type: Number, default: 0, min: 0 },
    expiryDate: { type: Date, required: true },
    usageLimit: { type: Number, default: 0 }, // 0 = unlimited
    usedCount: { type: Number, default: 0 },
    active: { type: Boolean, default: true },
  },
  { timestamps: true }
)

const Coupon: Model<ICoupon> =
  mongoose.models.Coupon ?? mongoose.model<ICoupon>('Coupon', CouponSchema)
export default Coupon
