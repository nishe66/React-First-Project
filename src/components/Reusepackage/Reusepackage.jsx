import React from 'react'
import dimge from "../../assets/download.png"
import cimge from "../../assets/calendar.png"
import chartimge from "../../assets/chart.png"
import pimge from "../../assets/progess.png"
import limge from "../../assets/arrow.png"
import rimge from "../../assets/star.png"
import { FaRegHeart } from "react-icons/fa";
import { BsCart } from "react-icons/bs";
import { TiEye } from "react-icons/ti";
import './reusepackage.css'

const Reusepackage = (props) => {
  return (
   <div className='course-area-container'>
    <div className='course-package'>
      <div className='imge-div'>
        <img src={props.courseimg} alt="" />
        <h6>{props.imgsale}</h6>
        <div className='imge-icon'>
        <span>{props.ficon}</span>
        <span>{props.sicon}</span>
        <span>{props.ticon}</span>
        </div>
      </div>
     <div className='course-details'>
     <a href="">{props.courselink}</a>
     <h5>{props.heading}</h5>
     <p>We focus on ergonomics and 
      meeting you where you work. It's 
      only a keystroke away.</p>
      <h6> <img src={dimge} alt="" />15 Sales</h6>
      <div className='price-range'>
      <h5 className='orginal'>$16.48</h5>
      <h5 className='discount'>$6.48</h5>
      </div>
      <div className='course-icon'>
        <p><img src={cimge} alt="" />22h...</p>
        <p> <img src={chartimge} alt=""/>64 Lessons</p>
        <p><img src={pimge} alt="" />Progress</p>
      </div>
      <div className='course-btn'>
      <a href=""> Learn More <img src={limge} alt="" /></a>
      </div>
   </div>

   <div className='rating'>
    <p> <img src={rimge} alt="" />4.9</p>
    </div>
    <div className='border-line'> <img src={props.lineimg} alt="" /></div>
    </div>
   
   </div>
  )
}

export default Reusepackage
