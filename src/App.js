import React from 'react';
import './App.css';
import Hero from './components/Hero/Hero';
import Header from './components/Header/Header';
import About from './components/About/About';
import Lenis from '@studio-freight/lenis'
import Skills from './components/Skills/Skills';
import Work from './components/Work/Work';
import Testimonial from './components/Testimonial/Testimonial';
import Footer from './components/Footer/Footer';
import HelloAnimation from './components/Hello animation/Hello';

function App() {

  const lenis = new Lenis()

  lenis.on('scroll', (e) => {
    console.log(e)
  })

  function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }

  requestAnimationFrame(raf)

  return (
    <div className="App">
      <HelloAnimation />
      <Header />
      <Hero />
      <About />
      <Work />
      <Testimonial />
      <Skills />
      <Footer />
    </div>
  );
}

export default App;
