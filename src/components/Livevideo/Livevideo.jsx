import React from 'react'
import veimg from "../../assets/livevideo.png"
import Img from "../../assets/arrow.png"
import './livevideo.css'
const Livevideo = () => {
  return (
    <section className='video-area'>
          <div className='video-wrapper'>
          <div className='video-left'>
           <img src={veimg} alt="" />
          </div>
          <div className='video-right'>
             <h2>Video in Live 
              Action</h2>
              <p>Problems trying to resolve the conflict between 
               the two major realms of Classical physics: 
               Newtonian mechanics </p>
            <a className='video-btn'>Learn More <img src={Img} alt="image not found" /> </a>
         </div>
          </div>
       
        </section>
  )
}

export default Livevideo
