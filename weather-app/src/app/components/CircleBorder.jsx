import React from "react";

export const CircleBorder = ({ classname }) => {
  return (
    <div
      className={
        `border-[1px] opacity-10 border-[#000] rounded-full absolute z-30 ` +
        classname
      }
    ></div>
  );
};
