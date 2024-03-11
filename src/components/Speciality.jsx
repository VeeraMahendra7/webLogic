import React from 'react'
import ItemCard from './ItemCard';


const Speciality = () => {
    const items = [
        {
            cnt:'77',
            name:'Projects Done',
        },
        {
            cnt:'54',
            name:'Website developed',
        },
        {
            cnt:'18',
            name:'Team',
        },
        {
            cnt: 75,
            name:'Happy Clients',
        }
    ];
  return (
    <div className='w-full bg-[#edf3ff] md:my-10 my-5 md:py-20 py-5'>
        <h1 className='text-[27px] text-[#3a1078] font-[poppins] font-semibold text-center md:mb-10 my-5'>What We have ...</h1>
        <div className='w-full flex gap-8 flex-wrap items-center justify-center '>
            {
                items.map((item,ind) => (
                    <ItemCard data={item} key={ind} />
                ))
            }
        </div>
    </div>
  )
}

export default Speciality
