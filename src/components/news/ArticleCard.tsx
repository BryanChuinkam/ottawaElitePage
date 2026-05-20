'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import Badge from '@/components/ui/Badge'
import { formatDate } from '@/lib/utils'
import { staggerChild } from '@/lib/animations'
import type { NewsArticle } from '@/types'

const categoryLabel: Record<NewsArticle['category'], string> = {
  tournament: 'Tournament',
  announcement: 'Announcement',
  recruitment: 'Recruitment',
  community: 'Community',
}

interface ArticleCardProps {
  article: NewsArticle
  featured?: boolean
}

export default function ArticleCard({ article, featured }: ArticleCardProps) {
  return (
    <motion.div variants={staggerChild}>
      <Link
        href={`/news/${article.slug}`}
        className="group block bg-jet-200 border border-jet-300 rounded-card p-6 hover:border-gold/50 transition-all duration-300 hover:-translate-y-1 h-full flex flex-col"
      >
        <div className="flex items-center justify-between mb-4 gap-2 flex-wrap">
          <Badge variant={featured ? 'gold' : 'outline'}>
            {categoryLabel[article.category]}
          </Badge>
          <span className="text-white/30 text-xs font-body shrink-0">{formatDate(article.date)}</span>
        </div>
        <h3 className="font-body font-semibold text-white text-base leading-snug group-hover:text-gold transition-colors line-clamp-3 flex-1">
          {article.title}
        </h3>
        <p className="text-white/50 text-sm font-body mt-3 leading-relaxed line-clamp-3">
          {article.excerpt}
        </p>
        <span className="text-gold text-sm font-body font-semibold mt-4 inline-block group-hover:translate-x-1 transition-transform">
          Read More →
        </span>
      </Link>
    </motion.div>
  )
}
