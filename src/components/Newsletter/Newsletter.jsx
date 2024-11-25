import React from 'react'
import './newsletter.css'
const Newsletter = () => {
  return (
    <section className='newsletter-container'>
        <div className='newsletter-wrapper'>
        <div className='newsletter-details'>
        <h6>Newsletter</h6>
        <h3>Watch our Courses</h3>
        <p>Problems trying to resolve the conflict between 
        the two major realms of Classical physics: Newtonian mechanics </p>
        </div>
        <div className='subscribe'>
        <input className='input' type="email" placeholder="Your Email" />
        <button className="subscribe-btn">Subscribe</button>
        </div>
      </div>
    </section>
  )
}

export default Newsletter
