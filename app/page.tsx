import Image from "next/image";
import Siderbar from "./pages/siderbar/Siderbar";
import Content from "./pages/content/Content";

export default function Home() {
  return (
   <div className="flex gap-6 ">
    <div className="flex-[1] bg-red-500 p-6">
    <Siderbar></Siderbar>
    </div>
    <div className="flex-[3] bg-green-400">
    <Content></Content>
    </div>
   </div>
  );
}
