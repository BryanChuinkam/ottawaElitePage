'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import TeamCard from '@/components/teams/TeamCard'
import SectionHeading from '@/components/ui/SectionHeading'
import CourtPattern from '@/components/ui/CourtPattern'
import { TEAMS } from '@/data/teams'
import { staggerContainer, viewportOptions } from '@/lib/animations'
import { REGISTRATION_URL } from '@/lib/constants'

export default function TeamsContent() {
  const oybTeams = TEAMS.filter((t) => ['u13', 'u14', 'u15', 'u16'].includes(t.id))
  const prepTeams = TEAMS.filter((t) => t.id.startsWith('prep'))
  const evoTeams = TEAMS.filter((t) => t.id.startsWith('evo'))

  return (
    <>
      <section className="relative pt-32 pb-20 bg-jet overflow-hidden">
        <CourtPattern opacity={0.04} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-gold text-xs font-body font-semibold uppercase tracking-[0.2em] mb-4">
            2025-26 Season
          </p>
          <h1 className="font-display text-display-2xl uppercase text-white">
            Our <span className="text-gold">Programs</span>
          </h1>
          <p className="text-white/60 text-lg font-body max-w-2xl mx-auto mt-6">
            Eight competitive programs spanning U13 to Elite Prep — all training at Carleton
            University&apos;s High Performance Centre.
          </p>
        </div>
      </section>

      <section className="py-20 bg-jet">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeading eyebrow="Ottawa Youth Basketball Academy" heading="OYBA Teams" />
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
          >
            {oybTeams.map((team) => (
              <TeamCard key={team.id} team={team} />
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-jet-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeading eyebrow="Pathway to Post-Secondary" heading="Elite Prep" goldWord="Prep" />
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
          >
            {prepTeams.map((team) => (
              <TeamCard key={team.id} team={team} />
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-jet">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeading eyebrow="AAU Tournament Circuit" heading="EVO Teams" />
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
          >
            {evoTeams.map((team) => (
              <TeamCard key={team.id} team={team} />
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-gold text-jet text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full" style={{ backgroundImage: 'repeating-linear-gradient(45deg, #000 0, #000 1px, transparent 0, transparent 50%)', backgroundSize: '10px 10px' }} />
        </div>
        <div className="relative max-w-2xl mx-auto px-4">
          <h2 className="font-display text-display-xl uppercase leading-none">Ready to Compete?</h2>
          <p className="font-body text-jet/70 mt-4 mb-8">
            Tryouts are open. Take the first step toward becoming Ottawa Elite.
          </p>
          <Link
            href={REGISTRATION_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-jet text-white font-body font-bold px-10 py-4 rounded-card hover:bg-jet-300 transition-all text-lg"
          >
            Register Now →
          </Link>
        </div>
      </section>
    </>
  )
}
