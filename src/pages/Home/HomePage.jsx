import React from 'react';

import Services from '@/pages/Home/components/Services.jsx';
import Hero from '@pages/Home/components/Hero.jsx';

import BlogPage from '../Blogs/Blog';

const HomePage = () => {
  return (
    <div className="overflow-hidden">
      <Hero />
      {/* <Stats /> */}
      {/* <About /> */}
      <Services />
      <BlogPage />
      {/* <DoctorsPreview /> */}
      {/* <Testimonials /> */}
      {/* <AppointmentCTA /> */}
    </div>
  )
}

export default HomePage