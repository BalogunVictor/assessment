import React from 'react'
import { AiOutlineClockCircle } from 'react-icons/ai'
import { BiEnvelope } from 'react-icons/bi'
import { BsTelephone } from 'react-icons/bs'

const Contact = () => {
  return (

    <div className='w-full h-[1000px] bg-[#091242] flex flex-col justify-center items-center text-white '>
      <div className='flex h-[500px]'>
        {/* ////////////////////// */}
        <div className='w-[400px] '>
        <div className='flex w-[100px] bg-[#041C3780] my-4'>
        <div className='border-r-4 border-[#FFB629] mr-2'></div>
        <p>Contact</p>
      </div>
          <h2>Get in touch with us</h2>
          <p className='py-4'>Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value.</p>

            <div className='flex justify-center items-center mr-[90px]'>
            <div className='h-[63px] w-[63px] bg-[#111C55] rounded-full flex justify-center items-center'>
              <BiEnvelope 
              size={20}
              style={{color:'#F6B426'}}
              />
            </div>
            <p className='text-white font-medium text-left px-4'>Email<br/>
            contact@logistics.com</p>
          </div>

          <div className='flex justify-center items-center mr-[140px] py-4'>
            <div className='h-[63px] w-[63px] bg-[#111C55] rounded-full flex justify-center items-center'>
              <BsTelephone
              size={20}
              style={{color:'#F6B426'}}
              />
            </div>
            <p className='text-white font-medium text-left px-4'>Call Us 
            <br/>(00) 112 365 489</p>
          </div>

          <div className='flex justify-center items-center mr-[100px]'>
          <div className='h-[63px] w-[63px] bg-[#111C55] rounded-full flex justify-center items-center'>
            <AiOutlineClockCircle 
            size={20}
            style={{color:'#F6B426'}}
            />
          </div>
          <p className='text-white font-medium text-left px-4'>Mon - Sat 9.00 - 18.00<br/>Sunday Closed</p>
        </div>
      </div>
          
          

        {/* ////////////////////// */}
        <div className='w-[700px] ml-10  '>
          <form className='w-[600px]'>
            <div className='grid grid-cols-2 gap-6'>
              <input 
                className='w-[300px] h-14 bg-inherit border-2 border-white' type="text" 
                placeholder='Your name*' 
              />
              <input 
                className='w-[300px] h-14 bg-inherit border-2 border-white'
                type="text" 
                placeholder='Email*'
               />
              <input 
                className='w-[300px] h-14 bg-inherit border-2 border-white' 
                type="text" 
                placeholder='Phone Number*' 
              />
              <input 
                className='w-[300px] h-14 bg-inherit border-2 border-white' 
                type="text" 
                placeholder='City*' 
              />
            </div>
            <input 
              className='w-full h-24 bg-inherit border-2 border-white mt-6' 
              type="text" 
              placeholder='Your Message'
             />
            <button className='w-[194] h-[60px] text-[#111C55] bg-[#FFB629] mt-[30px] p-[19px]'>Submit Message</button>
          </form>
        </div>
        </div>
        {/* ////////////////////// */}
        
        
        <div className='flex'>
          <img src="/assests/contact-1.png" alt="/" />
          <img src="/assests/contact-2.png" alt="/" />
          <img src="/assests/contact-3.png" alt="/" />
          <img src="/assests/contact-4.png" alt="/" />
        </div>
    </div>
  )
}

export default Contact