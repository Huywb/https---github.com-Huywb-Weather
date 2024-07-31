import Image from 'next/image'
import React from 'react'
import { IoMdSearch } from "react-icons/io";
const Search = () => {
  return (
    <div className='rounded-3xl bg-[#212121] flex p-3 gap-4 w-[30%]'>
        <button ><IoMdSearch size='30px'/></button>
        <input className='outline-none border-spacing-1 bg-transparent' type="text" placeholder='search...' />
    </div>
  )
}

export default Search