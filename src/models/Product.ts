import mongoose, { Schema, Document, Model } from 'mongoose'

export interface IProduct extends Document {
  name: string
  slug: string
  category: string
  subcategory?: string
  description: string
  shortDescription: string
  price: number
  comparePrice?: number
  stock: number
  sku?: string
  weight?: string
  tags: string[]
  ingredients: string[]
  nutritionalInfo: Record<string, string>
  benefits: string[]
  images: string[]
  featuredImage?: string
  bestSeller: boolean
  featured: boolean
  active: boolean
  rating: number
  reviewCount: number
  createdAt: Date
  updatedAt: Date
}

const ProductSchema = new Schema<IProduct>(
  {
    name: { type: String, required: true, trim: true },
    slug: { type: String, required: true, unique: true, lowercase: true, trim: true },
    category: { type: String, required: true, enum: ['Cookies', 'Brownies', 'Laddo'] },
    subcategory: { type: String, trim: true },
    description: { type: String, required: true },
    shortDescription: { type: String, default: '' },
    price: { type: Number, required: true, min: 0 },
    comparePrice: { type: Number, min: 0 },
    stock: { type: Number, required: true, default: 0, min: 0 },
    sku: { type: String, trim: true },
    weight: { type: String, trim: true },
    tags: [{ type: String }],
    ingredients: [{ type: String }],
    nutritionalInfo: { type: Map, of: String, default: {} },
    benefits: [{ type: String }],
    images: [{ type: String }],
    featuredImage: { type: String },
    bestSeller: { type: Boolean, default: false },
    featured: { type: Boolean, default: false },
    active: { type: Boolean, default: true },
    rating: { type: Number, default: 0, min: 0, max: 5 },
    reviewCount: { type: Number, default: 0 },
  },
  { timestamps: true }
)

ProductSchema.index({ name: 'text', description: 'text', tags: 'text' })

const Product: Model<IProduct> =
  mongoose.models.Product ?? mongoose.model<IProduct>('Product', ProductSchema)
export default Product
