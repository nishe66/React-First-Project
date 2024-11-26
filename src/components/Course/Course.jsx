import React from 'react'
import Reusecourse from '../Reusecourse/Reusecourse'
import dimgef from "../../assets/circlesec.png"
import dimgem from "../../assets/designermale.png"
import './course.css'
import Reusetitle from '../Reusetitle/Reusetitle'
const Course = () => {
  return (
    <section className='course-area'>
      <div className='course-title'>
          <Reusetitle title="Testimonials" heading="Watch our Courses" description="Problems trying to resolve the conflict between 
          the two major realms of Classical physics: Newtonian mechanics"/>
        </div>
      <div className='course-parent'>
      <Reusecourse designerimg={dimgef}/>
      <Reusecourse designerimg={dimgem}/>
    </div>
   
    </section>
  )
}

export default Course
