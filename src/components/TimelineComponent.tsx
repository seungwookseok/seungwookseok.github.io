import React, { useState } from 'react'
import { VerticalTimeline } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import TimelineElement from './TimelineElement'
import TimelineModal from './TimelineModal'
import { AcademicCapIcon, BriefcaseIcon, StarIcon } from '@heroicons/react/24/solid'
import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from '../../tailwind.config'
import { educationData, employmentData } from '../data/investigatorData'

const fullConfig = resolveConfig(tailwindConfig)

const parseDate = (dateString: string) => (dateString === 'Present' ? new Date() : new Date(dateString))

const formatDate = (date: Date) => {
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  return `${year}/${month}`
}

const formatDateRange = (date?: string, startDate?: string, endDate?: string) => {
  // date만 있는 경우 yyyy/MM 형식으로 반환
  if (date) {
    return formatDate(new Date(date))
  }

  // startDate와 endDate가 있는 경우 yyyy/MM-yyyy/MM 형식으로 반환
  if (startDate && endDate) {
    return `${formatDate(new Date(startDate))} - ${
      endDate === 'Present' ? 'Present' : formatDate(new Date(endDate))
    }`
  }

  // startDate만 있는 경우 yyyy/MM 형식으로 반환
  if (startDate) {
    return formatDate(new Date(startDate))
  }

  return ''
}

const sortByDate = (a: any, b: any) => {
  const dateA = parseDate(a.end_date || a.date)
  const dateB = parseDate(b.end_date || b.date)
  return dateB.getTime() - dateA.getTime()
}

export default function TimelineComponent() {
  const [isModalOpen, setModalOpen] = useState(false)
  const [selectedItem, setSelectedItem] = useState<any>(null)
  const colors = fullConfig.theme.extend?.colors || fullConfig.theme.colors

  const combinedData = [
    ...educationData.map((edu) => ({ type: 'education', ...edu })),
    ...employmentData.map((emp) => ({ type: 'employment', ...emp })),
  ].sort(sortByDate)

  const handleModalOpen = (item: any) => {
    setSelectedItem(item)
    setModalOpen(true)
  }

  const handleModalClose = () => {
    setModalOpen(false)
    setSelectedItem(null)
  }

  const renderIcon = (type: string, isFirst: boolean) => {
    if (isFirst) return <StarIcon className="w-6 h-6 text-white" />
    return type === 'education' ? <AcademicCapIcon className="w-6 h-6 text-white" /> : <BriefcaseIcon className="w-6 h-6 text-white" />
  }

  return (
    <>
      <VerticalTimeline className="dark:bg-darkBg" animate={false}>
        {combinedData.map((item: any, index) => (
          <TimelineElement
            key={index}
            icon={renderIcon(item.type, index === 0)}
            title={item.title || item.degree}
            institution={item.institution || item.company}
            date={formatDateRange(item.date, item.start_date, item.end_date)}
            iconColor={index === 0 ? colors.primary : colors.cardBg2}
            bgColor={colors.cardBg2}
            textColor={colors.darkText}
            position={item.type === 'employment' ? 'left' : 'right'}
            onClick={() => handleModalOpen(item)}
          />
        ))}
      </VerticalTimeline>

      {selectedItem && (
        <TimelineModal
          isOpen={isModalOpen}
          onClose={handleModalClose}
          data={selectedItem}
          title={selectedItem.degree || selectedItem.title}
        />
      )}
    </>
  )
}
