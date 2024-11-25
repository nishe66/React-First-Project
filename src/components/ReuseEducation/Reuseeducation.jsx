import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import './reuseeducation.css'
const Reuseeducation = (props) => {
  return (
    <div className='education-container'> 
      <div className='education-wrapper'>
        <img src={props.eduimage} alt=""/>
        <h5>Julian Jameson</h5>
         <p>Profession</p>
        <div className='edu-icon'>
          <span><FaFacebook /></span>
          <span><FaInstagram /></span>
          <span><FaTwitter /></span>
     
         </div>

      </div>
    </div>
  )
}

export default Reuseeducation
