import React from 'react'
import { CiCloudDrizzle } from "react-icons/ci";
    
const Day = () => {
    return (
        <div className='flex justify-between text-sm'>
            <div className='flex items-center'>
                <CiCloudDrizzle size='40px'></CiCloudDrizzle>
                <p className='text-xl'>11*</p>
            </div>
            <div className='flex items-center'>
                <p className='opacity-60'>2 Mar</p>
            </div>
            <div className='flex items-center'>
                <p className='opacity-60'>Thursday</p>
            </div>
        </div>
    )
}
    
export default Day