import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

const schema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  phone: z.string().optional(),
  subject: z.enum(['general', 'tryout', 'sponsorship', 'media'] as const),
  message: z.string().min(10).max(2000),
  _honeypot: z.string().max(0), // must be empty
})

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const parsed = schema.safeParse(body)

    if (!parsed.success) {
      return NextResponse.json({ error: 'Invalid form data' }, { status: 400 })
    }

    const { _honeypot, ...data } = parsed.data
    // Honeypot check — bots fill hidden fields
    if (_honeypot) {
      return NextResponse.json({ ok: true }) // silent discard
    }

    // In production: send via Resend, SendGrid, etc.
    // For now, log to server console
    console.log('[Contact Form]', data)

    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
