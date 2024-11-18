import React from 'react'
import WelcomeImage from '../images/WelcomeImage.jpg'
import Logo from '../assets/logo'

const WelcomeSection = () => {
  return (
    <section
      className="relative bg-cover bg-center text-center py-16 bg-darkBg text-darkText px-8 max-w-7xl mx-auto rounded-lg shadow-lg overflow-hidden"
      style={{
        backgroundImage: `url(${WelcomeImage})`,
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-40"></div>
      <div className="relative text-gray-300">
        <h1
          className="text-5xl font-extrabold mb-6 text-lightText"
          style={{
            textShadow: '0 0 5px rgba(50, 50, 50, 0.8), 0 0 10px rgba(50, 50, 50, 0.7), 0 0 15px rgba(50, 50, 50, 0.6)',
          }}
        >
          <span className='text-white'>Welcome to the <Logo />.</span>
          <h1 className="text-xl">@ Gachon University, Republic of Korea.</h1>
        </h1>
        <h3
          className="text-lg mb-8 text-lightText leading-relaxed"
          style={{
            textShadow: '0 0 5px rgba(50, 50, 50, 0.8), 0 0 10px rgba(50, 50, 50, 0.7), 0 0 15px rgba(50, 50, 50, 0.6)',
          }}
        >
          The 3SLab is focused on cutting-edge computational and experimental innovation research towards{' '}
          <span className="font-bold text-highlight3 text-2xl block">Sustainable Structural Systems.</span>{' '}
          Learn more about our work, team, and latest publications below.
        </h3>
      </div>
    </section>
  )
}

export default WelcomeSection
