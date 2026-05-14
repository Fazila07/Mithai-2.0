import { NextRequest, NextResponse } from 'next/server'
import { connectDB } from '@/lib/db'
import { requireAdmin } from '@/lib/adminAuth'
import Order from '@/models/Order'

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  const { error } = await requireAdmin()
  if (error) return error

  try {
    await connectDB()
    const order = await Order.findById(params.id)
    if (!order) return NextResponse.json({ error: 'Order not found' }, { status: 404 })
    return NextResponse.json({ order })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

export async function PATCH(req: NextRequest, { params }: { params: { id: string } }) {
  const { error } = await requireAdmin()
  if (error) return error

  try {
    await connectDB()
    const body = await req.json()
    const order = await Order.findByIdAndUpdate(params.id, body, { new: true, runValidators: true })
    if (!order) return NextResponse.json({ error: 'Order not found' }, { status: 404 })
    return NextResponse.json({ order })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
