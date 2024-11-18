import React, { ReactNode } from 'react'

export enum HoverEffect {
  ColorChange = 'colorChange',
  SizeChange = 'sizeChange'
}

export interface ImageCardProps {
  title: string
  content: ReactNode
  imageSrc: string
  imageAlt: string
  imagePosition?: 'left' | 'right'
  hoverEffect?: HoverEffect
  alignment?: 'start' | 'center'
  cardBg: string
  highlight: string
}

export default function ImageCard({
  title,
  content,
  imageSrc,
  imageAlt,
  imagePosition = 'left',
  hoverEffect = HoverEffect.ColorChange,
  alignment = 'start',
  cardBg,
  highlight
}: ImageCardProps) {
  return (
    <div
      className={`flex flex-col-reverse lg:flex-row ${
        imagePosition === 'right' ? 'lg:flex-row-reverse' : ''
      } items-${alignment} gap-8 ${cardBg} rounded-lg p-8 shadow-lg transition-all duration-300
      ${hoverEffect === HoverEffect.ColorChange ? 'hover:bg-gray-700' : ''}
      ${hoverEffect === HoverEffect.SizeChange ? 'hover:scale-105' : ''}
      `}
    >
      {/* Image */}
      <div className="w-full lg:w-1/2">
        <img
          src={imageSrc}
          alt={imageAlt}
          className="w-full h-auto object-contain rounded-lg"
        />
      </div>

      {/* Title and Content */}
      <div className="w-full lg:w-1/2">
        <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 ${highlight}`}>
          {title}
        </h2>
        <div className="text-sm sm:text-base lg:text-lg text-darkText">
          {content}
        </div>
      </div>
    </div>
  )
}
