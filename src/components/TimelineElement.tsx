import React from 'react'
import { VerticalTimelineElement } from 'react-vertical-timeline-component'

interface TimelineElementProps {
  icon: React.ReactNode
  title: string
  institution: string
  date: string
  iconColor: string
  bgColor: string
  textColor: string
  position: 'left' | 'right'
  onClick: () => void // 클릭 시 모달을 열기 위한 핸들러
}

export default function TimelineElement({
  icon,
  title,
  institution,
  date,
  iconColor,
  bgColor,
  textColor,
  position,
  onClick,
}: TimelineElementProps) {
  return (
    <VerticalTimelineElement
      iconStyle={{ backgroundColor: iconColor, color: '#fff' }}
      icon={icon}
      date={date}
      contentStyle={{
        backgroundColor: bgColor,
        color: textColor,
        padding: '0rem',
        borderRadius: '0.5rem',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        transition: 'background-color 0.3s ease',
      }}
      contentArrowStyle={{ borderRight: `7px solid ${bgColor}` }}
      position={position}
      onTimelineElementClick={onClick} // 클릭 시 모달을 열기 위한 핸들러
    >
      <div className="hover:bg-cardBg3 transition-colors duration-300 p-4 rounded-md cursor-pointer">
        <h3 className="text-m font-semibold">{title}</h3>
        <h4 className="text-sm text-highlight2">{institution}</h4>
      </div>
    </VerticalTimelineElement>
  )
}
