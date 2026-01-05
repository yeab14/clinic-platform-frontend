import React from 'react';

import Services from '@/pages/Home/components/Services.jsx';
import Hero from '@pages/Home/components/Hero.jsx';
import Stats from '@pages/Home/components/Stats.jsx';
import Testimonials from '@pages/Home/components/Testimonials.jsx';

const HomePage = () => {
  return (
    <div className="overflow-hidden">
      <Hero />
      <Stats />
      {/* <About /> */}
      <Services />
      {/* <DoctorsPreview /> */}
      <Testimonials />
      {/* <AppointmentCTA /> */}
    </div>
  )
}

export default HomePage