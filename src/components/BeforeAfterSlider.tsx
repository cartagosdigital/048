'use client'

import { useRef, useState, useCallback } from 'react'
import Image from 'next/image'

interface BeforeAfterSliderProps {
  before: string
  after: string
  beforeAlt?: string
  afterAlt?: string
}

export default function BeforeAfterSlider({
  before,
  after,
  beforeAlt = 'Antes da higienização',
  afterAlt = 'Depois da higienização',
}: BeforeAfterSliderProps) {
  const [position, setPosition] = useState(50)
  const containerRef = useRef<HTMLDivElement>(null)
  const isDragging = useRef(false)

  const getPosition = useCallback((clientX: number) => {
    const rect = containerRef.current?.getBoundingClientRect()
    if (!rect) return
    const x = clientX - rect.left
    const pct = Math.min(Math.max((x / rect.width) * 100, 2), 98)
    setPosition(pct)
  }, [])

  const onMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!isDragging.current) return
      getPosition(e.clientX)
    },
    [getPosition]
  )

  const onTouchMove = useCallback(
    (e: React.TouchEvent) => {
      getPosition(e.touches[0].clientX)
    },
    [getPosition]
  )

  return (
    <div
      ref={containerRef}
      className="ba-slider w-full aspect-[4/3] select-none"
      onMouseDown={() => { isDragging.current = true }}
      onMouseUp={() => { isDragging.current = false }}
      onMouseLeave={() => { isDragging.current = false }}
      onMouseMove={onMouseMove}
      onTouchMove={onTouchMove}
    >
      {/* Before image */}
      <div className="absolute inset-0">
        <Image src={before} alt={beforeAlt} fill className="object-cover" />
        <span className="ba-label left-3">Antes</span>
      </div>

      {/* After image clipped */}
      <div
        className="after"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        <Image src={after} alt={afterAlt} fill className="object-cover" />
        <span className="ba-label right-3">Depois</span>
      </div>

      {/* Divider line */}
      <div
        className="ba-divider"
        style={{ left: `${position}%` }}
      />

      {/* Handle */}
      <div
        className="ba-handle"
        style={{ left: `${position}%` }}
      >
        <svg width="22" height="16" viewBox="0 0 22 16" fill="none">
          <path d="M6 8H1M1 8L4 5M1 8L4 11" stroke="#071952" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M16 8H21M21 8L18 5M21 8L18 11" stroke="#071952" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>

      {/* Invisible range input for accessibility */}
      <input
        type="range"
        className="ba-range"
        min={0}
        max={100}
        value={position}
        onChange={(e) => setPosition(Number(e.target.value))}
        aria-label="Comparação antes e depois"
      />
    </div>
  )
}
