import React, { useState } from 'react'
import JournalModal from './JournalModal'
import { RefereedJournal } from '../data/publicationsData'

interface ConferenceCardProps {
  conference: RefereedJournal // 타입 정의는 저널과 동일하게
}

const ConferenceCard: React.FC<ConferenceCardProps> = ({ conference }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* 카드 레이아웃 */}
      <div
        className="p-6 bg-cardBg4 rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:scale-105 cursor-pointer"
        onClick={() => setIsOpen(true)}
      >
        <h2 className="text-lg font-medium text-highlight4 mb-2">{conference.title}</h2>
        <p className="text-sm text-darkText truncate max-w-full mb-2">
          <span className="font-light">Authors: </span>{conference.authors}
        </p>
        <p className="text-sm text-darkText">
          <span className="font-light">Conference: </span>{conference.journal}
        </p>
      </div>

      {/* 모달 */}
      <JournalModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        journal={conference} // 데이터를 모달로 전달
      />
    </>
  )
}

export default ConferenceCard
