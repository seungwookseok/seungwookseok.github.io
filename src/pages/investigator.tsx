import React from 'react'
import Layout from '../components/Layout'
import { navigationData } from '../data/navigationData'
import TimelineComponent from '../components/TimelineComponent'
import SectionWrapper from '../components/SectionWrapper'
import InvestigatorInfo from '../components/InvestigatorInfo'
import RewardAndHonors from '../components/RewardAndHonors'

export default function InvestigatorPage() {
  return (
    <Layout navigation={navigationData('Investigator')}>
      <SectionWrapper title='Seungwook Seok, Ph.D.'>
        <InvestigatorInfo />
      </SectionWrapper>

      <SectionWrapper title='Education and Employment History'>
        <TimelineComponent />
      </SectionWrapper>

      <SectionWrapper title='Honors & Awards'>
        <RewardAndHonors />
      </SectionWrapper>
    </Layout>
  )
}
