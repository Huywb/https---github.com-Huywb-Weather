import React from 'react'
import { CiCloudDrizzle } from "react-icons/ci";
import { SlCalender } from "react-icons/sl";
import { IoLocation } from "react-icons/io5";
const Siderbar = () => {
  return (
    <div className='flex flex-col gap-2'>
        <div className='flex flex-col gap-3'>
            <h2 className='text-2xl'>Now</h2>
            <div className='flex gap-20'>
                <h1 className='text-7xl'>5*C</h1>
                <CiCloudDrizzle size='70px'/>
            </div>
            <p className='text-xl'>Broken clouds</p>
        </div>
        <div>
            <div>
                <SlCalender />
                <p>Wednesday 1, Mar</p>
            </div>
            <div>
                <IoLocation />
                <p>London</p>
            </div>
        </div>
    </div>
  )
}

export default Siderbar