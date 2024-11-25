import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import './bottomfooter.css'

const Bottomfooter = () => {
  return (
    <section className='contact-container'>
    <div className='contact-link'>
      <div className='contact-left'>
      <h6>Made With Love By Figmaland All Right Reserved </h6>
      </div>
       <div className='contact-right'>
       <span><FaFacebook /></span>
        <span><FaInstagram /></span>
        <span><FaTwitter /></span>
       </div>
     </div>
    </section>
  )
}

export default Bottomfooter
