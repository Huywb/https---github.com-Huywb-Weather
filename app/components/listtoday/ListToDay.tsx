import React from 'react'
import Today from '../today/Today'

const ListToDay = () => {
  return (
    <div className='flex flex-col'>
        <p className='font-bold  my-2   '>Today at</p>
        <div className='flex gap-3 flex-wrap justify-between' >
            <Today></Today>
            <Today></Today>
            <Today></Today>
            <Today></Today>
            <Today></Today>
            <Today></Today>
            <Today></Today>
            <Today></Today>
            <Today></Today>
            <Today></Today>
            <Today></Today>
            <Today></Today>
            <Today></Today>
            <Today></Today>
            <Today></Today>
            <Today></Today>
        </div>
    </div>
  )
}

export default ListToDay