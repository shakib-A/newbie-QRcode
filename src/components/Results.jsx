import React from 'react'

const Results = () => {
  return (
    <div id="card" className='flex flex-col justify-evenly items-center gap-4 p-4 bg-gradient-to-b from-lightslateblue to-lightroyalblue text-white text-center w-[375px] rounded-b-3xl lg:h-[50vh] lg:rounded-3xl lg:gap-0 lg:justify-center'>
        <h1 className='text-lightlavender'>Your Result</h1>
        <div id="circle" className='w-[8rem] h-[8rem] rounded-full bg-gradient-to-b from-violeblue to-persianblue flex flex-col justify-center items-center lg:w-[10rem] lg:h-[10rem] lg:my-8'>
            <h1 className='font-extrabold text-5xl'>76</h1>
            <h1 className='text-lightlavender'>of 100</h1>
        </div>
        <h1 className='font-bold text-xl'>Great</h1>
        <p className='text-lightlavender p-2 lg:px-12'>You scored higher than 65% of the people who taken these tests.</p>
    </div>
  )
}

export default Results