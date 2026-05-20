'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import SectionHeading from '@/components/ui/SectionHeading'
import { staggerContainer, staggerChild, viewportOptions } from '@/lib/animations'
import type { GalleryImage } from '@/types'

interface GalleryTeaserProps {
  images: GalleryImage[]
}

export default function GalleryTeaser({ images }: GalleryTeaserProps) {
  return (
    <section className="py-24 bg-jet">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-end justify-between mb-12">
          <SectionHeading eyebrow="Moments" heading="On The Court" className="mb-0" />
          <Link href="/gallery" className="text-gold font-body font-semibold text-sm hover:text-gold-light transition-colors hidden md:block">
            View Full Gallery →
          </Link>
        </div>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
        >
          {images.slice(0, 6).map((img, i) => (
            <motion.div
              key={img.id}
              variants={staggerChild}
              className={`relative overflow-hidden rounded-card group ${
                i === 0 ? 'row-span-2 aspect-[3/4] md:aspect-auto md:row-span-2' : 'aspect-video'
              }`}
              style={i === 0 ? { gridRow: 'span 2' } : {}}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-jet/30 group-hover:bg-jet/10 transition-colors duration-300" />
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-8 text-center">
          <Link
            href="/gallery"
            className="border-2 border-gold/40 text-gold font-body font-semibold px-8 py-3 rounded-card hover:border-gold hover:bg-gold hover:text-jet transition-all duration-200 inline-block"
          >
            View Full Gallery
          </Link>
        </div>
      </div>
    </section>
  )
}
