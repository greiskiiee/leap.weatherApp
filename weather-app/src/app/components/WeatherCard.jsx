import React from "react";
import { CiLocationOn } from "react-icons/ci";

export const WeatherCard = ({
  cardStyle,
  loc,
  date,
  dateStyle,
  placeName,
  placeStyle,
  temp,
  tempStyle,
  icon,
  iconShadow,
  status,
  statusStyle,
}) => {
  return (
    <div
      className={
        `w-[414px] h-[832px] flex flex-col rounded-[48px] relative z-50 backdrop-blur-md ` +
        cardStyle
      }
    >
      <div className="absolute inset-2 rounded-full"></div>
      <div className="absolute left-[325px] top-[85px]">
        <CiLocationOn className={`w-[32px] h-[32px] ` + loc} />
      </div>
      <div className="w-[398px] h-[504px] flex flex-col rounded-[48px] z-20 absolute">
        <p className={`mt-[56px] ml-[40px] manrope font-[500] ` + dateStyle}>
          {date}
        </p>
        <p className={`ml-[40px] text-[48px] manrope font-[800] ` + placeStyle}>
          {placeName}
        </p>
        <img
          src={icon}
          alt="icon"
          className="w-[264px] h-[264px] ml-[68.5px] mr-[64.61px] mt-[24px] z-15"
        />
        <img
          className="w-[264px] h-[264px] ml-[80.61px] mr-[52.5px] mt-[-220px] z-10"
          src={iconShadow}
        />
      </div>
      <div className="flex flex-col w-[250px] h-[230px] ml-[48px] absolute z-10 top-[460px] justify-start">
        <p
          className={
            ` text-[144px] manrope font-[800] text-transparent bg-gradient-to-t  bg-clip-text ` +
            tempStyle
          }
        >
          {temp}°
        </p>
        <p className={`text-[24px] manrope font-[800] ` + statusStyle}>
          {status}
        </p>
      </div>
    </div>
  );
};
