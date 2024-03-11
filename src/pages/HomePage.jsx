import React from 'react'
import Navbar from '../components/Navbar'
import TechStack from '../components/TechStack'
import About from '../components/About'
import Client from '../components/Client'
import Speciality from '../components/Speciality'
import Footer from '../components/Footer'
import Choose from '../components/Choose'
import Contact from '../components/Contact'
import Partners from '../components/Partners'
import Home from '../components/Home'

const HomePage = () => {
  return (
    <>
        <Navbar />
        <Home />
        <TechStack />
        <About />
        <Choose />
        <Speciality />
        <Client />
        <Partners />
        <Contact />
        <Footer />
    </>
  )
}

export default HomePage
