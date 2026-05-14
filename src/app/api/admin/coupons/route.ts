import { NextRequest, NextResponse } from 'next/server'
export const dynamic = 'force-dynamic'
import { connectDB } from '@/lib/db'
import { requireAdmin } from '@/lib/adminAuth'
import Coupon from '@/models/Coupon'

export async function GET(req: NextRequest) {
  const { error } = await requireAdmin()
  if (error) return error

  try {
    await connectDB()
    const { searchParams } = new URL(req.url)
    const page = parseInt(searchParams.get('page') ?? '1')
    const limit = parseInt(searchParams.get('limit') ?? '20')
    const skip = (page - 1) * limit

    const [coupons, total] = await Promise.all([
      Coupon.find().sort({ createdAt: -1 }).skip(skip).limit(limit),
      Coupon.countDocuments(),
    ])

    return NextResponse.json({
      coupons,
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
    if (!body.code || !body.discountType || !body.value || !body.expiryDate) {
      return NextResponse.json({ error: 'code, discountType, value, expiryDate are required' }, { status: 400 })
    }
    const coupon = await Coupon.create(body)
    return NextResponse.json({ coupon }, { status: 201 })
  } catch (err: unknown) {
    console.error(err)
    if (err instanceof Error && err.message.includes('duplicate key')) {
      return NextResponse.json({ error: 'Coupon code already exists' }, { status: 409 })
    }
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
