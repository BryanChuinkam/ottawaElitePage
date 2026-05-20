'use client'

import { motion } from 'framer-motion'
import AnimatedCounter from '@/components/ui/AnimatedCounter'
import { staggerContainer, staggerChild, viewportOptions } from '@/lib/animations'
import type { StatItem } from '@/types'

const STATS: StatItem[] = [
  { label: 'Seasons of Excellence', value: 10, suffix: '+' },
  { label: 'Players Developed', value: 500, suffix: '+' },
  { label: 'Championships', value: 25, suffix: '+' },
  { label: 'Active Programs', value: 8 },
]

export default function StatsBar() {
  return (
    <section className="bg-gold py-12 md:py-16 relative overflow-hidden">
      {/* Subtle texture */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full" style={{ backgroundImage: 'repeating-linear-gradient(45deg, #000 0, #000 1px, transparent 0, transparent 50%)', backgroundSize: '10px 10px' }} />
      </div>

      <motion.div
        className="relative max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-4"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOptions}
      >
        {STATS.map((stat) => (
          <motion.div
            key={stat.label}
            variants={staggerChild}
            className="text-center"
          >
            <div className="font-display text-display-xl text-jet leading-none">
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />
            </div>
            <p className="font-body text-jet/70 text-sm font-semibold uppercase tracking-wider mt-2">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
