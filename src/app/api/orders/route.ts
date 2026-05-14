import { NextRequest, NextResponse } from 'next/server'
export const dynamic = 'force-dynamic'
import { connectDB } from '@/lib/db'
import Order from '@/models/Order'

export async function GET() {
  return NextResponse.json({ message: 'Orders API — use POST to create an order' })
}

export async function POST(req: NextRequest) {
  try {
    await connectDB()
    const body = await req.json()

    const { customer, shippingAddress, items, subtotal, shippingCharge = 0, tax = 0, total, paymentMethod = 'COD', couponCode, discount = 0 } = body

    if (!customer?.name || !customer?.email || !customer?.phone) {
      return NextResponse.json({ error: 'Customer name, email, and phone are required' }, { status: 400 })
    }
    if (!items || items.length === 0) {
      return NextResponse.json({ error: 'Order must have at least one item' }, { status: 400 })
    }
    if (!shippingAddress?.street || !shippingAddress?.city || !shippingAddress?.pincode) {
      return NextResponse.json({ error: 'Complete shipping address is required' }, { status: 400 })
    }

    const order = await Order.create({
      customer,
      shippingAddress,
      items,
      subtotal,
      shippingCharge,
      tax,
      total,
      paymentMethod,
      couponCode,
      discount,
    })

    return NextResponse.json({ order }, { status: 201 })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}