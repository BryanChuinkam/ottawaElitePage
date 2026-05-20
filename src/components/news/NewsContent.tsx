'use client'

import { motion } from 'framer-motion'
import ArticleCard from '@/components/news/ArticleCard'
import CourtPattern from '@/components/ui/CourtPattern'
import { NEWS } from '@/data/news'
import { staggerContainer, viewportOptions } from '@/lib/animations'

export default function NewsContent() {
  const featured = NEWS.filter((a) => a.featured)
  const rest = NEWS.filter((a) => !a.featured)

  return (
    <>
      <section className="relative pt-32 pb-20 bg-jet overflow-hidden">
        <CourtPattern opacity={0.04} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-gold text-xs font-body font-semibold uppercase tracking-[0.2em] mb-4">From the Program</p>
          <h1 className="font-display text-display-2xl uppercase text-white">
            Latest <span className="text-gold">News</span>
          </h1>
        </div>
      </section>

      <section className="py-16 bg-jet">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {featured.length > 0 && (
            <div className="mb-16">
              <p className="text-gold text-xs font-body font-semibold uppercase tracking-widest mb-6">Featured</p>
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOptions}
              >
                {featured.map((a) => (
                  <ArticleCard key={a.slug} article={a} featured />
                ))}
              </motion.div>
            </div>
          )}

          <p className="text-white/40 text-xs font-body font-semibold uppercase tracking-widest mb-6">All Articles</p>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
          >
            {rest.map((a) => (
              <ArticleCard key={a.slug} article={a} />
            ))}
          </motion.div>
        </div>
      </section>
    </>
  )
}
