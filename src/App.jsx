import { useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Brand from './components/Brand'
import About from './components/About'
import Custom from './components/Custom-Service'
import Testimonial from './components/Testimonial'
import Contact from './components/Contact'
import Footer from './components/Footer'
import luxy from 'luxy.js'

function App() {
  useEffect(() => {
      luxy.init({
        wrapper: "#luxy",
        wrapperSpeed: 0.08,
      });

  }, []);

  return (
    <main id='luxy'>
      <Navbar />
      <Hero />
      <Brand />
      <About />
      <Custom />
      <Testimonial />
      <Contact />
      <Footer />
    </main>
  )
}

export default App
