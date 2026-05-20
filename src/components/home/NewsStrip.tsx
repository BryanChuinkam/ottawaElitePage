'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import Badge from '@/components/ui/Badge'
import SectionHeading from '@/components/ui/SectionHeading'
import { formatDate } from '@/lib/utils'
import { staggerContainer, staggerChild, viewportOptions } from '@/lib/animations'
import type { NewsArticle } from '@/types'

interface NewsStripProps {
  articles: NewsArticle[]
}

const categoryLabel: Record<NewsArticle['category'], string> = {
  tournament: 'Tournament',
  announcement: 'Announcement',
  recruitment: 'Recruitment',
  community: 'Community',
}

export default function NewsStrip({ articles }: NewsStripProps) {
  return (
    <section className="py-24 bg-jet-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-end justify-between mb-12">
          <SectionHeading eyebrow="From the Program" heading="Latest News" className="mb-0" />
          <Link href="/news" className="text-gold font-body font-semibold text-sm hover:text-gold-light transition-colors hidden md:block">
            View All News →
          </Link>
        </div>

        {/* Mobile: horizontal scroll */}
        <div className="flex gap-4 overflow-x-auto no-scrollbar snap-x snap-mandatory md:hidden pb-4">
          {articles.map((article) => (
            <Link
              key={article.slug}
              href={`/news/${article.slug}`}
              className="flex-none w-72 snap-start bg-jet-200 border border-jet-300 rounded-card p-5 flex flex-col gap-3 hover:border-gold/50 transition-colors"
            >
              <Badge variant={article.featured ? 'gold' : 'outline'}>
                {categoryLabel[article.category]}
              </Badge>
              <h3 className="font-body font-semibold text-white text-sm leading-snug line-clamp-3">
                {article.title}
              </h3>
              <p className="text-white/40 text-xs font-body mt-auto">{formatDate(article.date)}</p>
            </Link>
          ))}
        </div>

        {/* Desktop: grid */}
        <motion.div
          className="hidden md:grid grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
        >
          {articles.slice(0, 6).map((article) => (
            <motion.div key={article.slug} variants={staggerChild}>
              <Link
                href={`/news/${article.slug}`}
                className="group block bg-jet-200 border border-jet-300 rounded-card p-6 hover:border-gold/50 transition-all duration-300 hover:-translate-y-1 h-full"
              >
                <div className="flex items-center justify-between mb-4">
                  <Badge variant={article.featured ? 'gold' : 'outline'}>
                    {categoryLabel[article.category]}
                  </Badge>
                  <span className="text-white/30 text-xs font-body">{formatDate(article.date)}</span>
                </div>
                <h3 className="font-body font-semibold text-white text-base leading-snug group-hover:text-gold transition-colors line-clamp-3">
                  {article.title}
                </h3>
                <p className="text-white/50 text-sm font-body mt-3 leading-relaxed line-clamp-2">
                  {article.excerpt}
                </p>
                <span className="text-gold text-sm font-body font-semibold mt-4 inline-block group-hover:translate-x-1 transition-transform">
                  Read More →
                </span>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-8 text-center md:hidden">
          <Link href="/news" className="text-gold font-body font-semibold text-sm hover:text-gold-light transition-colors">
            View All News →
          </Link>
        </div>
      </div>
    </section>
  )
}
