import type { Metadata } from 'next'
import AboutContent from '@/components/about/AboutContent'

export const metadata: Metadata = {
  title: 'About',
  description: "Ottawa Elite Basketball — Eastern Ontario's premier youth basketball program and coaching staff.",
}

export default function AboutPage() {
  return <AboutContent />
}
