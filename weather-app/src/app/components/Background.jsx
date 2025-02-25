import React from "react";
import { WeatherCard } from "./WeatherCard";
import { CircleBorder } from "./CircleBorder";

export const Background = ({
  classname,
  temp,
  status,
  date,
  placeName,
  isdark,
}) => {
  return (
    <div
      className={
        `w-[800px] h-[1200px] flex justify-center items-center  ` + classname
      }
    >
      {isdark ? (
        <WeatherCard
          cardStyle="bg-gradient-to-b from-[#1F2937] bg-opacity-50 z-40"
          icon="https://s3-alpha-sig.figma.com/img/b6fe/b523/f01b7c0c0765dab6de4f9f5cbb022e1d?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=GnqkFrtyd5NpkYxprvjxMj2ckCkgwwp2Bk65oBFIuU4joqvzDi-VaizLlo2B4VuAUqqeO1rUdh1HiIurvvva~N6YfW7u-rh55-nVhRrl1~xO-wxovybvB2kA1Us4SB5QkGYbMrbZ07KzopgLCYDXhiAOcNCgVfy~4NIOoWa7FOMMjYUKDiSBMv2OeVmjNFMhln4ImSY05rsvbeAwZsASVVm8lyf-EcD5JRmIsnxn0oBPq1UUoFlPQ8THPRAqhbkt1Q6l2LjfzxKzCiituC4v5N3JD9iTFPZz~BQG8TD8T5tmaC5oIXAQOBazpfXJP1tUQ6k1CVna5P9Pxz7xpsOmww__"
          date={date}
          dateStyle="text-[#9CA3AF] "
          placeName={placeName}
          placeStyle="text-white"
          temp={temp}
          loc="fill-[#9CA3AF]"
          tempStyle="from-[#F9FAFB] to-[rgba(249, 250, 251, 0.00) 100%)]"
          status={status}
          statusStyle="text-[#777CCE]"
          iconShadow="/shadow.png"
        ></WeatherCard>
      ) : (
        <WeatherCard
          cardStyle="bg-gradient-to-t from-[#F9FAFB]  bg-opacity-50 z-40"
          icon="https://s3-alpha-sig.figma.com/img/3c6b/babb/0657324bf17d1bd5169b60a7fbcb80b1?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=uVwKHLA2r0mB54mUCGA3sxRal85xaGrB10-WtvmM-SlHJ9avtIeSEY5L9pGLJd9sN9K2nlTm-t75gLnBzjZ5o630U8nXaaPzxY-Q~6W6xqde3xBb5l5DqGklTN241rg1PmtRLRUlH-AwkqcTz7DoMXnipYL~12HTmUZqiU8biX-Iv1E~5OpXDTeJuT2VKLSuAnDYSph060VwNsEtsapKYZBMvI5Fpfdzf1tzwiF~LwqfhzNFqozotdHJP20gxpwsKvMbw-CWA26NDtbr5j7uPjepLCTWwmZ-NvwDoZOLeARlpd5LtLfSabJOl7OUWV9~fm1X1PiJGr8zf95gezSSTw__"
          date={date}
          dateStyle="text-[#6B7280]"
          placeName={placeName}
          placeStyle="text-[#111827]"
          temp={temp}
          loc="fill-[#4B5563]"
          tempStyle="from-[#111827] 0% to-[#6B7280] 100%"
          status={status}
          statusStyle="text-[#FF8E27]"
          iconShadow="/shadowSun.png"
        ></WeatherCard>
      )}
      <img
        src="Group 2.png"
        className="absolute z-30 top-[50px] left-[100px]"
      ></img>
      <img
        src="Ellipse 22.png"
        className="absolute z-30 top-[968px] left-[1327px]"
      ></img>
    </div>
  );
};
