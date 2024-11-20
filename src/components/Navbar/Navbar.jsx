import React from 'react'
import Img from "../../assets/Vector.png"
import './navbar.css'
const Navbar = () => {
  return (
    <section className='navbar'>
       <div className='nav-container'>
          <div className='header-left'>
             <div className='logo-name'>
              <a href="">Brandname</a>
             </div>

             <div className='navbar-area'>
               <ul>
                <li><a href="">Home</a></li>
                <li><a href="">Product</a></li>
                <li><a href="">Pricing</a></li>
                <li><a href="">Contact</a></li>
               </ul>
             </div>
          </div>

          <div className='header-right'>
            <div className='login'>
              
              <a href="">Login</a>
              
            </div>
            <div className='join-us'>
              <a href="">Join Us <img src={Img} alt="imgae not found"/></a>
            </div>
             
          </div>
       </div>


    </section> 
  )
}

export default Navbar
