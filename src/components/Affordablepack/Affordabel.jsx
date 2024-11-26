import React from 'react'
import Reusepackage from '../Reusepackage/Reusepackage'
import imge from "../../assets/productcover.png"
import fiximge from "../../assets/fixedwidth.png"
import borderimge from "../../assets/rightborder.png"
import { FaRegHeart } from "react-icons/fa";
import { BsCart } from "react-icons/bs";
import { TiEye } from "react-icons/ti";
import './affordabel.css'
import Reusetitle from '../Reusetitle/Reusetitle'


const Affordabel = () => {
  return (
    <section className='affordable-area'>
    <div className='affordable-title'>
       <Reusetitle title="Practice Advice" heading="Approdable Packages" description="Problems trying to resolve the conflict between 
      the two major realms of Classical physics: Newtonian mechanics"/>
    </div>
     <div  className='affordable-wrapper'>
     <Reusepackage courseimg={imge} courselink="2,769 online courses"
      heading="Watch our Courses" ficon={<FaRegHeart />} sicon={<BsCart/>} ticon={<TiEye />} imgsale="Sale"/>
      <Reusepackage courseimg={fiximge} courselink="Lifetime access"
      heading="Our Experts Teacher" lineimg={borderimge } />
     </div>
</section>
  )
}

export default Affordabel
