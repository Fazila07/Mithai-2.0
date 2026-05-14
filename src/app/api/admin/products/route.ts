import { NextRequest, NextResponse } from 'next/server'
import { connectDB } from '@/lib/db'
import { requireAdmin } from '@/lib/adminAuth'
import Product from '@/models/Product'

function slugify(name: string) {
  return name
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
}

export async function GET(req: NextRequest) {
  const { error } = await requireAdmin()
  if (error) return error

  try {
    await connectDB()

    const { searchParams } = new URL(req.url)
    const page = parseInt(searchParams.get('page') ?? '1')
    const limit = parseInt(searchParams.get('limit') ?? '20')
    const search = searchParams.get('search') ?? ''
    const category = searchParams.get('category') ?? ''
    const sort = searchParams.get('sort') ?? '-createdAt'
    const activeOnly = searchParams.get('active')

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const query: any = {}
    if (search) query.$text = { $search: search }
    if (category) query.category = category
    if (activeOnly === 'true') query.active = true
    if (activeOnly === 'false') query.active = false

    const skip = (page - 1) * limit
    const [products, total] = await Promise.all([
      Product.find(query).sort(sort).skip(skip).limit(limit),
      Product.countDocuments(query),
    ])

    return NextResponse.json({
      products,
      pagination: { page, limit, total, pages: Math.ceil(total / limit) },
    })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

export async function POST(req: NextRequest) {
  const { error } = await requireAdmin()
  if (error) return error

  try {
    await connectDB()
    const body = await req.json()

    if (!body.name || !body.category || !body.price) {
      return NextResponse.json({ error: 'Name, category, and price are required' }, { status: 400 })
    }

    // Auto-generate slug if not provided
    if (!body.slug) {
      body.slug = slugify(body.name)
    }

    // Ensure slug is unique
    const existing = await Product.findOne({ slug: body.slug })
    if (existing) {
      body.slug = `${body.slug}-${Date.now()}`
    }

    const product = await Product.create(body)
    return NextResponse.json({ product }, { status: 201 })
  } catch (err: unknown) {
    console.error(err)
    if (err instanceof Error && err.message.includes('duplicate key')) {
      return NextResponse.json({ error: 'Product slug already exists' }, { status: 409 })
    }
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
