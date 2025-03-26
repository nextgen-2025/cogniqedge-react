import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Hero from '../components/Hero/Hero'
import Bottom from '../components/Bottom/Bottom'
import Service from '../components/Services/Serives'

const Home = () => {
  return (
    <>
     <Navbar />
      <Hero />
      <Service /> 
      <Bottom />
    </>
  )
}

export default Home
