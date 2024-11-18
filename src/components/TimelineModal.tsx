import React from 'react'
import { Dialog } from '@headlessui/react'

interface TimelineModalProps {
  isOpen: boolean
  onClose: () => void
  data: any // 원본 데이터 (Education 또는 Employment)
  title: string
}

// 공통 항목을 표시하는 함수
const renderField = (label: string, value: string | number | undefined) => {
  if (!value) return null
  return (
    <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4">
      <dt className="text-sm font-medium text-darkText">{label}</dt>
      <dd className="mt-1 text-sm text-gray-300 sm:col-span-2 sm:mt-0">{value}</dd>
    </div>
  )
}

const TimelineModal: React.FC<TimelineModalProps> = ({ isOpen, onClose, data, title }) => {
  const isEducation = data.degree !== undefined

  return (
    <Dialog open={isOpen} onClose={onClose} className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen">
        <div className="fixed inset-0 bg-black opacity-50" />
        <div className="relative bg-cardBg4 rounded-lg shadow-lg p-6 max-w-lg w-full z-20">
          <h2 className="text-lg font-bold text-highlight2">{title}</h2>
          <div className="mt-4">
            <dl className="divide-y divide-gray-600">
              {/* Education fields */}
              {isEducation && (
                <>
                  {renderField('Institution', data.institution)}
                  {renderField('Location', data.location)}
                  {renderField('Date', data.date)}
                  {renderField('Dissertation', data.dissertation)}
                  {renderField('Thesis', data.thesis)}
                  {renderField('Advisors', data.advisors?.join(', '))}
                </>
              )}

              {/* Employment fields */}
              {!isEducation && (
                <>
                  {renderField('Department', data.department)}
                  {renderField('Institution', data.institution)}
                  {renderField('Company', data.company)}
                  {renderField('Location', data.location)}
                  {renderField('Start Date', data.start_date)}
                  {data.end_date !== 'Present' && renderField('End Date', data.end_date)}
                </>
              )}
            </dl>
          </div>

          <div className="mt-6 flex justify-end space-x-4">
            <button
              onClick={onClose}
              className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-highlight2 rounded-md hover:bg-opacity-80"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </Dialog>
  )
}

export default TimelineModal
