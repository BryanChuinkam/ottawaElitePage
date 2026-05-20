'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import Badge from '@/components/ui/Badge'
import SectionHeading from '@/components/ui/SectionHeading'
import { staggerContainer, staggerChild, viewportOptions } from '@/lib/animations'
import type { TeamProgram } from '@/types'

interface ProgramsPreviewProps {
  programs: TeamProgram[]
}

const divisionColor: Record<string, string> = {
  'CYBL / NPH / EOBL': 'gold',
  'Elite Prep': 'gold',
  AAU: 'outline',
}

export default function ProgramsPreview({ programs }: ProgramsPreviewProps) {
  return (
    <section className="py-24 bg-jet">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeading
          eyebrow="Our Programs"
          heading="Train With The"
          goldWord="Elite"
        />

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
        >
          {programs.map((program) => (
            <motion.div
              key={program.id}
              variants={staggerChild}
              whileHover={{ scale: 1.02, y: -4 }}
              transition={{ duration: 0.2 }}
              className="group relative bg-jet-200 border border-jet-300 hover:border-gold/50 rounded-card p-6 flex flex-col gap-4 transition-colors duration-300"
            >
              {/* Gold left accent bar */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gold rounded-l-card opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="flex items-start justify-between gap-2">
                <h3 className="font-display text-display-lg uppercase text-white leading-none">
                  {program.ageGroup}
                </h3>
                <Badge variant={(divisionColor[program.division] as 'gold' | 'outline') ?? 'outline'}>
                  {program.gender}
                </Badge>
              </div>

              <p className="text-xs font-body font-semibold uppercase tracking-widest text-gold">
                {program.division}
              </p>

              <p className="text-white/60 text-sm font-body leading-relaxed flex-1">
                {program.description}
              </p>

              {program.coaches.length > 0 && (
                <p className="text-white/40 text-xs font-body">
                  {program.coaches.slice(0, 2).join(' · ')}
                </p>
              )}

              <Link
                href="/teams"
                className="text-gold text-sm font-body font-semibold hover:text-gold-light transition-colors mt-auto"
              >
                Learn More →
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-12 text-center">
          <Link
            href="/teams"
            className="border-2 border-gold/40 text-gold font-body font-semibold px-8 py-3 rounded-card hover:border-gold hover:bg-gold hover:text-jet transition-all duration-200 inline-block"
          >
            View All Programs
          </Link>
        </div>
      </div>
    </section>
  )
}
