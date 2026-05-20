export interface NewsArticle {
  slug: string
  title: string
  excerpt: string
  date: string
  coverImage?: string
  category: 'tournament' | 'announcement' | 'recruitment' | 'community'
  featured?: boolean
}

export interface TeamProgram {
  id: string
  ageGroup: string
  grade: string
  gender: 'Boys' | 'Girls' | 'Co-ed'
  division: string
  description: string
  coaches: string[]
  tryoutUrl: string
  image?: string
}

export interface Coach {
  id: string
  name: string
  title: string
  image: string
  teams: string[]
}

export interface GalleryImage {
  id: string
  src: string
  alt: string
  width: number
  height: number
}

export interface Sponsor {
  name: string
  logo: string
  url?: string
  tier: 'primary' | 'secondary'
}

export interface StatItem {
  label: string
  value: number
  suffix?: string
}
