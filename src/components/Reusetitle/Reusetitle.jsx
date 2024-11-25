import React from 'react'
import './reusetitle.css'
const Reusetitle = (props) => {
  return (
    <div className='title-container'>
        <div className='reuse-title'>
       <div className='title-parent'>
        <h6>{props.title}</h6>
        <h2>{props.heading}</h2>
        <p>{props.description} </p>
    </div>
    </div>
    </div>
  )
}

export default Reusetitle
