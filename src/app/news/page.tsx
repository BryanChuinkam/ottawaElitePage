import type { Metadata } from 'next'
import NewsContent from '@/components/news/NewsContent'

export const metadata: Metadata = {
  title: 'News',
  description: 'Latest news, tournament results, and announcements from Ottawa Elite Basketball.',
}

export default function NewsPage() {
  return <NewsContent />
}
