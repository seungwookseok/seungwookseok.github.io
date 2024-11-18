import React, { useState, useEffect } from "react"
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon, AcademicCapIcon } from '@heroicons/react/24/outline'
import { Link } from 'gatsby'
import Logo from "../assets/logo"

export interface NavigationItem {
  name: string
  href: string
  current: boolean
}

export interface NavBarProps {
  initialNavigation: NavigationItem[]
}

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar({ initialNavigation = [] }: NavBarProps) {
  const [navigation, setNavigation] = useState<NavigationItem[]>(initialNavigation)

  useEffect(() => {
    const currentPath = window.location.pathname;
    setNavigation(prevNavigation =>
      prevNavigation.map(item =>
        item.href === currentPath ? { ...item, current: true } : { ...item, current: false }
      )
    );
  }, []);

  const handleNavigationClick = (clickedItem: NavigationItem) => {
    setNavigation(navigation.map(item =>
      item.name === clickedItem.name ? { ...item, current: true } : { ...item, current: false }
    ))
  }

  return (
    <Disclosure as="nav" id="navbar" className="bg-gray-900 fixed top-0 w-full h-16 z-10">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              {/* Mobile menu button */}
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2
                text-gray-400 hover:bg-primary hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-expanded={open ? 'true' : 'false'}>
                  <span className="sr-only">Open main menu</span>
                  <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden" />
                  <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" />
                </DisclosureButton>
              </div>

              {/* Logo and menu */}
              <div className="flex flex-1 items-center justify-center whitespace-nowrap">
                <div className="flex items-center gap-2 min-w-[150px] whitespace-nowrap">
                  <AcademicCapIcon className="h-8 w-8 text-primary" />
                  <h2 className="text-3xl font-bold sm:text-2xl"><Logo includeDot={false}/></h2>
                </div>

                {/* Main navigation items (hidden on small screens) */}
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        aria-current={item.current ? 'page' : undefined}
                        className={classNames(
                          item.current ? 'bg-secondary text-white' : 'text-gray-300 hover:bg-primary hover:text-white',
                          'rounded-md px-3 py-2 text-sm font-medium whitespace-nowrap'
                        )}
                        onClick={() => handleNavigationClick(item)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile menu */}
          <DisclosurePanel className="sm:hidden bg-gray-900">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <DisclosureButton
                  key={item.name}
                  as={Link}
                  to={item.href}
                  aria-current={item.current ? 'page' : undefined}
                  className={classNames(
                    item.current ? 'bg-secondary text-white' : 'text-gray-300 hover:bg-primary hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium whitespace-nowrap'
                  )}
                  onClick={() => handleNavigationClick(item)}
                >
                  {item.name}
                </DisclosureButton>
              ))}
            </div>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  )
}
