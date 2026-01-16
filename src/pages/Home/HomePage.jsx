import React from 'react';

import CareApproach from '@/pages/Home/components/CareApproach.jsx';
import Services from '@/pages/Home/components/Services.jsx';
import Hero from '@pages/Home/components/Hero.jsx';

import BlogPage from '../Blogs/Blog';

const HomePage = () => {
  return (
    <div className="overflow-hidden">
      <Hero />
      {/* <Stats /> */}
      {/* <About /> */}

      <CareApproach/>
      <Services />
      <BlogPage />

   
      
      {/* <DoctorsPreview /> */}
      {/* <Testimonials /> */}
      {/* <AppointmentCTA /> */}
    </div>
  )
}

export default HomePage