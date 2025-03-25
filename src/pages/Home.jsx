import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Hero from '../components/Hero/Hero'
import Services from '../components/services/Serives'
import Bottom from '../components/Bottom/Bottom'

const Home = () => {
  return (
    <>
     <Navbar />
      <Hero />
      <Services />
      <Bottom />
    </>
  )
}

export default Home
