import React from 'react'
import Layout from '../components/Layout'
import ImageCard, { HoverEffect } from '../components/ImageCard'
import SectionWrapper from '../components/SectionWrapper'
import { researchData } from '../data/researchData'
import { navigationData } from '../data/navigationData'

export default function ResearchPage() {
  return (
    <Layout navigation={navigationData('Research')}>
      <SectionWrapper title="Research Area">
        <div className="grid grid-cols-1 gap-8">
          {researchData.research_interests.map((interest, index) => (
            <ImageCard
              key={index}
              title={interest.field}
              content={
                <ul className="list-disc pl-5 space-y-2">
                  {interest.topics.map((topic, i) => (
                    <li key={i}>{topic}</li>
                  ))}
                </ul>
              }
              imageSrc={interest.imageSrc}
              imageAlt={interest.imageAlt}
              imagePosition={index % 2 === 0 ? 'left' : 'right'}
              hoverEffect={HoverEffect.ColorChange}
              alignment='center'
              cardBg='bg-cardBg1'
              highlight='text-highlight1'
            />
          ))}
        </div>
      </SectionWrapper>
    </Layout>
  )
}
