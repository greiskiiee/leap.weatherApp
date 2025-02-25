import React from "react";

export const Search = ({ className }) => {
  return (
    <input
      type="text"
      defaultValue="Search"
      className={
        `min-w-[320px] flex w-[512px] px-[24px] py-[16px] items-center border rounded-[48px] shadow-custom text-black ` +
        className
      }
    ></input>
  );
};
