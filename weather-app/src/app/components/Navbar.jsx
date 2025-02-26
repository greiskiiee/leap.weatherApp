import React from "react";
import { GoHome } from "react-icons/go";
import { IoLocationOutline } from "react-icons/io5";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoPersonOutline } from "react-icons/io5";

export const Navbar = ({ classname, color1, color2, color3 }) => {
  return (
    <div className={"w-[312px] h-[32px] flex justify-between " + classname}>
      <GoHome className={`w-[32px] h-[32px] fill-[${color1}]`} />
      <IoLocationOutline className={`w-[32px] h-[32px] fill-[${color3}]`} />
      <IoMdHeartEmpty className={`w-[32px] h-[32px] fill-[${color2}]`} />
      <IoPersonOutline className={`w-[32px] h-[32px] fill-[${color2}]`} />
    </div>
  );
};
