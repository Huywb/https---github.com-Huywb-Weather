import React from 'react'
import ListDay from '../listday/ListDay'

const BottomSiderbar = () => {
  return (
    <div >
        <div className='my-4 text-xl font-bold'>
            <h2>5 Days Forecast</h2>
        </div>
        <div className='bg-[#212121] p-6 rounded-xl'>
            <ListDay></ListDay>
        </div>
    </div>
  )
}

export default BottomSiderbar