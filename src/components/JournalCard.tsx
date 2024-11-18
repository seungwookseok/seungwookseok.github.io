import React, { useState } from 'react'
import JournalModal from './JournalModal'
import { RefereedJournal } from '../data/publicationsData'

interface JournalCardProps {
  journal: RefereedJournal // 인터페이스로 타입 정의
}

const JournalCard: React.FC<JournalCardProps> = ({ journal }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* 카드 레이아웃 */}
      <div
        className="relative p-6 bg-cardBg4 rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:scale-105 cursor-pointer"
        onClick={() => setIsOpen(true)}
      >
        <h2 className="text-lg font-medium text-highlight4 mb-2">{journal.title}</h2>
        <p className="text-sm text-darkText truncate max-w-full mb-2">
          <span className="font-light">Authors: </span>{journal.authors}
        </p>
        <p className="text-sm text-darkText">
          <span className="font-light">Journal: </span>{journal.journal}
        </p>

        {/* Year 표시: 우측 하단에 배치 */}
        <div className="absolute bottom-2 right-2 text-xs text-gray-500">
          {journal.year}
        </div>
      </div>

      {/* 모달 */}
      <JournalModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        journal={journal} // journal 데이터를 모달로 전달
      />
    </>
  )
}

export default JournalCard
