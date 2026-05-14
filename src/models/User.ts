import mongoose, { Schema, Document, Model } from 'mongoose'

export interface IUser extends Document {
  name: string
  email: string
  password: string
  phone?: string
  role: 'customer' | 'admin'
  addresses: {
    label?: string
    street: string
    city: string
    state: string
    pincode: string
  }[]
  createdAt: Date
  updatedAt: Date
}

const UserSchema = new Schema<IUser>(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, lowercase: true, trim: true },
    password: { type: String, required: true, select: false },
    phone: { type: String, trim: true },
    role: { type: String, enum: ['customer', 'admin'], default: 'customer' },
    addresses: [
      {
        label: String,
        street: { type: String, required: true },
        city: { type: String, required: true },
        state: { type: String, required: true },
        pincode: { type: String, required: true },
      },
    ],
  },
  { timestamps: true }
)

const User: Model<IUser> = mongoose.models.User ?? mongoose.model<IUser>('User', UserSchema)
export default User
