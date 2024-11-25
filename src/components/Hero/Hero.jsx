import React from 'react'
import Img from "../../assets/heroimg.png"
import '../Hero/hero.css'

const Hero = () => {
  return (
    <section className='hero-area'>
        <div className='hero-container'>
         <div className='hero-left'>
          <div className='hero-wrapper'>
          <h5>Welcome</h5>
          <h1>Best Learning Opportunities</h1>
          <p>Our goal is to make online education work for everyone</p>
          <div className='btn'>
          <button className='join-btn'>Join Us</button>
          <a className='learn-btn'>Learn More</a>
          </div>
          </div>
         </div>
       <div className='hero-right'>
        <img src={Img} alt="image not found" />
      </div>
      </div>

    </section>
      
  )
}

export default Hero
