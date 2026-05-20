interface CourtPatternProps {
  opacity?: number
  className?: string
}

export default function CourtPattern({ opacity = 0.04, className }: CourtPatternProps) {
  return (
    <svg
      className={`absolute inset-0 w-full h-full pointer-events-none ${className ?? ''}`}
      viewBox="0 0 1600 900"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ opacity }}
      aria-hidden="true"
      preserveAspectRatio="xMidYMid slice"
    >
      {/* Outer boundary */}
      <rect x="40" y="40" width="1520" height="820" stroke="white" strokeWidth="3" />

      {/* Half-court line */}
      <line x1="800" y1="40" x2="800" y2="860" stroke="white" strokeWidth="2" />

      {/* Center circle */}
      <circle cx="800" cy="450" r="120" stroke="white" strokeWidth="2" />
      <circle cx="800" cy="450" r="6" fill="white" />

      {/* Left paint / key */}
      <rect x="40" y="290" width="220" height="320" stroke="white" strokeWidth="2" />
      {/* Left free throw line */}
      <line x1="40" y1="450" x2="260" y2="450" stroke="white" strokeWidth="2" />
      {/* Left free throw circle */}
      <path d="M 260 330 A 120 120 0 0 1 260 570" stroke="white" strokeWidth="2" fill="none" />

      {/* Left three-point arc */}
      <path d="M 40 185 L 180 185" stroke="white" strokeWidth="2" />
      <path d="M 40 715 L 180 715" stroke="white" strokeWidth="2" />
      <path d="M 180 185 A 320 320 0 0 1 180 715" stroke="white" strokeWidth="2" fill="none" />

      {/* Right paint / key */}
      <rect x="1340" y="290" width="220" height="320" stroke="white" strokeWidth="2" />
      {/* Right free throw line */}
      <line x1="1340" y1="450" x2="1560" y2="450" stroke="white" strokeWidth="2" />
      {/* Right free throw circle */}
      <path d="M 1340 330 A 120 120 0 0 0 1340 570" stroke="white" strokeWidth="2" fill="none" />

      {/* Right three-point arc */}
      <path d="M 1560 185 L 1420 185" stroke="white" strokeWidth="2" />
      <path d="M 1560 715 L 1420 715" stroke="white" strokeWidth="2" />
      <path d="M 1420 185 A 320 320 0 0 0 1420 715" stroke="white" strokeWidth="2" fill="none" />
    </svg>
  )
}
