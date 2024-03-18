import React from 'react'
import logo1 from '../assets/shopping1.jpg'
import logo2 from '../assets/shopping2.jpg'
import logo3 from '../assets/shopping3.jpg'
import { Carousel } from "react-bootstrap";

const Slider = () => {
  return (
      <div className='carousel-div'> 
       <Carousel  className='carousel'  autoPlay={true} interval={4000}>
          <Carousel.Item>
              <img className="" src={logo1} alt="" />
          </Carousel.Item>
          <Carousel.Item>
              <img className="" src={logo2} alt="" />
          </Carousel.Item>
          <Carousel.Item>
              <img className="" src={logo3} alt="" />
          </Carousel.Item>
      </Carousel></div>
  )
}

export default Slider