import React, { useState } from 'react'
import CountUp from 'react-countup'
import ScrollTrigger from 'react-scroll-trigger'

const ItemCard = ({data}) => {
  const [countOn,setCountOn] = useState(false);
  return (
    <ScrollTrigger onEnter={() => setCountOn(true)} onExit={() => setCountOn(false)}>
        {
           countOn && 
           <div className='solid border h-[160px] w-[200px] bg-white  flex gap-y-4 flex-col justify-center items-center shadow-xl rounded-lg hover:scale-105 cursor-pointer'>
              <div className='flex justify-center items-center relative'>
                <CountUp start={0} end={data.cnt} duration={5} delay={0} className='text-[45px] text-black font-[poppins] font-bold'/>
                <span className='text-2xl text-[grey] absolute top-0 z-1 left-11'>+</span>
              </div>
             
              <h1 className='text-[19px] text-[grey] font-[poppins] font-semibold'>{data.name}</h1>
           </div>
        }
    </ScrollTrigger>
  )
}

export default ItemCard
