import React from 'react'
import { Dialog } from '@headlessui/react'
import { FaSchool, FaPhone, FaEnvelope, FaBuilding, FaFlask } from 'react-icons/fa'
import { Member } from '../data/membersData'
import SnsIcons from './SnsIcons'
import IconWithTooltip from './IconWithTooltip'

interface MemberModalProps {
  isOpen: boolean
  onClose: () => void
  member: Member
}

const MemberModal: React.FC<MemberModalProps> = ({ isOpen, onClose, member }) => {
  const { name, course, infos, office, phone, email, education, sns, imageSrc, topics } = member

  return (
    <Dialog open={isOpen} onClose={onClose} className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen">

        <div className="fixed inset-0 bg-black opacity-50" />

        <div className="relative bg-cardBg3 rounded-lg shadow-lg p-6 w-auto max-w-2xl z-20">
          {/* Name, Course, Admission Year */}
          <div className="relative">
            <h4 className="text-2xl font-bold text-highlight3">{name}</h4>
            <div className="flex items-center space-x-2">
              <IconWithTooltip
                icon={<FaSchool />}
                label={`School`}
                iconColor="text-highlight3"
              />
              <p className="text-lg text-gray-200">{course}</p>
            </div>

            {infos.map((info, _) => (
              <p className="text-sm text-gray-400">{info}</p>
            ))}

            {/* 우측 상단의 이미지 */}
            <div className="absolute top-0 right-0 w-32 h-32 rounded-full overflow-hidden">
              <img src={imageSrc} alt={`${name}'s profile`} className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Office, Phone, Email */}
          <div className="my-4 space-y-2 text-gray-400">
            <div className="flex items-center space-x-2">
              <IconWithTooltip
                icon={<FaBuilding />}
                label="Office"
                link={undefined}
                iconColor="text-highlight3"
                tooltipPosition="left"
              />
              <p>{office}</p>
            </div>
            <div className="flex items-center space-x-2">
              <IconWithTooltip
                icon={<FaPhone />}
                label={`Call to ${name}`}
                link={`tel:${phone}`}
                iconColor="text-highlight3"
                tooltipPosition="left"
              />
              <p>{phone}</p>
            </div>
            <div className="flex items-center space-x-2">
              <IconWithTooltip
                icon={<FaEnvelope />}
                label={`Mail to ${name}`}
                link={`mailto:${email}`}
                iconColor="text-highlight3"
                tooltipPosition="left"
              />
              <p>{email}</p>
            </div>
          </div>

          <hr className="border-gray-600 my-4" />

          {/* Education List */}
          <div className="text-gray-400 space-y-1">
            {education.map((edu, index) => (
              <p key={index} className="truncate" title={edu}>
                {edu}
              </p>
            ))}
          </div>

          {
            topics ? (
              <>
                <hr className="border-gray-600 my-4" />
                <div className="my-4 space-y-2 text-gray-400">
                  <div className="flex items-center space-x-2">
                    <IconWithTooltip
                      icon={<FaFlask />}
                      label={`Research Topics`}
                      iconColor="text-highlight3"
                    />
                    <p className="text-lg text-gray-200">{"Research Topics"}</p>
                  </div>
                  <ul className="list-disc pl-5 space-y-3">
                    {topics?.map((topic, _) => (
                      <li>{topic}</li>
                  ))}
                  </ul>
                </div>
              </>) : null
          }
          <div className="mt-6 flex justify-between items-center">
            <SnsIcons sns={sns} iconColor="text-highlight3" />
            <button
              onClick={onClose}
              className="bg-highlight3 text-white px-4 py-2 rounded hover:bg-highlight2"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </Dialog>
  )
}

export default MemberModal
