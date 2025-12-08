import React from 'react'
import Hero from '@pages/Home/components/Hero.jsx'
import Stats from '@pages/Home/components/Stats.jsx'
import Features from '@pages/Home/components/Features.jsx'
import ServicesPreview from '@pages/Home/components/ServicesPreview.jsx'
import DoctorsPreview from '@pages/Home/components/DoctorsPreview.jsx'
import Testimonials from '@pages/Home/components/Testimonials.jsx' 
import AppointmentCTA from '@pages/Home/components/AppointmentCTA.jsx'

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