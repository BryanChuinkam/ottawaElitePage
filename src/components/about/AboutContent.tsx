'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import CoachCard from '@/components/about/CoachCard'
import SectionHeading from '@/components/ui/SectionHeading'
import CourtPattern from '@/components/ui/CourtPattern'
import { COACHES } from '@/data/coaches'
import { staggerContainer, staggerChild, slideFromLeft, fadeUp, viewportOptions } from '@/lib/animations'
import { REGISTRATION_URL } from '@/lib/constants'

export default function AboutContent() {
  const oybCoaches = COACHES.filter(
    (c) => !['jo-jean-pierre', 'phil-miguel', 'osvaldo-jeanty', 'jafeth-maseruka'].includes(c.id)
  )
  const prepCoaches = COACHES.filter((c) =>
    ['jo-jean-pierre', 'phil-miguel', 'osvaldo-jeanty', 'jafeth-maseruka'].includes(c.id)
  )

  return (
    <>
      <section className="relative pt-32 pb-24 bg-jet overflow-hidden">
        <CourtPattern opacity={0.05} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-gold text-xs font-body font-semibold uppercase tracking-[0.2em] mb-4">Our Story</p>
          <h1 className="font-display text-display-2xl uppercase text-white">
            About <span className="text-gold">Ottawa Elite</span>
          </h1>
        </div>
      </section>

      <section className="py-20 bg-jet-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              variants={slideFromLeft}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOptions}
            >
              <p className="text-gold text-xs font-body font-semibold uppercase tracking-[0.2em] mb-4">Mission</p>
              <h2 className="font-display text-display-xl uppercase text-white leading-none mb-6">
                Eastern Ontario&apos;s Premier <span className="text-gold">Basketball</span> Program
              </h2>
              <p className="text-white/70 font-body text-lg leading-relaxed mb-6">
                Ottawa Elite identifies and develops the top basketball players in Eastern Ontario
                and the Outaouais Region through superior instruction and competitive play.
              </p>
              <p className="text-white/50 font-body leading-relaxed">
                Built on four pillars: elite training environments, instruction from experienced
                coaches, access to high-level competition, and affordable participation for
                talented athletes regardless of financial background.
              </p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOptions}
              className="relative"
            >
              <div className="relative aspect-[4/3] rounded-card overflow-hidden">
                <Image
                  src="/images/gallery/photo-02.jpg"
                  alt="Ottawa Elite basketball"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-jet/60 to-transparent" />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-gold text-jet p-4 rounded-card shadow-gold-md max-w-[200px]">
                <p className="font-display text-sm uppercase leading-tight">Training at Carleton University High Performance Centre</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-jet">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeading eyebrow="What We Stand For" heading="Our Values" align="center" />
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
          >
            {[
              { title: 'Elite Development', body: 'Every practice, every rep, every game is designed to push players toward their ceiling. We train with intention.' },
              { title: 'High Competition', body: 'CYBL, NPH, EOBL, and AAU circuits provide our athletes with the most competitive exposure in Eastern Canada.' },
              { title: 'Accessible Excellence', body: "Great coaching shouldn't require a great bank account. We keep fees accessible so talent, not finances, is the deciding factor." },
            ].map((v) => (
              <motion.div
                key={v.title}
                variants={staggerChild}
                className="bg-jet-200 border border-jet-300 rounded-card p-6 group hover:border-gold/50 transition-colors"
              >
                <div className="w-8 h-1 bg-gold rounded-full mb-4" />
                <h3 className="font-display text-xl uppercase text-white mb-3">{v.title}</h3>
                <p className="text-white/60 font-body text-sm leading-relaxed">{v.body}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-jet-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeading eyebrow="Ottawa Youth Basketball Academy" heading="OYBA Coaching Staff" />
          <motion.div
            className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-9 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
          >
            {oybCoaches.map((coach) => (
              <motion.div key={coach.id} variants={staggerChild}>
                <CoachCard coach={coach} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-jet">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeading eyebrow="Ottawa Elite Prep" heading="Prep Coaching Staff" />
          <motion.div
            className="grid grid-cols-2 sm:grid-cols-4 gap-8 max-w-lg"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
          >
            {prepCoaches.map((coach) => (
              <motion.div key={coach.id} variants={staggerChild}>
                <CoachCard coach={coach} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-gold text-jet text-center relative overflow-hidden">
        <div className="relative max-w-xl mx-auto px-4">
          <h2 className="font-display text-display-xl uppercase leading-none">Join the Program</h2>
          <p className="font-body text-jet/70 mt-4 mb-8">
            Tryouts are open for all age groups. Start your journey with Ottawa Elite today.
          </p>
          <Link
            href={REGISTRATION_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-jet text-white font-body font-bold px-10 py-4 rounded-card hover:bg-jet-300 transition-all text-lg"
          >
            Register for Tryouts →
          </Link>
        </div>
      </section>
    </>
  )
}
