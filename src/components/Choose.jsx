import React from 'react'
import ChooseCard from './ChooseCard'

const Choose = () => {
  let choice = [
    {
      name:'Expertise',
      desc:'With years of experience under our belt, we possess the knowledge and skills to craft bespoke solutions that meet your unique needs.'
    },
    {
      name:'Innovation',
      desc:'We leverage the latest technologies, including AI and machine learning, to provide cutting-edge solutions that give your business a competitive edge.'
    },
    {
      name:'Personalized Approach',
      desc:"We understand that every business is unique. That's why we take a personalized approach to every project, ensuring that your vision is brought to life."
    },
    {
      name:'Results-Driven',
      desc:'Our success is measured by the success of our clients. We are committed to delivering tangible results that drive growth and maximize ROI.'
    },
    {
      name:'Customer-Centric',
      desc:'Your satisfaction is our top priority. We prioritize clear communication, transparency, and responsiveness throughout the entire process.'
    },
    {
      name:'Tailored Solutions',
      desc:"We don't believe in one-size-fits-all approaches. Every solution we provide is custom-tailored to your specific goals and objectives."
    }
  ]
  return (
    <div className='bg-white md:my-10 mt-5 py-10'>
      <div>
          <h1 className='text-[27px] text-[#3a1078] font-[poppins] font-bold text-center'>Why Choose Us?</h1>
          <div className='flex gap-5 justify-center flex-wrap p-5 mt-5'>
            {
              choice.map((ele,i) => {
                return <div>
                  <ChooseCard card={ele} key={i} />
                </div>
              }
                
              )
            }
          </div>
      </div>
    </div>
  )
}

export default Choose
