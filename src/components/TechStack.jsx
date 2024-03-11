import React from 'react'
import TechCard from './TechCard'

const TechStack = () => {
    const tech = [
        {
            img:'/Web.png',
            name:'Web Development',
            desc:'From concept to execution, we create stunning, responsive websites that captivate audiences and drive engagement.',
        },
        {
            img:'/DMarket.png',
            name:'Digital Marketing',
            desc:'Our comprehensive digital marketing solutions, including SEO, PPC, and social media marketing, are designed to elevate your brand and expand your reach.'
        },
        {
            img:'AI.png',
            name:'AI/ML',
            desc:'Harness the power of AI to gain valuable insights, automate processors, and deliever personalized experiences to your customers.'
        }
    ]
  return (
    <div className='w-full bg-white pt-10'>
      <div className='flex flex-col justify-center items-center'>
            <p className='text-[#BA5C2E] font-bold'>Our Services</p>
            <h1 className='text-[27px] text-[#3a1078] text-center font-[poppins] font-bold'>Demand First-Rate Best Services</h1>
      </div>
      <div className='w-full flex justify-center flex-wrap items-center gap-5 '>
            {
                tech.map((item,ind) => {
                    return <div >
                         <TechCard detail={item} key={ind} />
                    </div>
                }) 
            }
      </div>
    </div>
  )
}

export default TechStack
