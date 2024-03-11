import React from 'react'

const ChooseCard = ({card}) => {

  return (
    <div className='solid border bg-white h-[250px] w-[300px] rounded-[8px] p-5 shadow-xl hover:scale-105 cursor-pointer'>
        <div className='flex flex-col gap-y-4 justify-start items-center py-5 leading-6'>
            <div>
                <h1 className='text-2xl font-[poppins] font-bold'>{card.name}</h1>
            </div>
            <div>
              <p className='text-[grey] font-serif'>{card.desc}</p>
            </div>
        </div>
    </div>
  )
}

export default ChooseCard
