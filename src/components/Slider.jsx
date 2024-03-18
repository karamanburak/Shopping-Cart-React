import React from 'react'
import { Carousel } from "react-bootstrap";

const Slider = () => {
  return (
      <div className='carousel-div'> 
       <Carousel  className='carousel'  autoPlay={true} interval={4000}>
          <Carousel.Item>
                  <img  src="https://img.freepik.com/free-photo/online-fashion-shopping-with-laptop_23-2150400630.jpg?w=996&t=st=1710793862~exp=1710794462~hmac=003346f26a04a00abf6dac4ae08201d2663aa9784241c22d7c0d2259ef6af173" alt="" />
          </Carousel.Item>
          <Carousel.Item>
                  <img  src="https://img.freepik.com/free-photo/black-friday-elements-assortment_23-2149074076.jpg?w=1380&t=st=1710796413~exp=1710797013~hmac=2635268f26c610aff49eea7d1dc52627c51a2097cffba5ca6d09f32598d706c9" alt="" />
          </Carousel.Item>
          <Carousel.Item>
                  <img src="https://img.freepik.com/free-photo/bright-shopping-bags-pop-against-outoffocus-mall_91128-3556.jpg?t=st=1710796864~exp=1710800464~hmac=a6b316d6aa897c0ea925d83d03901dbacf5d74d5baa0ff358daa80fe4077ec3e&w=1380" alt="" />
          </Carousel.Item>
      </Carousel></div>
  )
}

export default Slider