import Hero from '@/components/home/Hero'
import StatsBar from '@/components/home/StatsBar'
import ProgramsPreview from '@/components/home/ProgramsPreview'
import NewsStrip from '@/components/home/NewsStrip'
import GalleryTeaser from '@/components/home/GalleryTeaser'
import SponsorsRow from '@/components/home/SponsorsRow'
import { TEAMS } from '@/data/teams'
import { NEWS } from '@/data/news'
import { GALLERY } from '@/data/gallery'
import { SPONSORS } from '@/data/sponsors'

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsBar />
      <ProgramsPreview programs={TEAMS.slice(0, 4)} />
      <NewsStrip articles={NEWS.slice(0, 6)} />
      <GalleryTeaser images={GALLERY} />
      <SponsorsRow sponsors={SPONSORS} />
    </>
  )
}
