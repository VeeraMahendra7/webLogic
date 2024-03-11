import React from 'react'
import Marquee from 'react-fast-marquee';

const Partners = () => {
    let cards = [
        {img:'/C1.png'},
        {img:'/C2.png'},
        {img:'/C3.png'},
        {img:'/C4.png'},
        {img:'/C5.png'},
        {img:'/C6.png'}
    ];
  return (
    <div className='w-full bg-white py-5 my-10'>
        <h1 className='text-center text-[27px] text-[#3a1078] font-[poppins] font-bold'>Our Clients ...</h1>
            <Marquee className='flex gap-5 md:mt-10 mt-5 z-1'>
                <div className='flex gap-5'>
                    {
                        cards.map((ele,i) => {
                            return <img src={ele.img} alt="partners" key={i} className='solid border rounded-[5px] shadow-lg cursor-pointer  my-4'/>
        
                        })
                    }
                </div>
            </Marquee>
    </div>
  )
}

export default Partners


