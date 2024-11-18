import React from 'react'

interface IconWithTooltipProps {
  icon: React.ReactNode
  label: string
  link?: string
  tooltipPosition?: 'top' | 'bottom' | 'right' | 'left' | 'auto' | 'top-bottom' | 'left-right'
  iconColor?: string
  tooltipStyles?: string
}

export default function IconWithTooltip({
  icon,
  label,
  link,
  tooltipPosition = 'top',
  iconColor = 'text-gray-500',
  tooltipStyles = 'bg-gray-800 text-white border border-gray-500'
}: IconWithTooltipProps) {
  const getTooltipPosition = () => {
    switch (tooltipPosition) {
      case 'top':
        return 'bottom-full left-1/2 transform -translate-x-1/2 mb-2'
      case 'bottom':
        return 'top-full left-1/2 transform -translate-x-1/2 mt-2'
      case 'right':
        return 'left-full top-1/2 transform -translate-y-1/2 ml-2'
      case 'left':
        return 'right-full top-1/2 transform -translate-y-1/2 mr-2'
      case 'top-bottom':
        return 'bottom-full left-1/2 transform -translate-x-1/2 mb-2 sm:top-full sm:left-1/2 sm:mt-2'
      case 'left-right':
        return 'left-full top-1/2 transform -translate-y-1/2 ml-2 sm:right-full sm:top-1/2 sm:mr-2'
      case 'auto':
      default:
        return 'bottom-full left-1/2 transform -translate-x-1/2 mb-2'
    }
  }

  return (
    <div className="relative group">
      {link ? (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className={`hover:text-gray-200 ${iconColor}`}
          onClick={(e) => e.stopPropagation()}
        >
          {icon}
        </a>
      ) : (
        <span className={`${iconColor}`}>
          {icon}
        </span>
      )}

      {link && (
        <div
          className={`absolute hidden group-hover:inline-block whitespace-nowrap py-1 px-2 rounded text-xs ${getTooltipPosition()} ${tooltipStyles}`}
        >
          {label}
        </div>
      )}
    </div>
  )
}
