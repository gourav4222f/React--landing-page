import React from 'react'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import PartnersSection from './components/PartnersSection '
import { TextParallaxContentExample } from './components/Service'
import AboutSection from './components/AboutSection'
import Lenis from 'lenis'
import { SmoothScrollHero } from './components/Herosection'
import AddSection from './components/AddSection'
import ScrollSection from './components/ScrollSection'
import HeroSectionforpage from './components/HeroSectionforpage'
import Testimonial from './components/Testimonial'
import SectionTwo from './components/SectionTwo'
import BlogSection from './components/BlogSection '
import Products from './components/Products'
import Test from './components/Test'

function App() {

  const lenis = new Lenis({
    autoRaf: true,
  });

  // Listen for the scroll event and log the event data
  lenis.on('scroll', (e) => {
    console.log(e);
  });

  return (
    <div className=' w-screen h-auto '>
      <Navbar />
      <SmoothScrollHero />
      <AboutSection />
      <HeroSectionforpage />
      <Products />
      <SectionTwo />
      <TextParallaxContentExample />
      <Test />
      <BlogSection />
      <PartnersSection />
      <Testimonial />
      <AddSection />      
      <Footer />
    </div>
  )
}

export default App
