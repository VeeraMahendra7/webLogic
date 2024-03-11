import React from 'react'
import C1 from '/u1.jpg'
import C2 from '/u2.jpg' 

const Client = () => {
  return (
    <div className='bg-white w-full flex justify-center items-center md:mt-32 mt-10'>
        <div className='md:w-[95%] w-[90%] bg-[#fee7ed] rounded-xl flex md:py-10 '>
            <div className='md:w-2/5 w-full md:p-[45px] p-8'>
                <p className='text-[#BA5C2E] font-bold'>Client Reviews</p>
                <h1 className='text-black font-bold text-[27px]'>What Our Happy Clients Says</h1>
                <p className='text-[15px] font-serif md:mt-5 mt-4 text-justify' >At Web Logic Labs, experience seamless designs, unmatched creativity, and exceptional service.
                    Join satisfied businesses, feel the transformative impact of our innovative designs. Your success
                    is our priority, supported by glowing client reviews reflecting our commitment to excellence.
                </p>
            </div>

            <div className='w-3/5 relative md:block hidden'>

                <div className='flex bg-white w-[60%] p-3 rounded-[14px] absolute top-[-25%] right-[10%] shadow-md z-1'>
                  <div className='w-1/3'>
                      <img src={C1} alt="client" className='h-[80px] w-[80px] rounded-[14px]' />
                  </div>
                  <div className='px-2'>
                    <h1 className='text-xl font-bold text-[#3a1078] font-[poppins]'>Devi</h1>
                    <p className='font-[poppins] text-[14px] mt-1'>Their attention to detail and strategic approach helped us achieve remarkable growth in a short period of time.</p>
                  </div>
                </div>

                <div className='flex bg-white w-[60%] p-4 rounded-[14px] absolute top-[35%] left-10 shadow-md z-1'>
                  <div className='w-1/3'>
                      <img src={C2} alt="client" className='h-[80px] w-[80px] rounded-[14px] bg-contain' />
                  </div>
                  <div className='px-2'>
                    <h1 className='text-xl font-bold text-[#3a1078] font-[poppins]'>Shyam</h1>
                    <p className='font-[poppins] text-[14px] mt-1'>Their attention to detail and strategic approach helped us achieve remarkable growth in a short period of time.</p>
                  </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Client
