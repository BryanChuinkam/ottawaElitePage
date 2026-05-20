import Image from 'next/image'
import SectionHeading from '@/components/ui/SectionHeading'
import type { Sponsor } from '@/types'

interface SponsorsRowProps {
  sponsors: Sponsor[]
}

function SponsorLogo({ sponsor }: { sponsor: Sponsor }) {
  return (
    <div className="flex-none flex items-center justify-center px-8 py-4">
      <Image
        src={sponsor.logo}
        alt={sponsor.name}
        width={120}
        height={60}
        className="object-contain grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-300 max-h-12 w-auto"
      />
    </div>
  )
}

export default function SponsorsRow({ sponsors }: SponsorsRowProps) {
  return (
    <section className="py-20 bg-jet-100 border-t border-jet-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeading
          eyebrow="Partners & Affiliates"
          heading="Backed By The Best"
          align="center"
          className="mb-16"
        />
      </div>

      {/* Marquee */}
      <div className="relative overflow-hidden">
        <div className="flex animate-marquee">
          {/* Clone twice for seamless loop */}
          {[...sponsors, ...sponsors, ...sponsors, ...sponsors].map((sponsor, i) => (
            <SponsorLogo key={`${sponsor.name}-${i}`} sponsor={sponsor} />
          ))}
        </div>
      </div>
    </section>
  )
}
