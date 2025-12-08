import React from 'react'
import Hero from '@/pages/Home/Components/Hero'
import Stats from '@/pages/Home/Components/Stats'
import Features from '@/pages/Home/components/Features'
import ServicesPreview from '@/pages/Home/components/ServicesPreview'
import DoctorsPreview from '@/pages/Home/components/DoctorsPreview'
import Testimonials from '@/pages/Home/components/Testimonials' 
import AppointmentCTA from '@/pages/Home/components/AppointmentCTA'

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