import React from 'react'
import imgg from '../img/Ads 1.png'
import imgf from '../img/Ads 2.png'

const Hero = () => {
  return (
    <div className='flex justify-around mt-4'>
        <img src={imgg} alt="" />
        <img src={imgf} alt="" />
    </div>
  )
}

export default Hero