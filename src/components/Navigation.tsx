'use client'

import { useEffect, useState } from 'react'
import { Home, Building2, HelpCircle, Mail } from 'lucide-react'
import { NavBar } from "@/components/ui/tubelight-navbar"

export default function Navigation() {
  const [activeSection, setActiveSection] = useState('Home')

  const navItems = [
    { name: 'Home', url: '#hero', icon: Home },
    { name: 'Apartments', url: '#apartments', icon: Building2 },
    { name: 'FAQ', url: '#faq', icon: HelpCircle },
    { name: 'Contact', url: '#contact', icon: Mail }
  ]

  useEffect(() => {
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
  }, [])

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