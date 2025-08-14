'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { Home, Building2, HelpCircle, Mail } from 'lucide-react'
import { NavBar } from "@/components/ui/tubelight-navbar"

export default function Navigation() {
  const router = useRouter()
  const [activeSection, setActiveSection] = useState('Home')

  const navItems = [
    { name: 'Home', url: '/', icon: Home },
    { name: 'Apartments', url: '/apartments', icon: Building2 },
    { name: 'Amenities', url: '/amenities', icon: Building2 },
    { name: 'Pricing', url: '/pricing', icon: Building2 },
    { name: 'FAQ', url: '/#faq', icon: HelpCircle },
    { name: 'Contact', url: '/#contact', icon: Mail }
  ]

  // Set active section based on current route
  useEffect(() => {
    const path = router.pathname
    if (path === '/') {
      setActiveSection('Home')
    } else if (path === '/apartments') {
      setActiveSection('Apartments')
    } else if (path === '/amenities') {
      setActiveSection('Amenities')
    } else if (path === '/pricing') {
      setActiveSection('Pricing')
    } else if (path === '/fulton-market-chicago') {
      setActiveSection('Home') // Neighborhood page uses Home styling
    }
  }, [router.pathname])

  // Only add scroll listener on home page
  useEffect(() => {
    if (router.pathname !== '/') return

    const handleScroll = () => {
      const sections = ['hero', 'apartments', 'faq', 'contact']
      const current = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })

      if (current) {
        const sectionNameMap = {
          hero: 'Home',
          apartments: 'Apartments',
          faq: 'FAQ',
          contact: 'Contact'
        }
        setActiveSection(sectionNameMap[current as keyof typeof sectionNameMap])
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Check on mount

    return () => window.removeEventListener('scroll', handleScroll)
  }, [router.pathname])

  // Add smooth scrolling behavior
  useEffect(() => {
    const style = document.createElement('style')
    style.textContent = `
      html {
        scroll-behavior: smooth;
      }
    `
    document.head.appendChild(style)

    return () => {
      document.head.removeChild(style)
    }
  }, [])

  return (
    <NavBar 
      items={navItems}
      activeTab={activeSection}
    />
  )
}