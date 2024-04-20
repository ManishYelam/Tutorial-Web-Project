import React from 'react'
import './Ad_section.css'
import zomato from '../Images/zomato.jpg'
import opi from '../Images/OIP.jpg'

function Ad_section() {
  return (
    <div className='ad-container'>
      <img src={zomato} alt="" />
      <img src={opi} alt="" />
        
    </div>
  )
}

export default Ad_section;