import React, { useState } from 'react'
import JournalModal from './JournalModal' // 모달 컴포넌트 재사용
import { RefereedJournal } from '../data/publicationsData'

interface DOICardProps {
  doi: RefereedJournal
}

const DOICard: React.FC<DOICardProps> = ({ doi }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* 카드 레이아웃 */}
      <div
        className="p-6 bg-cardBg4 rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:scale-105 cursor-pointer"
        onClick={() => setIsOpen(true)} // 클릭 시 모달 열림
      >
        <h2 className="text-lg font-medium text-highlight4 mb-2">{doi.title}</h2>
        <p className="text-sm text-darkText truncate max-w-full mb-2">
          <span className="font-light">Authors: </span>{doi.authors}
        </p>
        <p className="text-sm text-darkText">
          <span className="font-light">DOI: </span>
          <a href={doi.link} target="_blank" rel="noopener noreferrer" className="text-highlight4 underline">
            {doi.link}
          </a>
        </p>
      </div>

      {/* 모달 */}
      <JournalModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)} // 모달 닫기
        journal={doi} // DOI 데이터를 모달로 전달
      />
    </>
  )
}

export default DOICard
