import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { Navbar } from "./Navbar";

export const WeatherCard = ({
  cardStyle,
  date,
  placeName,
  temp,
  status,
  isDark,
}) => {
  return (
    <div
      className={
        `w-[414px] h-[832px] flex flex-col rounded-[48px] relative z-50 backdrop-blur-lg ` +
        cardStyle
      }
    >
      <div className="absolute left-[325px] top-[85px]">
        {isDark ? (
          <CiLocationOn className={`w-[32px] h-[32px] fill-[#9CA3AF]`} />
        ) : (
          <CiLocationOn className={`w-[32px] h-[32px] fill-[#4B5563]`} />
        )}
      </div>
      <div className="w-[398px] h-[504px] flex flex-col rounded-[48px] z-20 absolute">
        {isDark ? (
          <div>
            <p
              className={`mt-[56px] ml-[40px] manrope font-[500] text-[#9CA3AF] `}
            >
              {date}
            </p>
            <p
              className={`ml-[40px] text-[48px] manrope font-[800] text-white`}
            >
              {placeName}
            </p>
          </div>
        ) : (
          <div>
            <p
              className={`mt-[56px] ml-[40px] manrope font-[500] text-[#6B7280]`}
            >
              {date}
            </p>
            <p
              className={`ml-[40px] text-[48px] manrope font-[800] text-[#111827]`}
            >
              {placeName}
            </p>
          </div>
        )}
        {isDark ? (
          <div>
            <img
              src="https://s3-alpha-sig.figma.com/img/b6fe/b523/f01b7c0c0765dab6de4f9f5cbb022e1d?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=GnqkFrtyd5NpkYxprvjxMj2ckCkgwwp2Bk65oBFIuU4joqvzDi-VaizLlo2B4VuAUqqeO1rUdh1HiIurvvva~N6YfW7u-rh55-nVhRrl1~xO-wxovybvB2kA1Us4SB5QkGYbMrbZ07KzopgLCYDXhiAOcNCgVfy~4NIOoWa7FOMMjYUKDiSBMv2OeVmjNFMhln4ImSY05rsvbeAwZsASVVm8lyf-EcD5JRmIsnxn0oBPq1UUoFlPQ8THPRAqhbkt1Q6l2LjfzxKzCiituC4v5N3JD9iTFPZz~BQG8TD8T5tmaC5oIXAQOBazpfXJP1tUQ6k1CVna5P9Pxz7xpsOmww__"
              alt="icon"
              className="w-[264px] h-[264px] box-border ml-[68.5px] mr-[64.61px] mt-[24px] z-15"
            />
            <img
              className="w-[264px] h-[264px] ml-[80.61px] mr-[52.5px] mt-[-220px] z-10"
              src="/shadow.png"
            />
          </div>
        ) : (
          <div>
            <img
              src="https://s3-alpha-sig.figma.com/img/3c6b/babb/0657324bf17d1bd5169b60a7fbcb80b1?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=uVwKHLA2r0mB54mUCGA3sxRal85xaGrB10-WtvmM-SlHJ9avtIeSEY5L9pGLJd9sN9K2nlTm-t75gLnBzjZ5o630U8nXaaPzxY-Q~6W6xqde3xBb5l5DqGklTN241rg1PmtRLRUlH-AwkqcTz7DoMXnipYL~12HTmUZqiU8biX-Iv1E~5OpXDTeJuT2VKLSuAnDYSph060VwNsEtsapKYZBMvI5Fpfdzf1tzwiF~LwqfhzNFqozotdHJP20gxpwsKvMbw-CWA26NDtbr5j7uPjepLCTWwmZ-NvwDoZOLeARlpd5LtLfSabJOl7OUWV9~fm1X1PiJGr8zf95gezSSTw__"
              alt="icon"
              className="w-[264px] h-[264px] box-border ml-[68.5px] mr-[64.61px] mt-[24px] z-15"
            />
            <img
              className="w-[264px] h-[264px] ml-[80.61px] mr-[52.5px] mt-[-220px] z-10"
              src="/shadowSun.png"
            />
          </div>
        )}
      </div>
      <div className="flex flex-col w-[250px] h-[230px] ml-[48px] absolute z-10 top-[460px] justify-start">
        {isDark ? (
          <div>
            <p
              className={` text-[144px] manrope font-[800] text-transparent bg-gradient-to-t bg-clip-text from-[#F9FAFB] to-[rgba(249, 250, 251, 0.00) 100%)]`}
            >
              {temp}°
            </p>
            <p className={`text-[24px] manrope font-[800] text-[#777CCE]`}>
              {status}
            </p>
          </div>
        ) : (
          <div>
            <p
              className={` text-[144px] manrope font-[800] text-transparent bg-gradient-to-t bg-clip-text from-[#111827] 0% to-[#6B7280] 100%`}
            >
              {temp}°
            </p>
            <p className={`text-[24px] manrope font-[800] text-[#FF8E27]`}>
              {status}
            </p>
          </div>
        )}
      </div>
      {isDark ? (
        <Navbar
          classname="absolute left-[48px] top-[756px]"
          color1="#F9FAFB"
          color2="#4B5563"
        />
      ) : (
        <Navbar
          classname="absolute left-[48px] top-[756px]"
          color1="#111827"
          color2="#D1D5DB"
        />
      )}
    </div>
  );
};
