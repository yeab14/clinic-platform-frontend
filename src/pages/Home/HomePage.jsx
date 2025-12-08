import React from 'react'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Features from './components/Features'
import ServicesPreview from './components/ServicesPreview'
import DoctorsPreview from './components/DoctorsPreview'
import AppointmentCTA from './components/AppointmentCTA'

const HomePage = () => {
  return (
    <div className="overflow-hidden">
      <Hero />
      <Stats />
      <Features />
      <ServicesPreview />
      <DoctorsPreview />
      <AppointmentCTA />
    </div>
  )
}

export default HomePage