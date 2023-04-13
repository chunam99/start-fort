import React from "react";
import BlockContent from "@components/BlockContent";
import img from "@assets/img/home.png";
import Image from "next/image";

const HomeContainer = () => {
  return (
    <React.Fragment>
      <BlockContent className="pt-12 ">
        <div className="grid grid-cols-2">
          <div className="pt-12">
            <h1 className="uppercase font-medium text-[#3c62cc] text-5xl">
              the launchpad protocol for everyone
            </h1>
            <div className="text-gray-400 pt-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              text ever since the 1500s, when an unknown printer took a galley
              of type and scrambled it to make a type specimen book.
            </div>
            <div className="flex gap-4 pt-9">
              <button className="py-2 px-3 text-white font-medium bg-[#040c37] shadows-button-start-fort">
                Create Now
              </button>
              <button className="py-2 px-3 text-black border-solid border-2 border-[#ccc]">
                Learn More
              </button>
            </div>
          </div>
          <div className="">
            <Image className="absolute right-0 top-12" alt="" src={img} />
          </div>
        </div>
      </BlockContent>
    </React.Fragment>
  );
};

export default HomeContainer;
