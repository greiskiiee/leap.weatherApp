import React from "react";
import { IoIosSearch } from "react-icons/io";

export const Search = ({ className }) => {
  return (
    <div
      className={
        " flex justify-center items-center gap-[16px] w-[512px] px-[24px] py-[16px] bg-[#fff] border rounded-[48px] shadow-custom text-black  " +
        className
      }
    >
      <div className="w-fit h-fit">
        <IoIosSearch className="w-[48px] h-[48px] opacity-20" />
      </div>

      <input
        type="text"
        defaultValue="Search"
        className={`w-[400px] items-center bg-transparent text-[32px] opacity-20 font-[700] manrope `}
      />
    </div>
  );
};
