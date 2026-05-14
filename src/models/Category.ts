import mongoose, { Schema, Document, Model } from 'mongoose'

export interface ICategory extends Document {
  name: string
  slug: string
  description?: string
  image?: string
  active: boolean
  parent?: string
  createdAt: Date
  updatedAt: Date
}

const CategorySchema = new Schema<ICategory>(
  {
    name: { type: String, required: true, trim: true },
    slug: { type: String, required: true, unique: true, lowercase: true, trim: true },
    description: { type: String },
    image: { type: String },
    active: { type: Boolean, default: true },
    parent: { type: String, default: null },
  },
  { timestamps: true }
)

const Category: Model<ICategory> =
  mongoose.models.Category ?? mongoose.model<ICategory>('Category', CategorySchema)
export default Category
