import React from 'react'
import Reuseeducation from '../ReuseEducation/Reuseeducation'
import eduimg1 from "../../assets/educationpic1.png"
import eduimg2 from "../../assets/educationpic2.png"
import eduimg3 from "../../assets/educationpic3.png"
import eduimg4 from "../../assets/educationpic4.png"
import './education.css'
import Reusetitle from '../Reusetitle/Reusetitle'
const Education = () => {
  return (
    <div className='education-container'>
     <div className='education-title'>
     <Reusetitle title="Team" heading="Get Quality Education" description="Problems trying to resolve the conflict between 
     the two major realms of Classical physics: Newtonian mechanics "/>
     </div>
   <div className='education-parent'>
    <Reuseeducation eduimage={eduimg1}/>
    <Reuseeducation eduimage={eduimg2}/>
    <Reuseeducation eduimage={eduimg3}/>
    <Reuseeducation eduimage={eduimg4}/>
   </div>
    </div>
  )
}

export default Education
