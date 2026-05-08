import { NextRequest, NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({ message: 'Orders API' })
}

export async function POST(request: NextRequest) {
  return NextResponse.json({ message: 'Order created' })
}