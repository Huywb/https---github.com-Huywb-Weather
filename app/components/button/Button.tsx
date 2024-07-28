import React from 'react'
import { MdMyLocation } from "react-icons/md";
const Button = () => {
  return (
    <div className='flex gap-2 items-center rounded-2xl cursor-pointer bg-[#b39ddb] p-3'>
        <MdMyLocation color='black' size='25px'/>
        <p className='text-black'>Current Location</p>
    </div>
  )
}

export default Button