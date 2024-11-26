import React from 'react'
import { FiPhoneCall } from "react-icons/fi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { MdEmail } from "react-icons/md";

import './footer.css'
const Footer = () => {
  return (
    <section className='footer'>
       <footer className='footer-parent'>
        <div className='single-item-footer'>
         <h5>Company Info</h5>
          <div className='footer-link-div'>
            <ul className='footer-link'>
                <li><a href="">About Us</a></li>
                <li><a href="">Carrier</a></li>
                <li><a href="">We are hiring</a></li>
                <li><a href="">Blog</a></li>
            </ul>
           </div>
          </div>
          <div className='single-item-footer'>
          <h5>Legal</h5>
          <div className='footer-link-div'>
            <ul className='footer-link'>
                <li><a href="">About Us</a></li>
                <li><a href="">Carrier</a></li>
                <li><a href="">We are hiring</a></li>
                <li><a href="">Blog</a></li>
            </ul>
           </div>
          </div>
          <div className='single-item-footer'>
          <h5>Features</h5>
          <div className='footer-link-div'>
            <ul className='footer-link'>
                <li><a href="">Business Marketing</a></li>
                <li><a href="">User Analytic</a></li>
                <li><a href="">Live Chat</a></li>
                <li><a href="">Unlimited Support</a></li>
            </ul>
           </div>
          </div>
          <div className='single-item-footer'>
          <h5>Resources</h5>
          <div className='footer-link-div'>
            <ul className='footer-link'>
                <li><a href="">IOS & Android</a></li>
                <li><a href="">Watch a Demo</a></li>
                <li><a href="">Customers</a></li>
                <li><a href="">API</a></li>
            </ul>
           </div>
          </div>
          <div className='single-item-footer'>
          <h5>Get In Touch</h5>
          <div className='footer-link-div'>
            <ul className='footer-link'>
                <li><a href=""><span><FiPhoneCall /></span>(480) 555-0103</a></li>
                <li><a href=""><span><HiOutlineLocationMarker /></span>4517 Washington Ave. Manchester, 
                Kentucky 39495</a></li>
                <li><a href=""><span><MdEmail /></span>debra.holt@example.com</a></li>
                </ul>
           </div>
          </div>
    
    </footer>
      
      </section>
  )
}

export default Footer

