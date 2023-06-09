import React from 'react'

const ExpertTeam = () => {
  return (
    <div className='w-full h-[700px] flex flex-col justify-center items-center'>
      <div className='flex flex-col justify-center items-center gap-10'>
      <div className='flex w-[140px]  bg-[#F4F4F4]'>
      <div className='border-r-4 border-[#FFB629] mr-2'></div>
      <p>The Transporter</p>
    </div>
        <h2>Meet Expert Team</h2>
        <div className='flex gap-12'>
          <img className='w-[300px] h-[400px]' src="/assests/experts-1.png" alt="" />
          <img className='w-[300px] h-[400px]' src="assests/experts-2.png" alt="" />
          <img className='w-[300px] h-[400px]' src="/assests/experts-3.png" alt="" />
        </div>
      </div>
    </div>
  )
}

export default ExpertTeam