import React from 'react'
import Navbar from './Navbar'

const Banner = () => {
  return (
    <div className='relative'>
    <div className='w-full absolute'>
      <Navbar/> 
    </div> 
    <div className='absolute w-[571px] h-[406px] text-white items-start left-[200px] top-[173px]'>
    <div className='flex w-[300px]  bg-[#041C3780] my-4'>
      <div className='border-r-4 border-[#FFB629] mr-5'></div>
      <p>Logistics & Supply Chain Solutions</p>
    </div>
    <h1>Your Gateway<br />
    to any Destination in the World
    </h1>
    <p className='py-4'>In augue ligula, feugiat ut nulla consequat. Ut est lacus, molestie in arcu no, iaculis vehicula ipsum. Nunc faucibus, nisl id dapibus finibus, enim diam interdum nulla, sed laoreet risus lectus. 
    </p>
    <img src="/assests/explore.png" alt="" />
    </div> 
    <div>
      <img src="/assests/Backgroound.jpg" alt=""/>
    </div>
    </div>
  )
}

export default Banner