import mongoose, { Schema, Document, Model } from 'mongoose'

export interface IStoreSettings extends Document {
  storeName: string
  logoUrl?: string
  supportEmail?: string
  phone?: string
  whatsapp?: string
  shippingCharge: number
  freeShippingThreshold: number
  taxPercentage: number
  razorpayKeyId?: string
  razorpayKeySecret?: string
  updatedAt: Date
}

const StoreSettingsSchema = new Schema<IStoreSettings>(
  {
    storeName: { type: String, default: 'Mithai 2.0' },
    logoUrl: { type: String },
    supportEmail: { type: String },
    phone: { type: String },
    whatsapp: { type: String },
    shippingCharge: { type: Number, default: 50 },
    freeShippingThreshold: { type: Number, default: 500 },
    taxPercentage: { type: Number, default: 0 },
    razorpayKeyId: { type: String },
    razorpayKeySecret: { type: String },
  },
  { timestamps: true }
)

const StoreSettings: Model<IStoreSettings> =
  mongoose.models.StoreSettings ??
  mongoose.model<IStoreSettings>('StoreSettings', StoreSettingsSchema)
export default StoreSettings
