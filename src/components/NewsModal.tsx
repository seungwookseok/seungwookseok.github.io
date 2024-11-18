import React from 'react'
import { Dialog } from '@headlessui/react'
import { FaCalendarDay } from 'react-icons/fa'
import { NewsItem } from '../data/newsData'

interface NewsModalProps {
  isOpen: boolean
  onClose: () => void
  newsItem: NewsItem
}

const NewsModal: React.FC<NewsModalProps> = ({ isOpen, onClose, newsItem }) => {
  return (
    <Dialog open={isOpen} onClose={onClose} className="fixed z-50 inset-0 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen p-4">
        <div className="fixed inset-0 bg-black bg-opacity-50" onClick={onClose} />

        <div className={`relative bg-cardBg5 rounded-lg shadow-lg max-w-3xl w-full p-6 flex flex-col ${newsItem.content.enUS.length + newsItem.content.koKR.length > 5 ? 'max-h-[80vh] overflow-y-auto' : 'h-auto'}`}>
          <div className = "mb-6">
            <h2 className="text-2xl font-bold text-highlight5">{newsItem.title}</h2>
            <div className="flex items-center justify-end text-sm text-gray-400">
              <FaCalendarDay className="mr-1" />
              <p>{newsItem.date}</p>
            </div>
          </div>

          <div className="flex-grow flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
            <div className="w-full sm:w-1/2">
              <img className="rounded-lg object-contain w-full h-auto" src={newsItem.imageSrc} alt={newsItem.title} />
            </div>
            <div className="w-full sm:w-1/2 text-gray-300 space-y-4">
              {newsItem.content.enUS.map((paragraph, index) => (
                <p key={index} className="whitespace-pre-line">{paragraph}</p>
              ))}
              <hr className="border-gray-500 my-4" />
              {newsItem.content.koKR.map((paragraph, index) => (
                <p key={index} className="whitespace-pre-line">{paragraph}</p>
              ))}
            </div>
          </div>

          <div className="mt-6 flex justify-end space-x-4">
            {newsItem.link && (
              <a
                href={newsItem.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex justify-center px-4 py-2 text-sm font-medium border border-highlight5 text-highlight5 rounded-md hover:bg-highlight5 hover:bg-opacity-70"
              >
                Related Link
              </a>
            )}
            <button
              onClick={onClose}
              className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-highlight5 rounded-md hover:bg-opacity-80"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </Dialog>
  )
}

export default NewsModal
