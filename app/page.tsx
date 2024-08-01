'use client'
import Image from "next/image";
import Siderbar from "./pages/siderbar/Siderbar";
import Content from "./pages/content/Content";
import BottomSiderbar from "./components/bottom-siderbar/BottomSiderbar";
import ListToDay from "./components/listtoday/ListToDay";
import { useEffect } from "react";

export default function Home() {
  useEffect(()=>{
    const getData = async()=>{
      const api = await fetch('https://api.openweathermap.org/data/2.5/forecast?lat=44.34&lon=10.99&appid=45ac34bee7ed831ce78c55a703c76e9b')
      const data = await api.json()
      console.log('data',data)
    }
    getData()
  },[])
  return (
   <div className="flex gap-6 ">
    <div className="flex-[1] flex-col  ">
    <Siderbar></Siderbar>
    <BottomSiderbar></BottomSiderbar>
    </div>
    <div className="flex-[3] w-[75%] flex-col ">
    <Content></Content>
    <ListToDay></ListToDay>
    </div>
   </div>
  );
}
