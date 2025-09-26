import React from "react";
import { GoHome } from "react-icons/go";
import { IoLocationOutline } from "react-icons/io5";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoPersonOutline } from "react-icons/io5";

export const Navbar = ({ classname, color1, color2 }) => {
  return (
    <div className={"w-[312px] h-[32px] flex justify-between " + classname}>
      <GoHome className={`w-[32px] h-[32px]`} color={color1} />
      <IoLocationOutline className={`w-[32px] h-[32px]`} color={color2} />
      <IoMdHeartEmpty className={`w-[32px] h-[32px]`} color={color2} />
      <IoPersonOutline className={`w-[32px] h-[32px]`} color={color2} />
    </div>
  );
};
