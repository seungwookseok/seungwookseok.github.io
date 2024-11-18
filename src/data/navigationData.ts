// navigation.ts

export interface NavigationItem {
  name: string
  href: string
  current: boolean
}

const navigationItems = {
  Home: { name: 'Home', href: '/' },
  Research: { name: 'Research', href: '/research' },
  Investigator: { name: 'Principle Investigator', href: '/investigator' },
  Members: { name: 'Members', href: '/members' },
  Publications: { name: 'Publications', href: '/publications' },
  News: { name: 'News', href: '/news' },
}

const isCurrentPage = (name: string, currentPage: string) => name === currentPage

export const navigationData = (currentPage: string): NavigationItem[] =>
  Object.keys(navigationItems).map((key) => ({
    ...navigationItems[key as keyof typeof navigationItems],
    current: isCurrentPage(key, currentPage),
  }))
