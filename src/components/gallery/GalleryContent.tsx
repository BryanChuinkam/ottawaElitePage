'use client'

import Image from 'next/image'
import { useState } from 'react'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'
import CourtPattern from '@/components/ui/CourtPattern'
import { GALLERY } from '@/data/gallery'

export default function GalleryContent() {
  const [index, setIndex] = useState(-1)

  return (
    <>
      <section className="relative pt-32 pb-16 bg-jet overflow-hidden">
        <CourtPattern opacity={0.04} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-gold text-xs font-body font-semibold uppercase tracking-[0.2em] mb-4">Ottawa Elite</p>
          <h1 className="font-display text-display-2xl uppercase text-white">
            Photo <span className="text-gold">Gallery</span>
          </h1>
          <p className="text-white/50 font-body mt-4">{GALLERY.length} photos</p>
        </div>
      </section>

      <section className="py-12 bg-jet">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="columns-2 md:columns-3 lg:columns-4 gap-3 md:gap-4 space-y-3 md:space-y-4">
            {GALLERY.map((img, i) => (
              <div
                key={img.id}
                className="break-inside-avoid relative group cursor-pointer overflow-hidden rounded-card"
                onClick={() => setIndex(i)}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={img.width}
                  height={img.height}
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                />
                <div className="absolute inset-0 bg-jet/20 group-hover:bg-jet/0 transition-colors duration-300" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-gold/90 rounded-full p-3">
                    <svg className="w-5 h-5 text-jet" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Lightbox
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        slides={GALLERY.map((img) => ({ src: img.src, alt: img.alt, width: img.width, height: img.height }))}
        styles={{
          container: { backgroundColor: 'rgba(10,10,10,0.97)' },
        }}
      />
    </>
  )
}
