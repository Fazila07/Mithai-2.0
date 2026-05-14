import { NextRequest, NextResponse } from 'next/server'
import { connectDB } from '@/lib/db'
import { requireAdmin } from '@/lib/adminAuth'
import Coupon from '@/models/Coupon'

export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
  const { error } = await requireAdmin()
  if (error) return error

  try {
    await connectDB()
    const body = await req.json()
    const coupon = await Coupon.findByIdAndUpdate(params.id, body, { new: true, runValidators: true })
    if (!coupon) return NextResponse.json({ error: 'Coupon not found' }, { status: 404 })
    return NextResponse.json({ coupon })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  const { error } = await requireAdmin()
  if (error) return error

  try {
    await connectDB()
    const coupon = await Coupon.findByIdAndDelete(params.id)
    if (!coupon) return NextResponse.json({ error: 'Coupon not found' }, { status: 404 })
    return NextResponse.json({ message: 'Coupon deleted' })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
