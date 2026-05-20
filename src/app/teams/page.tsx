import type { Metadata } from 'next'
import TeamsContent from '@/components/teams/TeamsContent'

export const metadata: Metadata = {
  title: 'Programs',
  description: 'Ottawa Elite Basketball programs — U13 through Elite Prep, training at Carleton University.',
}

export default function TeamsPage() {
  return <TeamsContent />
}
