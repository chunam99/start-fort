import React from "react";
import BlockContent from "@components/BlockContent";
import img from "@assets/img/home.svg";
import Image from "next/image";

const HomeContainer = () => {
  const data = [
    {
      total: "$7.7M",
      dec: "Total Liquidity Raised",
    },
    {
      total: "15496",
      dec: "Total Projects",
    },
    {
      total: "1.6M",
      dec: "Total Participants",
    },
    {
      total: "$41.6M",
      dec: "Total Values Locked",
    },
  ];
  return (
    <React.Fragment>
      <BlockContent className="pt-12 ">
        <div className="grid grid-cols-2 mb-12" id="home">
          <div className="pt-12">
            <h1 className="uppercase font-medium text-[#21294D] text-5xl title-app font-aviano-serif">
              the launchpad protocol for everyone
            </h1>
            <div className="text-gray-400 pt-4 text-[20px] font-[400] font-montserrat">
              Starfort Exchange helps everyone to create their own tokens and
              token sales in few seconds. Tokens created on Starfort Exchange
              will be verified and published on explorer websites.
            </div>
            <div className="flex gap-6 pt-10">
              <button className="py-3 px-4 text-white font-medium shadows-button-start-fort">
                Create Now
              </button>
              <button className="py-3 px-4 text-[#21294D] border-solid border-2 border-[#21294D]">
                Learn More
              </button>
            </div>
            <div className="pt-10 grid grid-cols-2 gap-4">
              {data.map((item, index) => (
                <div
                  key={index}
                  className="bg-[#FEFFFF] flex flex-col items-center justify-center px-15 py-9 border-[#DFE5F7] border-solid border-[1px] "
                >
                  <h3 className="text-[#21294D] font-[600] text-[32px] leading-[42px]">
                    {item.total}
                  </h3>
                  <span className="text-[#797979] text-[16px] leading-[21px] ">
                    {item.dec}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="">
            <Image
              className="absolute right-0 top-12 w-[50%]"
              alt=""
              src={img}
            />
          </div>
        </div>
      </BlockContent>
    </React.Fragment>
  );
};

export default HomeContainer;
