import React from 'react'
import { FaGithub, FaLinkedin, FaGoogleScholar, FaUserGraduate } from 'react-icons/fa6'
import { SNSLinks as SNSLinksType } from '../data/membersData'
import IconWithTooltip from './IconWithTooltip'

interface SnsIconsProps {
  sns: SNSLinksType
  iconColor: string
  showPlaceholder?: boolean
}

export default function SnsIcons({ sns, iconColor, showPlaceholder = false }: SnsIconsProps) {
  const items = [
    { link: sns?.googleScholar, icon: <FaGoogleScholar />, label: 'Google Scholar' },
    { link: sns?.github, icon: <FaGithub />, label: 'GitHub' },
    { link: sns?.linkedin, icon: <FaLinkedin />, label: 'LinkedIn' }
  ]

  return (
    <div className={`flex justify-center space-x-4 text-2xl ${iconColor} mt-4`}>
      {items.map((item, index) =>
        item.link ? (
          <IconWithTooltip
            key={index}
            icon={item.icon}
            label={item.label}
            link={item.link}
            iconColor={iconColor}
            tooltipPosition='bottom'
          />
        ) : null
      )}
      {items.every(item => !item.link) && showPlaceholder && (

        <IconWithTooltip
          icon={<FaUserGraduate />}
          label=''
          iconColor={iconColor}
        />
      )}
    </div>
  )
}
