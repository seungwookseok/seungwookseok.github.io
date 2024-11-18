import React from 'react'
import { FaCalendarDay } from 'react-icons/fa'
import { NewsItem } from '../data/newsData'

interface NewsCardProps {
  newsItem: NewsItem
  onClick: () => void
}

export default function NewsCard({ newsItem, onClick }: NewsCardProps) {
  return (
    <div
      className="bg-cardBg5 shadow-lg rounded-lg overflow-hidden cursor-pointer transition-transform transform hover:scale-105"
      onClick={onClick}
    >
      <div className="flex flex-col space-y-4 m-4">
        <h2 className="text-lg font-bold text-highlight5">{newsItem.title}</h2>
        <div className="flex items-center justify-end text-sm text-gray-400">
            <FaCalendarDay />
            <p>{newsItem.date}</p>
        </div>
      </div>

      <img
        className="w-full object-cover"
        src={newsItem.imageSrc}
        alt={newsItem.title}
      />
      <div className="m-4">
        <p className="text-gray-500 overflow-hidden line-clamp-3">
          {newsItem.content.enUS.join(' ')}
        </p>
      </div>
    </div>
  )
}
