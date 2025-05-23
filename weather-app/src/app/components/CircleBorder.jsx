import React from "react";

export const CircleBorder = ({ classname }) => {
  return (
    <div
      className={
        `border-[1px] opacity-10 border-l-black border-r-white rounded-full absolute z-30 ` +
        classname
      }
    ></div>
  );
};
