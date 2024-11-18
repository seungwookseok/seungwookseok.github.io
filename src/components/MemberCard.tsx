import React, { useState } from 'react'
import { SiGithub, SiLinkedin, SiGooglescholar } from 'react-icons/si'
import { Member } from '../data/membersData'
import MemberModal from './MemberModal'
import SnsIcons from './SnsIcons'

export interface MemberCardProps {
  member: Member
}

export default function MemberCard({ member }: MemberCardProps) {
  const { name, course, imageSrc, sns } = member

  // 모달 상태 관리
  const [modalIsOpen, setModalIsOpen] = useState(false)

  // 모달 열기
  const openModal = () => {
    setModalIsOpen(true)
  }

  // 모달 닫기
  const closeModal = () => {
    setModalIsOpen(false)
  }

  return (
    <div>
      {/* Card */}
      <div
        className="bg-cardBg3 rounded-lg shadow-lg hover:bg-cardBg2 hover:shadow-xl transition-shadow duration-300 relative cursor-pointer"
        onClick={openModal}  // 카드 클릭 시 모달 열기
      >
        {/* Square Image with Padding */}
        <div className="w-full p-4">
          <div className="w-full h-full rounded-lg overflow-hidden">
            <img
              src={imageSrc}
              alt={`${name}'s profile`}
              className="w-full h-full object-cover"
              style={{ aspectRatio: '1 / 1' }}
            />
          </div>
        </div>

        {/* Member details */}
        <div className="p-4 text-center">
          {/* 이름 강조 */}
          <h3 className="text-2xl font-semibold text-highlight3">{name}</h3>

          {/* Course 덜 강조된 스타일 */}
          <p className="text-s text-gray-200 mt-1">{course}</p>

          {/* SNS Icons */}
          <SnsIcons sns={member.sns} iconColor="text-highlight3" showPlaceholder={true}/>
        </div>
      </div>

      {/* MemberModal 사용 */}
      <MemberModal
        isOpen={modalIsOpen}
        onClose={closeModal}
        member={member}  // 선택된 멤버 정보를 전달
      />
    </div>
  )
}
