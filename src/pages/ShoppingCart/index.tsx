import React from "react";

import { Img, Text } from "components";
import Header from "components/Header";

const ShoppingCartPage: React.FC = () => {
  return (
    <>
      <div className="bg-indigo-A100 flex flex-col font-balootamma gap-[26px] justify-start mx-auto pb-2.5 pr-2.5 w-full">
        <div className="flex flex-col items-center max-w-[1910px] mx-auto md:px-5 w-full">
          <Header className="flex md:flex-col flex-row md:gap-5 items-center justify-center w-full" />
        </div>
        <div className="md:h-[1109px] h-[795px] sm:h-[979px] mb-[184px] md:ml-[0] ml-[43px] md:px-5 relative w-[66%] md:w-full">
          <div className="absolute bg-white-A700_b2 border-[3px] border-black-900 border-solid h-[787px] inset-y-[0] left-[0] my-auto shadow-bs w-[83%]"></div>
          <div className="absolute flex md:flex-col flex-row md:gap-5 h-full inset-[0] items-start justify-center m-auto w-[98%]">
            <Text
              className="mb-[753px] text-2xl md:text-[22px] text-black-900 sm:text-xl uppercase"
              size="txtBalooRegular24"
            >
              ITEMS IN SHOPPING CART
            </Text>
            <Text
              className="mb-[7px] md:ml-[0] ml-[469px] md:mt-0 mt-[746px] text-2xl md:text-[22px] text-black-900 sm:text-xl uppercase"
              size="txtBalooRegular24"
            >
              total:
            </Text>
            <Text
              className="md:ml-[0] ml-[274px] md:mt-0 mt-[754px] text-2xl md:text-[22px] text-black-900 sm:text-xl uppercase w-[11%] sm:w-full"
              size="txtBalooRegular24"
            >
              check out
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShoppingCartPage;
