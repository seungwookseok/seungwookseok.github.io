import React from 'react'
import Masonry from 'react-masonry-css'
import { honorsAndAwards } from '../data/investigatorData'

export default function RewardAndHonors() {
  const breakpointColumns = {
    default: 2,  // 일반 화면에서 2열
    640: 1      // 'sm' 사이즈부터 1열
  }

  return (
    <Masonry
      breakpointCols={breakpointColumns}
      className="flex w-auto gap-6"
      columnClassName="masonry-grid_column"
    >
      {honorsAndAwards.map((honor, index) => (
        <div
          key={index}
          className="relative bg-cardBg2 p-6 rounded-lg shadow-lg overflow-hidden hover:brightness-110 mb-6"  // 아래쪽 마진 추가
        >
          {/* 연도 배경 */}
          <div className="absolute bottom-0 right-0 bg-highlight2 text-white text-sm py-1 px-3 rounded-tl-lg">
            {honor.year}
          </div>

          {/* 내용 */}
          <div className="flex flex-col justify-between h-full">
            <h4 className="text-highlight2 font-bold text-xl mb-2">{honor.title}</h4>
            <p className="text-gray-400 text-sm">{honor.institution}</p>
          </div>
        </div>
      ))}
    </Masonry>
  )
}
