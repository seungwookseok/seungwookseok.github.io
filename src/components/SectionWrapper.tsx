import React, { ReactNode } from 'react'

interface SectionWrapperProps {
  children: ReactNode
  title?: string
  paddingX?: string
  paddingY?: string
  className?: string
}

export default function SectionWrapper({
  children,
  title,
  paddingX = 'px-8',
  paddingY = 'py-8',
  className = ''
}: SectionWrapperProps) {
  return (
    <section className={`${paddingX} ${paddingY} max-w-7xl mx-auto my-8 bg-gray-900 rounded-lg ${className}`}>
      {title && (
        <h2 className="text-3xl font-bold mb-8 text-white border-b-2 border-gray-700 pb-4">
          {title}
        </h2>
      )}
      {children}
    </section>
  )
}
