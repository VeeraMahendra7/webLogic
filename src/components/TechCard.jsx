import React from 'react'

const TechCard = ({detail}) => {
  return (
    <div className='md:my-20 solid border bg-[#f9f9fa] hover:bg-[#c4e8fb] md:h-[350px] h-[380px] w-[280px] rounded-[8px] p-5 flex flex-col justify-center items-center shadow-xl hover:scale-105 cursor-pointer z-[-10]'>
        <div className='h-1/2'>
            <div className='h-[100px] w-[100px] rounded-full bg-white flex justify-center items-center'>
                <img src={detail.img} alt="technology" className='h-[50px] w-[50px] bg-contain' />
            </div>
        </div>
        <div className='h-1/2'>
            <h1 className='text-[25px] text-[#3a1078] font-[poppins] font-semibold'>{detail.name}</h1>
            <p className='text-[16px] text-[#414040] font-[poppins] font-medium tracking-wide'>{detail.desc}</p>
        </div>
    </div>
  )
}

export default TechCard
