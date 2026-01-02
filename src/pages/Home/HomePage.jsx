import React from 'react'
import Hero from '@pages/Home/components/Hero.jsx'
import Stats from '@pages/Home/components/Stats.jsx'
import About from '@/pages/Home/components/AboutUs.jsx'
import Services from '@/pages/Home/components/Services.jsx'
import DoctorsPreview from '@pages/Home/components/DoctorsPreview.jsx'
import Testimonials from '@pages/Home/components/Testimonials.jsx' 
import AppointmentCTA from '@pages/Home/components/AppointmentCTA.jsx'

const HomePage = () => {
  return (
    <div className="overflow-hidden">
      <Hero />
      <Stats />
      <About />
      <Services />
      <DoctorsPreview />
      <Testimonials />
      {/* <AppointmentCTA /> */}
    </div>
  )
}

export default HomePage