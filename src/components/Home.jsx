import React from 'react'
import home from '../../public/Edited.png'

const Home = () => {
  return (
    <div className='w-full bg-white p-5 '>
        <div className='flex flex-wrap md:p-5  m-5'>
            <div className='md:w-1/2 w-full md:mt-10 md:px-5'>
                <p className='text-[#BA5C2E] font-bold mb-5'>Work better with us</p>
                <span className='text-[20px] text-[#3a1078] font-semibold font-serif'>Welcome to ...</span>
                <h1 className='text-[60px] font-bold font-[poppins]'>WEB LOGIC LABS</h1>
                <p className='md:mt-5  text-[15px] font-serif font-medium tracking-wide text-justify'> We're your partners in navigating the dynamic landscape of online presence. With a fusion of
                    creativity, technology, and innovation, we specialize in website design, digital marketing,
                    and cutting-edge Artificial Intelligence and Machine Learning solutions.
                </p>
                <button className='solid border border-gray-600 bg-white rounded-[5px] px-3 py-1 font-[poppins] tracking-wide md:mt-5 mt-4 hover:bg-[#4EA5BE] hover:text-white hover:border-[#4EA5BE]'>Contact Us</button>
            </div>
            <div className='md:w-1/2 w-full py-7'>
                <img src={home} alt="home" className='md:w-full md:h-full w-[320px] h-[250px] '/>
            </div>
      </div>
    </div>
  )
}

export default Home
