import React from 'react'
import Layout from '../components/Layout'
import { navigationData } from './../data/navigationData'
import IconCard from './../components/IconCard'
import { siteMapCardData, bgColors, highlightColors } from '../data/siteMapCardData'
import { Link } from 'gatsby'
import GoogleMap from './../components/GoogleMap'
import WelcomeSection from './../components/WelcomeSection'
import SectionWrapper from './../components/SectionWrapper'

export default function HomePage() {
  return (
    <Layout navigation={navigationData('Home')}>
      {/* Welcome Section */}
      <SectionWrapper>
        <div className="shadow-lg rounded-lg overflow-hidden">
          <WelcomeSection />
        </div>
      </SectionWrapper>

      {/* Site Map Section */}
      <SectionWrapper title="Site Map">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {siteMapCardData.map((item, index) => (
            <Link
              key={index}
              to={item.link}
              className="transform transition-transform hover:scale-105"
            >
              <IconCard
                title={item.title}
                description={item.description}
                icon={item.icon}
                link={item.link}
                bgColor={bgColors[index % bgColors.length]}
                highlightColor={highlightColors[index % highlightColors.length]}
              />
            </Link>
          ))}
        </div>
      </SectionWrapper>

      {/* Our Location Section */}
      <SectionWrapper title="Our Location">
        <div className="shadow-lg rounded-lg overflow-hidden">
          <GoogleMap />
        </div>
      </SectionWrapper>
    </Layout>
  )
}
