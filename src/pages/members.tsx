import React from 'react'
import Layout from '../components/Layout'
import SectionWrapper from '../components/SectionWrapper'
import MemberCard from '../components/MemberCard'
import { membersData } from '../data/membersData'
import { navigationData } from '../data/navigationData'

export default function MembersPage() {
  return (
    <Layout navigation={navigationData('Members')}>
      <SectionWrapper title="Current Researchers">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {membersData.members.map((member, index) => (
            <MemberCard
              key={index}
              member={member}
            />
          ))}
        </div>
      </SectionWrapper>
    </Layout>
  )
}
