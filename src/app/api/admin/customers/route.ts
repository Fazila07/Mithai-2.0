import { NextRequest, NextResponse } from 'next/server'
export const dynamic = 'force-dynamic'
import { connectDB } from '@/lib/db'
import { requireAdmin } from '@/lib/adminAuth'
import User from '@/models/User'
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

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const query: any = { role: 'customer' }
    if (search) {
      query.$or = [
        { name: { $regex: search, $options: 'i' } },
        { email: { $regex: search, $options: 'i' } },
        { phone: { $regex: search, $options: 'i' } },
      ]
    }

    const skip = (page - 1) * limit
    const [customers, total] = await Promise.all([
      User.find(query).sort({ createdAt: -1 }).skip(skip).limit(limit).select('-password'),
      User.countDocuments(query),
    ])

    // Enrich with order stats
    const enriched = await Promise.all(
      customers.map(async (c) => {
        const [orderCount, spentAgg] = await Promise.all([
          Order.countDocuments({ 'customer.email': c.email }),
          Order.aggregate([
            { $match: { 'customer.email': c.email, paymentStatus: 'Paid' } },
            { $group: { _id: null, total: { $sum: '$total' } } },
          ]),
        ])
        const lastOrder = await Order.findOne({ 'customer.email': c.email })
          .sort({ createdAt: -1 })
          .select('createdAt')
        return {
          ...c.toObject(),
          totalOrders: orderCount,
          totalSpent: spentAgg[0]?.total ?? 0,
          lastOrderDate: lastOrder?.createdAt ?? null,
        }
      })
    )

    return NextResponse.json({
      customers: enriched,
      pagination: { page, limit, total, pages: Math.ceil(total / limit) },
    })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
