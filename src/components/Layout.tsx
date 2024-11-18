import React, { ReactNode, useEffect, useState } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { NavigationItem } from './Navbar'
import { Helmet } from 'react-helmet'

interface LayoutProps {
  children: ReactNode
  navigation: NavigationItem[]
}

export default function Layout({ children, navigation }: LayoutProps) {
  const [navbarHeight, setNavbarHeight] = useState(0)

  useEffect(() => {
    const navbar = document.getElementById('navbar')
    if (navbar) {
      setNavbarHeight(navbar.offsetHeight)
    }
  }, [])

  return (
    <div className="bg-gray-800 text-gray-200 min-h-screen flex flex-col">
      <Helmet>
        <title>3SLab</title>
      </Helmet>

      {/* Navbar with a unique ID for reference */}
      <Navbar initialNavigation={navigation} />

      {/* Adjust top margin dynamically based on Navbar height */}
      <main
        style={{ marginTop: `${navbarHeight}px` }}
        className="flex-grow container mx-auto p-4 max-w-3xl lg:max-w-5xl"
      >
        {children}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}
