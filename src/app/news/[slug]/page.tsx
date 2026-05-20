import { notFound } from 'next/navigation'
import Link from 'next/link'
import type { Metadata } from 'next'
import Badge from '@/components/ui/Badge'
import { NEWS } from '@/data/news'
import { formatDate } from '@/lib/utils'

const categoryLabel: Record<string, string> = {
  tournament: 'Tournament',
  announcement: 'Announcement',
  recruitment: 'Recruitment',
  community: 'Community',
}

export function generateStaticParams() {
  return NEWS.map((a) => ({ slug: a.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const article = NEWS.find((a) => a.slug === slug)
  if (!article) return {}
  return { title: article.title, description: article.excerpt }
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const article = NEWS.find((a) => a.slug === slug)
  if (!article) notFound()

  const related = NEWS.filter((a) => a.slug !== slug && a.category === article.category).slice(0, 3)

  return (
    <main className="bg-jet min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 pt-32 pb-20">
        <Link href="/news" className="text-gold text-sm font-body font-semibold hover:text-gold-light transition-colors inline-flex items-center gap-1 mb-8">
          ← Back to News
        </Link>

        <div className="flex items-center gap-3 mb-6">
          <Badge variant="outline">{categoryLabel[article.category]}</Badge>
          <span className="text-white/40 text-sm font-body">{formatDate(article.date)}</span>
        </div>

        <h1 className="font-display text-display-xl uppercase text-white leading-none mb-8">
          {article.title}
        </h1>

        <div className="h-px bg-gold/20 mb-8" />

        <div className="prose prose-invert prose-gold max-w-none font-body">
          <p className="text-white/70 text-lg leading-relaxed">{article.excerpt}</p>
          <p className="text-white/50 text-base leading-relaxed mt-6">
            Full article content coming soon. Follow us on{' '}
            <a href="https://instagram.com/ottawa_elite/" className="text-gold hover:text-gold-light" target="_blank" rel="noopener noreferrer">
              Instagram
            </a>{' '}
            and{' '}
            <a href="https://www.facebook.com/OttawaElite/" className="text-gold hover:text-gold-light" target="_blank" rel="noopener noreferrer">
              Facebook
            </a>{' '}
            for the latest updates.
          </p>
        </div>

        {related.length > 0 && (
          <div className="mt-16">
            <h2 className="font-display text-display-lg uppercase text-white mb-6">Related News</h2>
            <div className="space-y-4">
              {related.map((a) => (
                <Link
                  key={a.slug}
                  href={`/news/${a.slug}`}
                  className="block bg-jet-200 border border-jet-300 rounded-card p-4 hover:border-gold/50 transition-colors group"
                >
                  <span className="text-white/60 text-xs font-body">{formatDate(a.date)}</span>
                  <p className="font-body font-semibold text-white text-sm mt-1 group-hover:text-gold transition-colors">
                    {a.title}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  )
}
