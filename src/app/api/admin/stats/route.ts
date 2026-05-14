import { NextResponse } from 'next/server'
import { connectDB } from '@/lib/db'
import { requireAdmin } from '@/lib/adminAuth'
import Order from '@/models/Order'
import Product from '@/models/Product'
import User from '@/models/User'

export async function GET() {
  const { error } = await requireAdmin()
  if (error) return error

  try {
    await connectDB()

    const [
      totalProducts,
      totalOrders,
      pendingOrders,
      packedOrders,
      deliveredOrders,
      totalCustomers,
      revenueAgg,
      recentOrders,
      lowStockProducts,
    ] = await Promise.all([
      Product.countDocuments({ active: true }),
      Order.countDocuments(),
      Order.countDocuments({ status: 'Pending' }),
      Order.countDocuments({ status: 'Packed' }),
      Order.countDocuments({ status: 'Delivered' }),
      User.countDocuments({ role: 'customer' }),
      Order.aggregate([
        { $match: { paymentStatus: 'Paid' } },
        { $group: { _id: null, total: { $sum: '$total' } } },
      ]),
      Order.find()
        .sort({ createdAt: -1 })
        .limit(10)
        .select('orderNumber customer total status paymentStatus createdAt items'),
      Product.find({ stock: { $lt: 10 }, active: true })
        .sort({ stock: 1 })
        .limit(8)
        .select('name stock category images price'),
    ])

    const totalRevenue = revenueAgg[0]?.total ?? 0

    return NextResponse.json({
      stats: {
        totalProducts,
        totalOrders,
        pendingOrders,
        packedOrders,
        deliveredOrders,
        totalRevenue,
        totalCustomers,
      },
      recentOrders,
      lowStockProducts,
    })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
