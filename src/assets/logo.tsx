import React from 'react'

interface LogoProps {
  includeDot?: boolean
  className?: string
}

export default function({
  includeDot = true,
  className = ''
}: LogoProps) {
  return (
    <span className={`${className}`}>
      <span className='text-highlight3'>3S</span>
      {includeDot && <span className='text-gray-400'>.</span> }
      <span className='text-highlight1'>Lab</span>
    </span>
  )
}
