import { NextRequest, NextResponse } from 'next/server'
import { connectDB } from '@/lib/db'
import Product from '@/models/Product'

export async function GET(req: NextRequest) {
  try {
    await connectDB()

    const { searchParams } = new URL(req.url)
    const category = searchParams.get('category') ?? ''
    const featured = searchParams.get('featured') === 'true'
    const bestSeller = searchParams.get('bestSeller') === 'true'
    const limit = parseInt(searchParams.get('limit') ?? '20')
    const search = searchParams.get('search') ?? ''

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const query: any = { active: true }
    if (category) query.category = category
    if (featured) query.featured = true
    if (bestSeller) query.bestSeller = true
    if (search) query.$text = { $search: search }

    const products = await Product.find(query).sort({ createdAt: -1 }).limit(limit)
    return NextResponse.json({ products })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}