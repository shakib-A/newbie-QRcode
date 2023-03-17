import React from 'react'
import ReactionSvg from '../assets/icon-reaction.svg'
import MemorySvg from '../assets/icon-memory.svg'
import VerbalSvg from '../assets/icon-verbal.svg'
import VisualSvg from '../assets/icon-visual.svg'

const Summary = () => {
  return (
    <div id="summary" className='flex flex-col gap-4 max-w-[375px]'>
        <h1>Summary</h1>
        <div id="reaction" className='flex justify-between items-center gap-20 bg-lightred bg-opacity-20 p-4 rounded-lg'>
           <div className='flex gap-2'>
            <img src={ReactionSvg} alt="" /> 
            <h1 className='text-lightred'>Reaction</h1>
           </div>
           <p className='text-darkgrayblue'><span className='text-black font-bold'>80</span> / 100</p>
        </div>

        <div id="reaction" className='flex justify-between items-center gap-20 bg-orangeyyellow bg-opacity-20 p-4 rounded-lg'>
           <div className='flex gap-2'>
            <img src={MemorySvg} alt="" /> 
            <h1 className='text-orangeyyellow'>Memory</h1>
           </div>
           <p className='text-darkgrayblue'><span className='text-black font-bold'>92</span> / 100</p>
        </div>

        <div id="reaction" className='flex justify-between items-center gap-20 bg-greenteal bg-opacity-20 p-4 rounded-lg'>
           <div className='flex gap-2'>
            <img src={VerbalSvg} alt="" /> 
            <h1 className='text-greenteal'>Verbal</h1>
           </div>
           <p className='text-darkgrayblue'><span className='text-black font-bold'>61</span> / 100</p>
        </div>

        <div id="reaction" className='flex justify-between items-center gap-20 bg-cobaltblue bg-opacity-20 p-4 rounded-lg'>
           <div className='flex gap-2'>
            <img src={VisualSvg} alt="" /> 
            <h1 className='text-cobaltblue'>Visual</h1>
           </div>
           <p className='text-darkgrayblue'><span className='text-black font-bold'>72</span> / 100</p>
        </div>
    </div>
  )
}

export default Summary