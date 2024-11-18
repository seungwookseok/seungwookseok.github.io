import React from 'react'
import { Dialog } from '@headlessui/react'
import { RefereedJournal } from '../data/publicationsData'

interface JournalModalProps {
  isOpen: boolean
  onClose: () => void
  journal: RefereedJournal
}

const JournalModal: React.FC<JournalModalProps> = ({ isOpen, onClose, journal }) => {
  return (
    <Dialog open={isOpen} onClose={onClose} className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen">
        {/* 배경 */}
        <div className="fixed inset-0 bg-black opacity-50" />

        {/* 모달 내용 */}
        <div className="relative bg-cardBg4 rounded-lg shadow-lg p-6 max-w-lg w-full z-20">
          <h2 className="text-lg font-bold text-highlight4">{journal.title}</h2>
          <div className="mt-4">
            {/* Description list */}
            <dl className="divide-y divide-gray-600">
              <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4">
                <dt className="text-sm font-medium text-darkText">Authors</dt>
                <dd className="mt-1 text-sm text-gray-300 sm:col-span-2 sm:mt-0">{journal.authors}</dd>
              </div>
              <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4">
                <dt className="text-sm font-medium text-darkText">Journal</dt>
                <dd className="mt-1 text-sm text-gray-300 sm:col-span-2 sm:mt-0">{journal.journal}</dd>
              </div>
              {journal.year && (
                <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4">
                  <dt className="text-sm font-medium text-darkText">Year</dt>
                  <dd className="mt-1 text-sm text-gray-300 sm:col-span-2 sm:mt-0">{journal.year}</dd>
                </div>
              )}
              {journal.articleNumber && (
                <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4">
                  <dt className="text-sm font-medium text-darkText">Article Number</dt>
                  <dd className="mt-1 text-sm text-gray-300 sm:col-span-2 sm:mt-0">{journal.articleNumber}</dd>
                </div>
              )}
              {journal.volume && (
                <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4">
                  <dt className="text-sm font-medium text-darkText">Volume</dt>
                  <dd className="mt-1 text-sm text-gray-300 sm:col-span-2 sm:mt-0">{journal.volume}</dd>
                </div>
              )}
              {journal.status && (
                <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4">
                  <dt className="text-sm font-medium text-darkText">Status</dt>
                  <dd className="mt-1 text-sm text-gray-300 sm:col-span-2 sm:mt-0">{journal.status}</dd>
                </div>
              )}
            </dl>
          </div>

          <div className="mt-6 flex justify-end space-x-4">
            {journal.link && (
              <a
                href={journal.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex justify-center px-4 py-2 text-sm font-medium border border-highlight4 text-highlight4 rounded-md hover:bg-highlight4 hover:bg-opacity-70"
              >
                View Full Article
              </a>
            )}
            <button
              onClick={onClose}
              className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-highlight4 rounded-md hover:bg-opacity-80"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </Dialog>
  )
}

export default JournalModal
