import React from 'react'
import Img from "../../assets/arrow.png"
import cImg from "../../assets/cool.svg"
import tImg from "../../assets/telescope.png"

import './package.css'
const Pakage = () => {
  return (
    <section className='package'>
        <div className='package-container'>
         <div className='package-left'>
              <h2>Approdable Packages</h2>
              <p>Problems trying to resolve the conflict between 
               the two major realms of Classical physics: 
               Newtonian mechanics </p>
               <a className='pack-btn'>Learn More <img src={Img} alt="image not found" /> </a>
         </div>

         <div className='package-right'>
           <div className='single-package'>
            <img  src={cImg} alt="" />
            <h5>Certified Teacher</h5>
            <p>The gradual 
             accumulation of 
             information about</p>
           </div>
           <div className='single-package'>
            <img src={tImg} alt="" />
            <h5>Expert instruction</h5>
            <p>The gradual 
             accumulation of 
             information about</p>
           </div>
         </div>
          
         </div>
 
      
    </section>
  )
}

export default Pakage
