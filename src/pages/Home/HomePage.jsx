import React from 'react'
import Hero from './components/Hero.jsx'
import Stats from './components/Stats.jsx'
import Features from './components/Features.jsx'
import ServicesPreview from './components/ServicesPreview.jsx'
import DoctorsPreview from './components/DoctorsPreview.jsx'
import Testimonials from './components/Testimonials.jsx' 
import AppointmentCTA from './components/AppointmentCTA.jsx'

const HomePage = () => {
  return (
    <div className="overflow-hidden">
      <Hero />
      <Stats />
      <Features />
      <ServicesPreview />
      <DoctorsPreview />
      <Testimonials />
      <AppointmentCTA />
    </div>
  )
}

export default HomePage