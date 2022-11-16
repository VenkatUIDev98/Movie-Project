import React from 'react'
import '../assets/styles/Landingpage.css';
import Header from './Header';
import Carousel from '../pages/carousel'
import Cards from '../pages/cards'

const Landingpage = () => {
  return (
    <div>
      <Header />
      <Carousel />
      <Cards />
    </div>
  )
}

export default Landingpage