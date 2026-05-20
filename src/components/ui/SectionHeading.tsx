'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { fadeUp, goldUnderline, viewportOptions } from '@/lib/animations'

interface SectionHeadingProps {
  eyebrow?: string
  heading: string
  goldWord?: string
  align?: 'left' | 'center'
  className?: string
}

export default function SectionHeading({
  eyebrow,
  heading,
  goldWord,
  align = 'left',
  className,
}: SectionHeadingProps) {
  const isCenter = align === 'center'

  const renderHeading = () => {
    if (!goldWord) return heading
    const parts = heading.split(new RegExp(`(${goldWord})`, 'i'))
    return parts.map((part, i) =>
      part.toLowerCase() === goldWord.toLowerCase() ? (
        <span key={i} className="text-gold">
          {part}
        </span>
      ) : (
        part
      )
    )
  }

  return (
    <motion.div
      className={cn('mb-12', isCenter && 'text-center', className)}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOptions}
    >
      {eyebrow && (
        <motion.p
          variants={fadeUp}
          className="text-gold text-xs font-body font-semibold uppercase tracking-[0.2em] mb-3"
        >
          {eyebrow}
        </motion.p>
      )}
      <motion.h2
        variants={fadeUp}
        className="font-display text-display-xl uppercase text-white leading-none"
      >
        {renderHeading()}
      </motion.h2>
      <motion.div
        variants={goldUnderline}
        className={cn(
          'mt-4 h-[3px] w-12 bg-gold',
          isCenter && 'mx-auto'
        )}
      />
    </motion.div>
  )
}
