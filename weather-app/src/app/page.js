"use client";
import axios from "axios";
import { Search } from "./components/Search";
import { Background } from "./components/Background";
import { CircleBorder } from "./components/CircleBorder";
import { WeatherCard } from "./components/WeatherCard";
import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState({});
  // const name = "Shinjuku";
  const [name, setName] = useState("Beijing");
  const [input, setInput] = useState("");

  const handleClick = () => {
    setName(input);
  };

  useEffect(() => {
    axios
      .get(
        `https://api.weatherapi.com/v1/forecast.json?key=c54db69bc7dc4466bf415506241712&q=${name}`
      )
      .then((res) => setData(res.data));
  }, [name]);

  return (
    <div className="w-[2200px] h-[1200px] flex justify-center items-center relative">
      <div className="w-[1600px] h-[1200px] flex justify-center items-center border border-transparent rounded-[32px] absolute ">
        <Background classname="bg-[#F3F4F6] z-30 rounded-l-[32px]"></Background>
        <Background classname="bg-[#0F141E] z-30 rounded-r-[32px]"></Background>
        <img
          src="Group 2.png"
          className="absolute z-40 top-[127px] left-[130px]"
        ></img>
        <img
          src="Ellipse 22.png"
          className="absolute z-40 top-[938px] left-[1327px]"
        ></img>
      </div>
      <div className="w-[1600px] h-[1200px] flex justify-center items-center rounded-[32px] absolute ">
        <WeatherCard
          isDark={true}
          cardStyle="bg-gradient-to-b from-[#1F2937] bg-opacity-70 absolute z-40 left-[600px] top-[0px]"
          date={data?.location?.localtime}
          placeName={data?.location?.name}
          temp={data?.forecast?.forecastday[0]?.day?.mintemp_c}
          status={data?.forecast?.forecastday[0]?.day?.condition?.text}
        ></WeatherCard>
        <WeatherCard
          isDark={false}
          cardStyle="bg-gradient-to-t from-[#F9FAFB] bg-opacity-70 absolute z-40 left-[-620px] top-[0px]"
          date={data?.location?.localtime}
          placeName={data?.location?.name}
          temp={data?.forecast?.forecastday[0]?.day?.maxtemp_c}
          status={data?.forecast?.forecastday[0]?.day?.condition?.text}
        ></WeatherCard>

        <Search
          className="absolute z-50 left-[40px] top-[40px] "
          handleChange={setInput}
          handleClick={handleClick}
        />
        <CircleBorder classname="w-[1340px] h-[1340px]"></CircleBorder>
        <CircleBorder classname="w-[940px] h-[940px] "></CircleBorder>
        <CircleBorder classname="w-[540px] h-[540px] "></CircleBorder>
        <CircleBorder classname="w-[340px] h-[340px] "></CircleBorder>
        <CircleBorder classname="w-[140px] h-[140px] "></CircleBorder>

        <div className="absolute w-fit h-fit left-[752px] top-[557px] z-50">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="43"
            height="86"
            viewBox="0 0 43 86"
            fill="none"
          >
            <path
              d="M16.1296 7.58989L2.54477 32.8821C0.849461 36.0473 0 39.5213 0 43C0 46.4791 0.849461 49.9523 2.54477 53.1179L16.1296 78.4105C18.6335 83.0823 23.5304 86 28.8593 86H43.2889V78.835H43.2842C40.622 78.835 38.1737 77.3781 36.9216 75.0428L23.3418 49.7455C22.2069 47.6366 21.6413 45.3208 21.6413 43C21.6413 40.6788 22.2069 38.363 23.3418 36.2549L36.9216 10.9577C38.1737 8.62162 40.622 7.16533 43.2842 7.16533H43.2889V0H28.8593C23.5304 0 18.6335 2.91825 16.1296 7.58989Z"
              fill="#111111"
            />
          </svg>
        </div>
        <div className="absolute w-[70px] h-[138px] flex justify-start items-center left-[800px] top-[531px] pl-[4px] z-50 bg-[#F3F4F6] rounded-r-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="44"
            height="86"
            viewBox="0 0 44 86"
            fill="none"
          >
            <path
              d="M40.7442 32.882L27.1599 7.58993C24.6554 2.91778 19.7591 0 14.43 0H0V7.16486H0.00510914C2.66726 7.16486 5.11563 8.62166 6.36732 10.9572L19.9469 36.2543C21.0827 38.3633 21.647 40.679 21.647 42.9999C21.647 45.3211 21.0827 47.6368 19.9469 49.7454L6.36732 75.0423C5.11563 77.3783 2.66726 78.8345 0.00510914 78.8345H0V85.9999H14.43C19.7591 85.9999 24.6554 83.0821 27.1599 78.41L40.7442 53.1177C42.4388 49.9526 43.2889 46.4785 43.2889 42.9999C43.2889 39.5211 42.4388 36.0475 40.7442 32.882Z"
              fill="#111111"
            />
          </svg>
        </div>

        {/* <div className="w-[567px] h-fit py-[16px] flex flex-col justify-center items-center bg-opacity-85 backdrop-blur-xl bg-white absolute z-50 top-[130px] left-[40px] rounded-[24px]">
          <SearchResult cityName="Tokyo" country="Japan" />
          <SearchResult cityName="Tokyo" country="Japan" />
        </div> */}
      </div>
    </div>
  );
}
