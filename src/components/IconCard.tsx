import React from 'react'

export interface IconCardProps {
  title: string
  description: string
  bgColor: string
  highlightColor: string
  icon: React.FC
  link: string // Add link property
}

function IconCard({ title, description, bgColor, highlightColor, icon: Icon }: IconCardProps) {
  return (
    <div className={`p-6 rounded-lg shadow-lg ${bgColor} text-darkText transform transition-transform hover:scale-105 hover:shadow-xl cursor-pointer flex flex-col h-full`}>
      <div className="flex items-center mb-4">
        <div className="w-10 h-10 mr-4"><Icon /></div>
        <h2 className={`text-2xl font-bold ${highlightColor}`}>{title}</h2>
      </div>
      <p className="text-base flex-grow">{description}</p> {/* flex-grow 추가 */}
    </div>
  )
}

export default IconCard
