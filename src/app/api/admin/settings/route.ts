import { NextRequest, NextResponse } from 'next/server'
import { connectDB } from '@/lib/db'
import { requireAdmin } from '@/lib/adminAuth'
import StoreSettings from '@/models/StoreSettings'

export async function GET() {
  const { error } = await requireAdmin()
  if (error) return error

  try {
    await connectDB()
    let settings = await StoreSettings.findOne()
    if (!settings) {
      settings = await StoreSettings.create({})
    }
    return NextResponse.json({ settings })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

export async function PUT(req: NextRequest) {
  const { error } = await requireAdmin()
  if (error) return error

  try {
    await connectDB()
    const body = await req.json()
    let settings = await StoreSettings.findOne()
    if (!settings) {
      settings = await StoreSettings.create(body)
    } else {
      Object.assign(settings, body)
      await settings.save()
    }
    return NextResponse.json({ settings })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
