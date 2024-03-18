import React from 'react'
import logo2 from '../assets/shopping2.jpg'
import logo3 from '../assets/shopping3.jpg'
import { Carousel } from "react-bootstrap";

const Slider = () => {
  return (
      <div className='carousel-div'> 
       <Carousel  className='carousel'  autoPlay={true} interval={4000}>
          <Carousel.Item>
                  <img className="" src="https://img.freepik.com/free-photo/online-fashion-shopping-with-laptop_23-2150400630.jpg?w=996&t=st=1710793862~exp=1710794462~hmac=003346f26a04a00abf6dac4ae08201d2663aa9784241c22d7c0d2259ef6af173" alt="" />
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