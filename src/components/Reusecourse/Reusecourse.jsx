import React from 'react'
import rimge from "../../assets/ratingfast.png"
import rimge1 from "../../assets/ratingfast.png"
import rimge2 from "../../assets/ratingfast.png"
import rimge3 from "../../assets/ratingfast.png"
import rimge4 from "../../assets/ratinglast.png"
import './reusecourse.css'

const Reusecourse = (props) => {
  return (
    <div className='course-container'>
      <div className='course-wrapper'>
        <img className="desinger-img"src={props.designerimg} alt="" />
        <p>Slate helps you see how many more days 
         you need to work to reach your financial 
         goal for the month and year.</p>
         <div className='designer-rating'>
            <span><img src={rimge}alt="" /></span>
            <span><img src={rimge1}alt="" /></span>
            <span><img src={rimge2}alt="" /></span>
            <span><img src={rimge3}alt="" /></span>
            <span><img src={rimge4}alt="" /></span>
          
         </div>
         <h5>Regina Miles</h5>
         <h6>Designer</h6>
        

      </div>
    </div>
  )
}

export default Reusecourse
