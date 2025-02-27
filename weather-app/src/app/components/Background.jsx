import React from "react";

export const Background = ({ classname }) => {
  return (
    <div
      className={
        `w-[800px] h-[1200px] flex justify-center items-center  ` + classname
      }
    ></div>
  );
};
