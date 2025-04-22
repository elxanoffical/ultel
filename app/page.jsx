import React from 'react'
import Hero from './components/hero'
import Xidmetler from './components/xidmetler'
import NewsSection from './components/newSection'
import ContactSection from './components/contact'

export default function HomePage() {
  return (
    <div>
      <Hero/>
      <Xidmetler/>
      <NewsSection/>
      <ContactSection/>
    </div>
  )
}
