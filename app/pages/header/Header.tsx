import Button from '@/app/components/button/Button'
import Search from '@/app/components/search/Search'
import React from 'react'
import { CiCloudMoon } from "react-icons/ci";

const Header = () => {
  return (
    <div className='flex justify-between m-auto max-h-20 w-[90%] items-center' >
        <div className="header-left flex items-center justify-center cursor-pointer ">
          <CiCloudMoon size='40px'/>
          <p className='text-3xl'>weatherio</p>
        </div>
        <Search></Search>
        <Button></Button>
    </div>
  )
}

export default Header