import Image from "next/image";
import Siderbar from "./pages/siderbar/Siderbar";
import Content from "./pages/content/Content";
import BottomSiderbar from "./components/bottom-siderbar/BottomSiderbar";
import ListToDay from "./components/listtoday/ListToDay";

export default function Home() {
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
