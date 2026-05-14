import { NextRequest, NextResponse } from 'next/server'
import { connectDB } from '@/lib/db'
import { requireAdmin } from '@/lib/adminAuth'
import Product from '@/models/Product'

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  const { error } = await requireAdmin()
  if (error) return error

  try {
    await connectDB()
    const product = await Product.findById(params.id)
    if (!product) return NextResponse.json({ error: 'Product not found' }, { status: 404 })
    return NextResponse.json({ product })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
  const { error } = await requireAdmin()
  if (error) return error

  try {
    await connectDB()
    const body = await req.json()
    const product = await Product.findByIdAndUpdate(params.id, body, { new: true, runValidators: true })
    if (!product) return NextResponse.json({ error: 'Product not found' }, { status: 404 })
    return NextResponse.json({ product })
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
    const product = await Product.findByIdAndDelete(params.id)
    if (!product) return NextResponse.json({ error: 'Product not found' }, { status: 404 })
    return NextResponse.json({ message: 'Product deleted' })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
