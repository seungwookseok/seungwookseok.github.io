import React, { useState } from 'react'
import Masonry from 'react-masonry-css'
import Layout from '../components/Layout'
import SectionWrapper from '../components/SectionWrapper'
import { refereedJournalData, refereedConferenceData, refereedDOIData } from '../data/publicationsData'
import { navigationData } from '../data/navigationData'
import JournalCard from '../components/JournalCard'
import ConferenceCard from '../components/ConferenceCard'
import DOICard from '../components/DOICard'

const ITEMS_PER_PAGE = 6

export default function PublicationsPage() {
  const [visibleJournals, setVisibleJournals] = useState(ITEMS_PER_PAGE)
  const [visibleConferences, setVisibleConferences] = useState(ITEMS_PER_PAGE)
  const [visibleDOIs, setVisibleDOIs] = useState(ITEMS_PER_PAGE)

  const handleLoadMoreJournals = () => setVisibleJournals((prev) => prev + ITEMS_PER_PAGE)
  const handleLoadMoreConferences = () => setVisibleConferences((prev) => prev + ITEMS_PER_PAGE)
  const handleLoadMoreDOIs = () => setVisibleDOIs((prev) => prev + ITEMS_PER_PAGE)

  // Masonry 브레이크포인트 설정 (화면 크기에 따라 컬럼 수 조절)
  const masonryBreakpoints = {
    default: 2, // 기본적으로 2컬럼
    768: 1 // 화면이 768px 이하일 때는 1컬럼
  }

  return (
    <Layout navigation={navigationData('Publications')}>
      {/* Refereed Journals Section */}
      <SectionWrapper title="Articles in Refereed Journals">
        <Masonry
          breakpointCols={masonryBreakpoints}
          className="publications-masonry-grid"
          columnClassName="publications-masonry-grid_column"
        >
          {refereedJournalData.slice(0, visibleJournals).map((journal) => (
            <div key={journal.id}>
              <JournalCard journal={journal} />
            </div>
          ))}
        </Masonry>
        {visibleJournals < refereedJournalData.length && (
          <div className="flex justify-center mt-8">
            <button
              onClick={handleLoadMoreJournals}
              className="flex items-center justify-center px-4 py-2 text-sm font-medium text-highlight4 border border-highlight4 rounded-md hover:bg-highlight4 hover:bg-opacity-70 transition-colors"
            >
              Load More Journals
            </button>
          </div>
        )}
      </SectionWrapper>

      {/* Conference Proceedings Section */}
      <SectionWrapper title="Conference Proceedings">
        <Masonry
          breakpointCols={masonryBreakpoints}
          className="publications-masonry-grid"
          columnClassName="publications-masonry-grid_column"
        >
          {refereedConferenceData.slice(0, visibleConferences).map((conference) => (
            <div key={conference.id}>
              <ConferenceCard conference={conference} />
            </div>
          ))}
        </Masonry>
        {visibleConferences < refereedConferenceData.length && (
          <div className="flex justify-center mt-8">
            <button
              onClick={handleLoadMoreConferences}
              className="flex items-center justify-center px-4 py-2 text-sm font-medium text-highlight4 border border-highlight4 rounded-md hover:bg-highlight4 hover:bg-opacity-70 transition-colors"
            >
              Load More Conferences
            </button>
          </div>
        )}
      </SectionWrapper>

      {/* DOI Section */}
      <SectionWrapper title="Digital Objective Identifier (DOI)">
        <Masonry
          breakpointCols={masonryBreakpoints}
          className="publications-masonry-grid"
          columnClassName="publications-masonry-grid_column"
        >
          {refereedDOIData.slice(0, visibleDOIs).map((doi) => (
            <div key={doi.id}>
              <DOICard doi={doi} />
            </div>
          ))}
        </Masonry>
        {visibleDOIs < refereedDOIData.length && (
          <div className="flex justify-center mt-8">
            <button
              onClick={handleLoadMoreDOIs}
              className="flex items-center justify-center px-4 py-2 text-sm font-medium text-highlight4 border border-highlight4 rounded-md hover:bg-highlight4 hover:bg-opacity-70 transition-colors"
            >
              Load More DOIs
            </button>
          </div>
        )}
      </SectionWrapper>
    </Layout>
  )
}
