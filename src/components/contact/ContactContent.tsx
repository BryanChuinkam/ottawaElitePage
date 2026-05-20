'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import CourtPattern from '@/components/ui/CourtPattern'
import { cn } from '@/lib/utils'
import { CONTACT_ADDRESS, REGISTRATION_URL, SOCIAL } from '@/lib/constants'

const schema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().optional(),
  subject: z.enum(['general', 'tryout', 'sponsorship', 'media'] as const, {
    error: 'Please select a subject',
  }),
  message: z.string().min(10, 'Message must be at least 10 characters'),
  _honeypot: z.string().max(0).optional(),
})

type FormData = z.infer<typeof schema>

const inputClass =
  'w-full bg-jet-200 border border-jet-300 rounded-card px-4 py-3 text-white font-body text-sm placeholder:text-white/30 focus:outline-none focus:border-gold/60 transition-colors'
const labelClass =
  'block text-xs font-body font-semibold uppercase tracking-widest text-white/50 mb-2'

export default function ContactContent() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  })

  const onSubmit = async (data: FormData) => {
    setStatus('loading')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (!res.ok) throw new Error()
      setStatus('success')
      reset()
    } catch {
      setStatus('error')
    }
  }

  return (
    <>
      <section className="relative pt-32 pb-20 bg-jet overflow-hidden">
        <CourtPattern opacity={0.04} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-gold text-xs font-body font-semibold uppercase tracking-[0.2em] mb-4">Get in Touch</p>
          <h1 className="font-display text-display-2xl uppercase text-white">
            Contact <span className="text-gold">Us</span>
          </h1>
        </div>
      </section>

      <section className="py-16 bg-jet">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="font-display text-xl uppercase text-white mb-4">Register Now</h2>
              <p className="text-white/50 font-body text-sm leading-relaxed mb-4">
                Ready to try out? Registration is open for all age groups via our partner portal.
              </p>
              <Link
                href={REGISTRATION_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gold text-jet font-body font-bold px-6 py-3 rounded-card hover:bg-gold-light transition-all shadow-gold-sm text-sm"
              >
                Register for Tryouts →
              </Link>
            </div>

            <div className="h-px bg-jet-300" />

            <div>
              <h3 className="font-display text-lg uppercase text-white mb-3">Location</h3>
              <address className="not-italic text-white/50 font-body text-sm leading-relaxed">
                {CONTACT_ADDRESS}
              </address>
            </div>

            <div>
              <h3 className="font-display text-lg uppercase text-white mb-3">Follow Us</h3>
              <div className="flex gap-4">
                <a href={SOCIAL.instagram} target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-gold transition-colors font-body text-sm font-semibold">Instagram</a>
                <a href={SOCIAL.facebook} target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-gold transition-colors font-body text-sm font-semibold">Facebook</a>
                <a href={SOCIAL.twitter} target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-gold transition-colors font-body text-sm font-semibold">Twitter/X</a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <AnimatePresence mode="wait">
              {status === 'success' ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-jet-200 border border-gold/30 rounded-card p-8 text-center"
                >
                  <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="font-display text-xl uppercase text-white mb-2">Message Sent!</h3>
                  <p className="text-white/50 font-body text-sm">We&apos;ll get back to you as soon as possible.</p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="mt-6 text-gold font-body font-semibold text-sm hover:text-gold-light transition-colors"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit(onSubmit)}
                  className="space-y-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <input type="text" {...register('_honeypot')} className="hidden" tabIndex={-1} aria-hidden />

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className={labelClass}>Name *</label>
                      <input {...register('name')} className={cn(inputClass, errors.name && 'border-red-500/50')} placeholder="Your name" />
                      {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name.message}</p>}
                    </div>
                    <div>
                      <label className={labelClass}>Email *</label>
                      <input {...register('email')} type="email" className={cn(inputClass, errors.email && 'border-red-500/50')} placeholder="your@email.com" />
                      {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className={labelClass}>Phone (optional)</label>
                      <input {...register('phone')} type="tel" className={inputClass} placeholder="(613) 000-0000" />
                    </div>
                    <div>
                      <label className={labelClass}>Subject *</label>
                      <select {...register('subject')} className={cn(inputClass, 'cursor-pointer', errors.subject && 'border-red-500/50')}>
                        <option value="">Select a subject</option>
                        <option value="general">General Inquiry</option>
                        <option value="tryout">Tryout Information</option>
                        <option value="sponsorship">Sponsorship</option>
                        <option value="media">Media</option>
                      </select>
                      {errors.subject && <p className="text-red-400 text-xs mt-1">{errors.subject.message}</p>}
                    </div>
                  </div>

                  <div>
                    <label className={labelClass}>Message *</label>
                    <textarea
                      {...register('message')}
                      rows={6}
                      className={cn(inputClass, 'resize-none', errors.message && 'border-red-500/50')}
                      placeholder="How can we help you?"
                    />
                    {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message.message}</p>}
                  </div>

                  {status === 'error' && (
                    <p className="text-red-400 text-sm font-body">Something went wrong. Please try again.</p>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full bg-gold text-jet font-body font-bold py-4 rounded-card hover:bg-gold-light transition-all shadow-gold-sm hover:shadow-gold-md disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {status === 'loading' ? 'Sending...' : 'Send Message'}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>
    </>
  )
}
