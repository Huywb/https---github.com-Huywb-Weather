import React from 'react'
import { CiCloudMoon } from "react-icons/ci";

const Today = () => {
  return (
    <div className='flex bg-[#212121] rounded-xl '>
        <div className='p-4 px-[35px] gap-2 flex items-center flex-col'>
            <p className='opacity-70'>4 PM</p>
            <CiCloudMoon size='50px'></CiCloudMoon>
            <p className='text-xl'>5*</p>
        </div>
    </div>
  )
}

export default Today