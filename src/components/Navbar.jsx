import React from 'react'

const Navbar = () => {
    let Links = [
        {name:'About Us',link:'/about'},
        {name:'Services',link:'/services'},
        {name:'Contact',link:'/contact'}  
    ];
  return (
    <header className='w-full bg-[#edf3ff] sticky top-0 left-0 shadow-md px-5 py-4 z-1000000 '>
        <nav className='flex justify-between items-center flex-wrap'>
            <div>
                <h1 className='text-[32px] font-bold font-[poppins]'>Web Logic Labs.</h1>
            </div>
            <div className='md:block hidden'>
                <ul className='flex gap-5'>
                    {
                        Links.map((link) => (
                            <li>
                                <a href={link.link} className='text-[grey] hover:text-black font-semibold font-[poppins] text-[20px]'>{link.name}</a>
                            </li>
                        ))
                    }
                </ul>
            </div>
            <div className='flex gap-2 md:my-0 my-4'>
                <button className='solid border border-[#4EA5BE] text-[#4EA5BE] hover:text-[white] hover:bg-[#4EA5BE] bg-white rounded-[5px] px-3 py-1 font-[poppins] tracking-wide'>Sign up</button>
                <button className='solid border hover:text-[#4EA5BE] bg-[#4EA5BE] hover:border-[#4EA5BE] hover:bg-white rounded-[5px] px-4 py-1 text-white font-[poppins] tracking-wide'>Login</button>
            </div>
        </nav>
    </header>
  )
}

export default Navbar
