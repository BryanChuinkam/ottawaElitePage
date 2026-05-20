'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import Badge from '@/components/ui/Badge'
import { staggerChild } from '@/lib/animations'
import type { TeamProgram } from '@/types'
import CourtPattern from '@/components/ui/CourtPattern'

interface TeamCardProps {
  team: TeamProgram
}

export default function TeamCard({ team }: TeamCardProps) {
  return (
    <motion.div
      variants={staggerChild}
      className="group relative bg-jet-200 border border-jet-300 hover:border-gold/60 rounded-card overflow-hidden transition-colors duration-300 flex flex-col"
    >
      {/* Card header with court pattern */}
      <div className="relative bg-gradient-to-br from-jet-300 to-jet-400 px-6 pt-8 pb-6 overflow-hidden min-h-[120px] flex flex-col justify-end">
        <CourtPattern opacity={0.08} />
        <div className="relative z-10 flex items-end justify-between gap-2">
          <h3 className="font-display text-display-lg uppercase text-white leading-none">
            {team.ageGroup}
          </h3>
          <Badge variant={team.gender === 'Girls' ? 'outline' : 'gold'}>
            {team.gender}
          </Badge>
        </div>
      </div>

      {/* Card body */}
      <div className="p-6 flex flex-col gap-4 flex-1">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-gold text-xs font-body font-bold uppercase tracking-widest">
            {team.grade}
          </span>
          <span className="text-white/20">·</span>
          <span className="text-white/50 text-xs font-body uppercase tracking-wider">
            {team.division}
          </span>
        </div>

        <p className="text-white/60 text-sm font-body leading-relaxed flex-1">
          {team.description}
        </p>

        {/* Training location */}
        <div className="text-xs font-body text-white/40 flex items-center gap-1.5">
          <svg className="w-3.5 h-3.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          </svg>
          Carleton University High Performance Centre
        </div>

        {team.coaches.length > 0 && (
          <div className="text-xs font-body text-white/50 border-t border-jet-300 pt-4">
            <span className="text-white/30 uppercase tracking-widest text-[10px]">Coaches</span>
            <p className="mt-1">{team.coaches.join(' · ')}</p>
          </div>
        )}

        <Link
          href={team.tryoutUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 w-full inline-flex items-center justify-center bg-gold text-jet font-body font-bold py-3 rounded-card hover:bg-gold-light transition-all shadow-gold-sm hover:shadow-gold-md text-sm"
        >
          Register for Tryouts
        </Link>
      </div>
    </motion.div>
  )
}
