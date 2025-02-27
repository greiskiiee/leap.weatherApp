import { Search } from "./components/Search";
import { Background } from "./components/Background";
import { CircleBorder } from "./components/CircleBorder";
import { WeatherCard } from "./components/WeatherCard";
import { SearchResult } from "./components/SearchResult";
export default function Home() {
  return (
    <div className="w-[2200px] h-[1200px] flex justify-center items-center relative">
      <div className="w-[1600px] h-[1200px] flex justify-center items-center border border-transparent rounded-[32px] absolute ">
        <Background
          classname="bg-[#F3F4F6] z-30 rounded-l-[32px]"
          isdark={false}
          temp="26"
          status="Bright"
          date="September 21, 2025"
          placeName="Krakow"
        ></Background>
        <Background
          classname="bg-[#0F141E] z-30 rounded-r-[32px]"
          isdark={true}
          temp="17"
          status="Clear"
          date="September 21, 2025"
          placeName="Krakow"
        ></Background>
        <img
          src="Group 2.png"
          className="absolute z-40 top-[127px] left-[130px]"
        ></img>
        <img
          src="Ellipse 22.png"
          className="absolute z-40 top-[938px] left-[1327px]"
        ></img>
      </div>
      <div className="w-[1600px] h-[1200px] flex justify-center items-center rounded-[32px] absolute ">
        <WeatherCard
          cardStyle="bg-gradient-to-b from-[#1F2937] bg-opacity-70 absolute z-40 left-[600px] top-[0px]"
          icon="https://s3-alpha-sig.figma.com/img/b6fe/b523/f01b7c0c0765dab6de4f9f5cbb022e1d?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=GnqkFrtyd5NpkYxprvjxMj2ckCkgwwp2Bk65oBFIuU4joqvzDi-VaizLlo2B4VuAUqqeO1rUdh1HiIurvvva~N6YfW7u-rh55-nVhRrl1~xO-wxovybvB2kA1Us4SB5QkGYbMrbZ07KzopgLCYDXhiAOcNCgVfy~4NIOoWa7FOMMjYUKDiSBMv2OeVmjNFMhln4ImSY05rsvbeAwZsASVVm8lyf-EcD5JRmIsnxn0oBPq1UUoFlPQ8THPRAqhbkt1Q6l2LjfzxKzCiituC4v5N3JD9iTFPZz~BQG8TD8T5tmaC5oIXAQOBazpfXJP1tUQ6k1CVna5P9Pxz7xpsOmww__"
          date="September 21, 2025"
          dateStyle="text-[#9CA3AF] "
          placeName="Krakow"
          placeStyle="text-white"
          temp="17"
          loc="fill-[#9CA3AF]"
          tempStyle="from-[#F9FAFB] to-[rgba(249, 250, 251, 0.00) 100%)]"
          status="Clear"
          statusStyle="text-[#777CCE]"
          iconShadow="/shadow.png"
          color1="#F9FAFB"
          color2="#4B5563"
          color3="#4B5563"
        ></WeatherCard>
        <WeatherCard
          cardStyle="bg-gradient-to-t from-[#F9FAFB] bg-opacity-70 absolute z-40 left-[-620px] top-[0px]"
          icon="https://s3-alpha-sig.figma.com/img/3c6b/babb/0657324bf17d1bd5169b60a7fbcb80b1?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=uVwKHLA2r0mB54mUCGA3sxRal85xaGrB10-WtvmM-SlHJ9avtIeSEY5L9pGLJd9sN9K2nlTm-t75gLnBzjZ5o630U8nXaaPzxY-Q~6W6xqde3xBb5l5DqGklTN241rg1PmtRLRUlH-AwkqcTz7DoMXnipYL~12HTmUZqiU8biX-Iv1E~5OpXDTeJuT2VKLSuAnDYSph060VwNsEtsapKYZBMvI5Fpfdzf1tzwiF~LwqfhzNFqozotdHJP20gxpwsKvMbw-CWA26NDtbr5j7uPjepLCTWwmZ-NvwDoZOLeARlpd5LtLfSabJOl7OUWV9~fm1X1PiJGr8zf95gezSSTw__"
          date="September 21, 2025"
          dateStyle="text-[#6B7280]"
          placeName="Krakow"
          placeStyle="text-[#111827]"
          temp="26"
          loc="fill-[#4B5563]"
          tempStyle="from-[#111827] 0% to-[#6B7280] 100%"
          status="Bright"
          statusStyle="text-[#FF8E27]"
          iconShadow="/shadowSun.png"
          color1="#111827"
          color2="#D1D5DB"
          color3="#D1D5DB"
        ></WeatherCard>

        <Search className="absolute z-50 left-[40px] top-[40px] " />
        <CircleBorder classname="w-[1340px] h-[1340px]"></CircleBorder>
        <CircleBorder classname="w-[940px] h-[940px] "></CircleBorder>
        <CircleBorder classname="w-[540px] h-[540px] "></CircleBorder>
        <CircleBorder classname="w-[340px] h-[340px] "></CircleBorder>
        <CircleBorder classname="w-[140px] h-[140px] "></CircleBorder>
        <CircleBorder classname="w-[1340px] h-[1340px] border-[#fff]"></CircleBorder>
        <CircleBorder classname="w-[940px] h-[940px] border-[#fff] "></CircleBorder>
        <CircleBorder classname="w-[540px] h-[540px] border-[#fff]"></CircleBorder>
        <CircleBorder classname="w-[340px] h-[340px] border-[#fff]"></CircleBorder>
        <CircleBorder classname="w-[140px] h-[140px] border-[#fff]"></CircleBorder>
        <div className="absolute w-fit h-fit left-[752px] top-[557px] z-50">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="43"
            height="86"
            viewBox="0 0 43 86"
            fill="none"
          >
            <path
              d="M16.1296 7.58989L2.54477 32.8821C0.849461 36.0473 0 39.5213 0 43C0 46.4791 0.849461 49.9523 2.54477 53.1179L16.1296 78.4105C18.6335 83.0823 23.5304 86 28.8593 86H43.2889V78.835H43.2842C40.622 78.835 38.1737 77.3781 36.9216 75.0428L23.3418 49.7455C22.2069 47.6366 21.6413 45.3208 21.6413 43C21.6413 40.6788 22.2069 38.363 23.3418 36.2549L36.9216 10.9577C38.1737 8.62162 40.622 7.16533 43.2842 7.16533H43.2889V0H28.8593C23.5304 0 18.6335 2.91825 16.1296 7.58989Z"
              fill="#111111"
            />
          </svg>
        </div>
        <div className="absolute w-[70px] h-[138px] flex justify-start items-center left-[800px] top-[531px] pl-[4px] z-50 bg-[#F3F4F6] rounded-r-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="44"
            height="86"
            viewBox="0 0 44 86"
            fill="none"
          >
            <path
              d="M40.7442 32.882L27.1599 7.58993C24.6554 2.91778 19.7591 0 14.43 0H0V7.16486H0.00510914C2.66726 7.16486 5.11563 8.62166 6.36732 10.9572L19.9469 36.2543C21.0827 38.3633 21.647 40.679 21.647 42.9999C21.647 45.3211 21.0827 47.6368 19.9469 49.7454L6.36732 75.0423C5.11563 77.3783 2.66726 78.8345 0.00510914 78.8345H0V85.9999H14.43C19.7591 85.9999 24.6554 83.0821 27.1599 78.41L40.7442 53.1177C42.4388 49.9526 43.2889 46.4785 43.2889 42.9999C43.2889 39.5211 42.4388 36.0475 40.7442 32.882Z"
              fill="#111111"
            />
          </svg>
        </div>

        <div className="w-[567px] h-fit py-[16px] flex flex-col justify-center items-center opacity-95 backdrop-blur-xl bg-white absolute z-50 top-[130px] left-[40px] rounded-[24px]">
          <SearchResult cityName="Tokyo" country="Japan" />
          <SearchResult cityName="Tokyo" country="Japan" />
        </div>
      </div>
    </div>
  );
}
