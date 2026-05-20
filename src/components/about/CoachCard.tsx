import Image from 'next/image'
import type { Coach } from '@/types'

interface CoachCardProps {
  coach: Coach
}

export default function CoachCard({ coach }: CoachCardProps) {
  return (
    <div className="flex flex-col items-center text-center group">
      <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-jet-300 group-hover:border-gold/60 transition-colors duration-300 mb-4 bg-jet-300">
        <Image
          src={coach.image}
          alt={coach.name}
          fill
          className="object-cover object-top"
          sizes="96px"
        />
      </div>
      <h3 className="font-body font-semibold text-white text-sm">{coach.name}</h3>
      <p className="text-gold text-xs font-body mt-1">{coach.title}</p>
    </div>
  )
}
