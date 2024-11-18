import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-4 text-center w-full text-sm">
      <div className="flex justify-center items-center space-x-4">
        <p>&copy; {new Date().getFullYear()} 3S Lab. All rights reserved.</p>
        <p className="text-xs text-gray-500">
          Developed by{' '}
          <a
            href="https://github.com/TheOstrichEgg"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:underline"
          >
            TheOstrichEgg
          </a>
        </p>
      </div>
    </footer>
  )
}
