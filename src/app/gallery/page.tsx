import type { Metadata } from 'next'
import GalleryContent from '@/components/gallery/GalleryContent'

export const metadata: Metadata = {
  title: 'Gallery',
  description: 'Photos from Ottawa Elite Basketball games, tournaments, and team events.',
}

export default function GalleryPage() {
  return <GalleryContent />
}
