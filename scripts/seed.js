// scripts/seed.js
// Run with: node scripts/seed.js
// Make sure MONGODB_URI and ADMIN_PASSWORD are set in .env.local

const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
require('dotenv').config({ path: '.env.local' })

const MONGODB_URI = process.env.MONGODB_URI
const ADMIN_EMAIL = process.env.ADMIN_EMAIL || 'admin@mithai.com'
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'Admin@123456'

if (!MONGODB_URI) {
  console.error('❌  MONGODB_URI not set in .env.local')
  process.exit(1)
}

const UserSchema = new mongoose.Schema(
  { name: String, email: { type: String, unique: true }, password: { type: String, select: false }, phone: String, role: { type: String, default: 'customer' } },
  { timestamps: true }
)
const User = mongoose.models.User || mongoose.model('User', UserSchema)

const ProductSchema = new mongoose.Schema(
  {
    name: String, slug: { type: String, unique: true }, category: String, subcategory: String,
    description: String, shortDescription: String, price: Number, comparePrice: Number,
    stock: Number, sku: String, weight: String, tags: [String], ingredients: [String],
    nutritionalInfo: { type: Map, of: String }, benefits: [String], images: [String],
    featuredImage: String, bestSeller: Boolean, featured: Boolean, active: Boolean,
    rating: Number, reviewCount: Number,
  },
  { timestamps: true }
)
const Product = mongoose.models.Product || mongoose.model('Product', ProductSchema)

const CategorySchema = new mongoose.Schema(
  { name: String, slug: { type: String, unique: true }, description: String, image: String, active: Boolean },
  { timestamps: true }
)
const Category = mongoose.models.Category || mongoose.model('Category', CategorySchema)

async function seed() {
  console.log('🌱 Connecting to MongoDB...')
  await mongoose.connect(MONGODB_URI)
  console.log('✅ Connected')

  // Admin user
  const existing = await User.findOne({ email: ADMIN_EMAIL })
  if (!existing) {
    const hashed = await bcrypt.hash(ADMIN_PASSWORD, 12)
    await User.create({ name: 'Admin', email: ADMIN_EMAIL, password: hashed, role: 'admin' })
    console.log(`✅ Admin user created: ${ADMIN_EMAIL}`)
  } else {
    console.log(`ℹ️  Admin already exists: ${ADMIN_EMAIL}`)
  }

  // Categories
  const categories = [
    { name: 'Cookies', slug: 'cookies', description: 'Healthy cookies made with clean ingredients', active: true },
    { name: 'Brownies', slug: 'brownies', description: 'Rich brownies without refined sugar', active: true },
    { name: 'Laddo', slug: 'laddo', description: 'Traditional laddos with a healthy twist', active: true },
  ]
  for (const cat of categories) {
    await Category.updateOne({ slug: cat.slug }, cat, { upsert: true })
  }
  console.log('✅ Categories seeded')

  // Sample products
  const products = [
    {
      name: 'Almond Butter Cookies', slug: 'almond-butter-cookies', category: 'Cookies',
      description: 'Crispy, buttery cookies made with cold-pressed almond butter and jaggery. No refined sugar, no maida.',
      shortDescription: 'Crispy cookies with almond butter & jaggery', price: 299, comparePrice: 399,
      stock: 50, sku: 'MTH-001', weight: '200g',
      tags: ['cookies', 'almond', 'jaggery', 'healthy'],
      ingredients: ['Almond Flour', 'Jaggery', 'Cold-pressed Coconut Oil', 'Vanilla Extract', 'Pink Salt'],
      benefits: ['No refined sugar', 'Gluten-free friendly', 'High protein'],
      images: [], featuredImage: '', bestSeller: true, featured: true, active: true, rating: 4.8, reviewCount: 24,
    },
    {
      name: 'Dark Chocolate Brownies', slug: 'dark-chocolate-brownies', category: 'Brownies',
      description: 'Fudgy, rich brownies made with 70% dark chocolate and sweetened with dates. Zero refined sugar.',
      shortDescription: 'Fudgy brownies with 70% dark chocolate & dates', price: 349, comparePrice: 449,
      stock: 30, sku: 'MTH-002', weight: '200g',
      tags: ['brownies', 'chocolate', 'dates', 'sugar-free'],
      ingredients: ['70% Dark Chocolate', 'Almond Flour', 'Dates', 'Eggs', 'Coconut Oil'],
      benefits: ['Zero refined sugar', 'Rich in antioxidants', 'PCOS friendly'],
      images: [], featuredImage: '', bestSeller: true, featured: false, active: true, rating: 4.9, reviewCount: 37,
    },
    {
      name: 'Peanut Laddo', slug: 'peanut-laddo', category: 'Laddo',
      description: 'Traditional peanut laddos made with roasted peanuts, jaggery, and cardamom. Zero preservatives.',
      shortDescription: 'Traditional peanut laddos with jaggery & cardamom', price: 249, comparePrice: 299,
      stock: 8, sku: 'MTH-003', weight: '250g',
      tags: ['laddo', 'peanut', 'traditional', 'jaggery'],
      ingredients: ['Roasted Peanuts', 'Jaggery', 'Cardamom', 'Ghee'],
      benefits: ['High protein', 'No preservatives', 'Traditional recipe'],
      images: [], featuredImage: '', bestSeller: false, featured: true, active: true, rating: 4.7, reviewCount: 18,
    },
  ]

  for (const p of products) {
    await Product.updateOne({ slug: p.slug }, p, { upsert: true })
  }
  console.log('✅ Sample products seeded')

  console.log('\n🎉 Seed complete!')
  console.log(`   Admin login: ${ADMIN_EMAIL} / ${ADMIN_PASSWORD}`)
  console.log('   Go to: http://localhost:3000/admin/login\n')
  await mongoose.disconnect()
}

seed().catch((err) => {
  console.error('❌ Seed failed:', err)
  process.exit(1)
})
