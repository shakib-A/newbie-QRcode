import React from 'react'
import img from '../assets/image-qr-code.png'

const QRcode = () => {
  return (
    <div id="card" className='w-[300px] bg-white p-4 flex flex-col justify-center items-center rounded-xl'>
        <img src={img} alt="" className='rounded-xl' />
        <p className='text-center font-bold my-2'>improve your front-end skills by building projects</p>
        <p className='text-center text-sm text-grayblue'>Scan the QR code to visit Frontend Mentoer and take your coding skills to the next level</p>
    </div>
  )
}

export default QRcode