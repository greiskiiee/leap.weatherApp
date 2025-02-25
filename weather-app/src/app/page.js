import { Search } from "./components/Search";
import { Background } from "./components/Background";
import { CircleBorder } from "./components/CircleBorder";

export default function Home() {
  return (
    <div className="w-[2200px] h-[1200px] flex justify-center items-center relative">
      <div className="w-[1600px] h-[1200px] flex justify-center items-center rounded-[32px] absolute ">
        <Background
          classname="bg-[#F3F4F6] z-30"
          isdark={false}
          temp="26"
          status="Bright"
          date="September 21, 2025"
          placeName="Krakow"
        ></Background>
        <Background
          classname="bg-[#0F141E] z-30"
          isdark={true}
          temp="17"
          status="Clear"
          date="September 21, 2025"
          placeName="Krakow"
        ></Background>
        <Search className="absolute z-50 left-[40px] top-[40px] " />
        <CircleBorder classname="w-[1340px] h-[1340px]"></CircleBorder>
        <CircleBorder classname="w-[940px] h-[940px] "></CircleBorder>
        <CircleBorder classname="w-[540px] h-[540px] "></CircleBorder>
        <CircleBorder classname="w-[340px] h-[340px] "></CircleBorder>
        <CircleBorder classname="w-[140px] h-[140px] flex"></CircleBorder>
      </div>
    </div>
  );
}
