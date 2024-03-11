import React from 'react'

const Contact = () => {
  return (
    <div className='bg-[#edf3ff] p-5 flex justify-around flex-wrap gap-5 md:h-[260px]'>
        <div>
            <h1 className='text-[27px] font-bold font-[poppins]'>Web Logic Labs</h1>
            <div className='flex gap-7 mt-2'>
                <i class="fi fi-brands-instagram text-[24px] text-[grey] hover:text-black cursor-pointer"></i>
                <i class="fi fi-brands-facebook text-[24px] text-[grey] hover:text-black cursor-pointer"></i>
                <i class="fi fi-brands-whatsapp text-[24px] text-[grey] hover:text-black cursor-pointer"></i>
                <i class="fi fi-brands-youtube text-[24px] text-[grey] hover:text-black cursor-pointer"></i>
            </div>
        </div>
        <div>
            <h1 className='text-[grey] text-[16px] font-bold'>USEFUL LINKS</h1>
            <ol className='text-[17px] text-black font-[poppins] font-semibold  mt-3'>
                <li className='hover:text-[grey]'>Refund Policy</li>
                <li className='hover:text-[grey]'>Privacy Policy</li>
                <li className='hover:text-[grey]'>Terms & Conditions.</li>
            </ol>
        </div>
        <div>
            <h1 className='text-[grey] text-[16px] font-bold'>GET IN TOUCH</h1>
            <div className='flex gap-2 mt-3 justify-start items-start'>
                <i class="fi fi-rs-circle-phone text-[22px] text-[grey]"></i>
                <p className='text-[17px] text-black font-[poppins] font-semibold'>7880015040</p>
            </div>
            <div className='flex gap-2 justify-start items-start mt-2'>
                <i class="fi fi-rs-marker text-[22px] text-[grey] "></i>
                <p className='text-[17px] text-black font-[poppins] font-semibold'>1st Floor, Himayat Nagar Rd, opp. <br /> Kubera Towers, Hyderabad, <br /> Telangana 500029.</p>
            </div>
        </div>
    </div>
  )
}

export default Contact
