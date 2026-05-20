'use client'

import { motion, useReducedMotion } from 'framer-motion'
import type { CSSProperties } from 'react'

function BasketballSVG({ opacity = 1 }: { opacity?: number }) {
  return (
    <svg
      viewBox="0 0 100 100"
      width="100%"
      height="100%"
      xmlns="http://www.w3.org/2000/svg"
      style={{ opacity }}
      aria-hidden="true"
    >
      <circle cx="50" cy="50" r="49" fill="#E8622A" stroke="#CC4A18" strokeWidth="1.5" />
      {/* Horizontal equator seam */}
      <path
        d="M 1 50 C 25 38, 75 38, 99 50"
        stroke="#1A0A00"
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
      />
      {/* Left vertical seam */}
      <path
        d="M 50 1 C 20 25, 20 75, 50 99"
        stroke="#1A0A00"
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
      />
      {/* Right vertical seam */}
      <path
        d="M 50 1 C 80 25, 80 75, 50 99"
        stroke="#1A0A00"
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
      />
      {/* Specular highlight */}
      <ellipse
        cx="34"
        cy="28"
        rx="10"
        ry="7"
        fill="rgba(255,255,255,0.12)"
        transform="rotate(-20 34 28)"
      />
    </svg>
  )
}

interface BallUnitProps {
  size: string
  floatDistance: number
  floatDuration: number
  floatDelay: number
  rotationDuration: number
  rotationDirection: 1 | -1
  ballOpacity: number
  style: CSSProperties
}

function BallUnit({
  size,
  floatDistance,
  floatDuration,
  floatDelay,
  rotationDuration,
  rotationDirection,
  ballOpacity,
  style,
}: BallUnitProps) {
  return (
    <div style={{ position: 'absolute', ...style, width: size, height: size }}>
      {/* Shadow — synced with float timing */}
      <motion.div
        style={{
          position: 'absolute',
          bottom: -8,
          left: '50%',
          x: '-50%',
          width: '60%',
          height: 8,
          background: 'radial-gradient(ellipse, rgba(0,0,0,0.7) 0%, transparent 70%)',
          borderRadius: '50%',
          transformOrigin: 'center',
          willChange: 'transform, opacity',
        }}
        animate={{ scaleX: [1, 1.4, 1], opacity: [0.5, 0.15, 0.5] }}
        transition={{
          duration: floatDuration,
          ease: 'easeInOut',
          repeat: Infinity,
          delay: floatDelay,
        }}
      />

      {/* Float wrapper */}
      <motion.div
        style={{ width: '100%', height: '100%', willChange: 'transform' }}
        animate={{ y: [0, -floatDistance, 0] }}
        transition={{
          duration: floatDuration,
          ease: 'easeInOut',
          repeat: Infinity,
          delay: floatDelay,
        }}
      >
        {/* Rotate wrapper */}
        <motion.div
          style={{ width: '100%', height: '100%', willChange: 'transform' }}
          animate={{ rotate: [0, 360 * rotationDirection] }}
          transition={{
            duration: rotationDuration,
            ease: 'linear',
            repeat: Infinity,
          }}
        >
          <BasketballSVG opacity={ballOpacity} />
        </motion.div>
      </motion.div>
    </div>
  )
}

const SPARKLES = [
  { top: '18%', left: '72%', size: 4, duration: 2.2, delay: 0,   maxOpacity: 0.60 },
  { top: '35%', left: '85%', size: 3, duration: 3.1, delay: 0.7, maxOpacity: 0.50 },
  { top: '12%', left: '55%', size: 5, duration: 2.7, delay: 1.4, maxOpacity: 0.45 },
  { top: '60%', left: '78%', size: 3, duration: 3.8, delay: 0.3, maxOpacity: 0.55 },
  { top: '28%', left: '40%', size: 4, duration: 2.4, delay: 2.0, maxOpacity: 0.40 },
]

export default function AnimatedBasketballBg() {
  const prefersReduced = useReducedMotion()

  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none bg-jet"
      aria-hidden="true"
      role="presentation"
    >
      {/* Large ball — upper right */}
      <BallUnit
        size="55vmin"
        floatDistance={prefersReduced ? 0 : 15}
        floatDuration={3}
        floatDelay={0}
        rotationDuration={12}
        rotationDirection={1}
        ballOpacity={0.55}
        style={{ top: '-5vmin', right: '-12vmin' }}
      />

      {/* Medium ball — left center */}
      <BallUnit
        size="25vmin"
        floatDistance={prefersReduced ? 0 : 12}
        floatDuration={4}
        floatDelay={1.2}
        rotationDuration={18}
        rotationDirection={-1}
        ballOpacity={0.25}
        style={{ top: '25%', left: '-6vmin' }}
      />

      {/* Gold sparkle dots */}
      {SPARKLES.map((dot, i) => (
        <motion.div
          key={i}
          style={{
            position: 'absolute',
            top: dot.top,
            left: dot.left,
            width: dot.size,
            height: dot.size,
            borderRadius: '50%',
            background: '#FFB800',
          }}
          animate={prefersReduced ? {} : { opacity: [0, dot.maxOpacity, 0] }}
          transition={{
            duration: dot.duration,
            ease: 'easeInOut',
            repeat: Infinity,
            delay: dot.delay,
          }}
        />
      ))}
    </div>
  )
}
