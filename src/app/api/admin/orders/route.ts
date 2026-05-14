import { NextRequest, NextResponse } from 'next/server'
export const dynamic = 'force-dynamic'
import { connectDB } from '@/lib/db'
import { requireAdmin } from '@/lib/adminAuth'
import Order from '@/models/Order'

export async function GET(req: NextRequest) {
  const { error } = await requireAdmin()
  if (error) return error

  try {
    await connectDB()

    const { searchParams } = new URL(req.url)
    const page = parseInt(searchParams.get('page') ?? '1')
    const limit = parseInt(searchParams.get('limit') ?? '20')
    const search = searchParams.get('search') ?? ''
    const status = searchParams.get('status') ?? ''

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const query: any = {}
    if (status) query.status = status
    if (search) {
      query.$or = [
        { orderNumber: { $regex: search, $options: 'i' } },
        { 'customer.name': { $regex: search, $options: 'i' } },
        { 'customer.phone': { $regex: search, $options: 'i' } },
        { 'customer.email': { $regex: search, $options: 'i' } },
      ]
    }

    const skip = (page - 1) * limit
    const [orders, total] = await Promise.all([
      Order.find(query).sort({ createdAt: -1 }).skip(skip).limit(limit),
      Order.countDocuments(query),
    ])

    return NextResponse.json({
      orders,
      pagination: { page, limit, total, pages: Math.ceil(total / limit) },
    })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

export async function PATCH(req: NextRequest) {
  const { error } = await requireAdmin()
  if (error) return error

  try {
    await connectDB()
    const { ids, status } = await req.json()
    if (!ids || !Array.isArray(ids) || !status) {
      return NextResponse.json({ error: 'ids array and status are required' }, { status: 400 })
    }
    await Order.updateMany({ _id: { $in: ids } }, { status })
    return NextResponse.json({ message: `Updated ${ids.length} orders to ${status}` })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
