import { CiCloudMoon } from "react-icons/ci";
import React from 'react'

const Content = () => {
  return (
    <div className='bg-[#212121] p-6 rounded-xl w-[100%]'>
      <div>
        <h2 className="text-xl font-bold">Todays Highlights</h2>
      </div>
      <div className="flex justify-between gap-6">
        <div className="bg-[#171717] flex-1 flex flex-col gap-2 p-4 rounded-xl">
          <div className="flex justify-between">
            <p className="text-lg opacity-80">Air Quality Index</p>
            <span className="bg-[#ffeb3b] flex items-center font-bold text-black px-5 rounded-xl">Fair</span>
          </div>
          <div className="flex justify-between mt-6 min-h-[80px] ">
            <CiCloudMoon size='50px'></CiCloudMoon>
            <div className="w-[25%] gap-1 items-center flex flex-col">
              <p className="text-sm opacity-70">PM2S</p>
              <h1 className="text-3xl">16.4</h1>
            </div>
            <div className="w-[25%] gap-1 items-center flex flex-col">
              <p className="text-sm opacity-70">PM2S</p>
              <h1 className="text-3xl">16.4</h1>
            </div>
            <div className="w-[25%] gap-1 items-center flex flex-col">
              <p className="text-sm opacity-70">PM2S</p>
              <h1 className="text-3xl">16.4</h1>
            </div>
            <div className="w-[25%] gap-1 items-center flex flex-col">
              <p className="text-sm opacity-70">PM2S</p>
              <h1 className="text-3xl">16.4</h1>
            </div>
          </div>
        </div>
        <div className="flex-1 bg-[#171717] p-4 rounded-xl">
          <p className="text-lg opacity-80">Sunrise & Sunset</p>
          <div className="flex justify-between mt-6" >
            <div className="flex-1 flex gap-4 items-end">
              <CiCloudMoon size='50px'></CiCloudMoon>
              <div className="flex flex-col gap-2">
                <h2 className="text-sm opacity-70">Sunrise</h2>
                <h1 className="text-3xl">6:30 AM</h1>
              </div>
            </div>
            <div className="flex-1 flex gap-4 items-end">
              <CiCloudMoon size='50px'></CiCloudMoon>
              <div className="flex flex-col gap-2">
                <h2 className="text-sm opacity-70">Sunset</h2>
                <h1 className="text-3xl">5:46 PM</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6 flex justify-between gap-6 w-[100%] ">
        <div className="bg-[#171717] p-4 flex gap-10 w-[25%] rounded-xl ">
          <div className="flex justify-between flex-col gap-4 items-center">
            <p className="text-lg opacity-70 ">Humidity</p>
            <CiCloudMoon size='50px'></CiCloudMoon>
          </div>
          <h1 className="text-3xl flex items-end mb-1 opacity-80">70%</h1>  
        </div>
        <div className="bg-[#171717] p-4 flex gap-10 w-[25%] rounded-xl ">
          <div className="flex justify-between flex-col gap-4 items-center">
            <p className="text-lg opacity-70 ">Humidity</p>
            <CiCloudMoon size='50px'></CiCloudMoon>
          </div>
          <h1 className="text-3xl flex items-end mb-1 opacity-80">70%</h1>  
        </div>
        <div className="bg-[#171717] p-4 flex gap-10 w-[25%] rounded-xl ">
          <div className="flex justify-between flex-col gap-4 items-center">
            <p className="text-lg opacity-70 ">Humidity</p>
            <CiCloudMoon size='50px'></CiCloudMoon>
          </div>
          <h1 className="text-3xl flex items-end mb-1 opacity-80">70%</h1>  
        </div>
        <div className="bg-[#171717] p-4 flex gap-10 w-[25%] rounded-xl ">
          <div className="flex justify-between flex-col gap-4 items-center">
            <p className="text-lg opacity-70 ">Humidity</p>
            <CiCloudMoon size='50px'></CiCloudMoon>
          </div>
          <h1 className="text-3xl flex items-end mb-1 opacity-80">70%</h1>  
        </div>

      </div>
    </div>
  )
}

export default Content