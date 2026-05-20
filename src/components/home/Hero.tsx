'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import CourtPattern from '@/components/ui/CourtPattern'
import AnimatedBasketballBg from '@/components/ui/AnimatedBasketballBg'
import { heroStagger, heroChild } from '@/lib/animations'
import { REGISTRATION_URL } from '@/lib/constants'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-end overflow-hidden">
      {/* Animated basketball background */}
      <AnimatedBasketballBg />

      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-hero-gradient" />

      {/* Gold radial glow at top */}
      <div className="absolute inset-0 bg-gold-radial" />

      {/* Court pattern */}
      <CourtPattern opacity={0.06} />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 pb-24 md:pb-32">
        <motion.div
          variants={heroStagger}
          initial="hidden"
          animate="visible"
          className="max-w-4xl"
        >
          <motion.p
            variants={heroChild}
            className="text-gold text-xs font-body font-semibold uppercase tracking-[0.25em] mb-6"
          >
            Ottawa&apos;s Premier Youth Basketball Program
          </motion.p>

          <motion.h1
            variants={heroChild}
            className="font-display text-display-2xl uppercase leading-none text-white mb-6"
          >
            Elite Talent.
            <br />
            <span className="text-gold">Elite Training.</span>
            <br />
            Elite Results.
          </motion.h1>

          <motion.p
            variants={heroChild}
            className="text-white/70 text-lg md:text-xl font-body max-w-2xl mb-10 leading-relaxed"
          >
            Identifying and developing the top basketball players in Eastern Ontario and the
            Outaouais Region — training at Carleton University with Carleton Ravens mentorship.
          </motion.p>

          <motion.div variants={heroChild} className="flex flex-wrap gap-4">
            <Link
              href={REGISTRATION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gold text-jet font-body font-bold px-8 py-4 rounded-card hover:bg-gold-light transition-all shadow-gold-sm hover:shadow-gold-md text-base"
            >
              Register for Tryouts
            </Link>
            <Link
              href="/teams"
              className="border-2 border-white/40 text-white font-body font-semibold px-8 py-4 rounded-card hover:border-gold hover:text-gold transition-all text-base"
            >
              View Programs →
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom gradient fade into page */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-jet to-transparent" />
    </section>
  )
}
