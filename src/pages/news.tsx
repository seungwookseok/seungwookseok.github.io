import React, { useState } from 'react'
import Masonry from 'react-masonry-css'
import Layout from '../components/Layout'
import SectionWrapper from '../components/SectionWrapper'
import NewsCard from '../components/NewsCard'
import NewsModal from '../components/NewsModal'
import { newsData } from '../data/newsData'
import { navigationData } from '../data/navigationData'
import { NewsItem } from '../data/newsData'

const ITEMS_PER_PAGE = 6
export default function NewsPage() {
  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null)
  const [visibleNews, setVisibleNews] = useState(ITEMS_PER_PAGE)

  const handleCardClick = (newsItem: NewsItem) => {
    setSelectedNews(newsItem)
  }

  const handleCloseModal = () => {
    setSelectedNews(null)
  }

  const handleLoadMoreNews = () => {
    setVisibleNews((prev) => prev + ITEMS_PER_PAGE)
  }

  const breakpointColumnsObj = {
    default: 2,
    768: 1
  }

  return (
    <Layout navigation={navigationData('News')}>
      <SectionWrapper title="Latest News">
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="flex w-auto gap-6"
          columnClassName="masonry-grid_column space-y-6"
        >
          {newsData.news
            .slice()
            .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
            .slice(0, visibleNews)
            .map((newsItem, index) => (
              <NewsCard
                key={index}
                newsItem={newsItem}
                onClick={() => handleCardClick(newsItem)}
              />
          ))}
        </Masonry>

        {visibleNews < newsData.news.length && (
          <div className="flex justify-center mt-8">
            <button
              onClick={handleLoadMoreNews}
              className="flex items-center justify-center px-4 py-2 text-sm font-medium text-highlight4 border border-highlight4 rounded-md hover:bg-highlight4 hover:bg-opacity-70 transition-colors"
            >
              Load More News
            </button>
          </div>
        )}

        {selectedNews && (
          <NewsModal
            isOpen={!!selectedNews}
            newsItem={selectedNews}
            onClose={handleCloseModal}
          />
        )}
      </SectionWrapper>
    </Layout>
  )
}
