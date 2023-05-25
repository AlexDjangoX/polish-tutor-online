'use client';

import {
  About,
  Navbar,
  Contact,
  Philosophy,
  Testimonials,
  Hero,
  NationalEmblems,
  Projects,
  StarsCanvas,
} from '../components/index.js';

const Page = () => {
  return (
    <div className="relative z-0 bg-primary">
      <div className=" bg-cover bg-no-repeat bg-center">
        <Navbar />
        <Hero />
      </div>
      <About />
      <Testimonials />
      <Philosophy />
      <NationalEmblems />
      <Projects />

      <div className="relative z-0">
        <Contact />
        <StarsCanvas />
      </div>
    </div>
  );
};

export default Page;
