import React from 'react'
import about from '../../public/About.jpg'

const About = () => {
  return (
    <div className='w-full bg-white flex justify-center  pt-10'>
        <div className='w-3/4 flex flex-wrap'>
            <div className='md:w-1/2 w-full p-2 flex justify-center items-center'>
                <img src={about} alt="About" className='h-[300px] rounded-[15px] cursor-pointer' />
            </div>
            <div className='md:w-1/2 w-full p-2 '>
                <p className='text-[#BA5C2E] font-bold'>About us</p>
                <h1 className='text-[27px] text-[#3a1078] font-bold'>We Don't Just Build Websites; <br />We Build Relationships.</h1>
                <p className='font-[poppins] mt-7 font-medium'>Driven by passion and fueled by innovation, Web Logic Labs was founded with a vision to revolutionize
                    the digital space. Our team comprises seasoned professionals with diverse backgrounds in web development,
                    marketing, and AI technologies. We believe in staying ahead of the curve, constantly exploring emerging trends
                    and technologies to deliver exceptional results for our clients.
                </p>
            </div>
        </div>
    </div>
  )
}

export default About
