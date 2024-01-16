import React from "react";

import Header from "components/Header";

import { Img, Text } from "components";

const LandingPage: React.FC = () => {
  return (
    <>
      <div className="bg-indigo-A100 border border-black-900 border-solid h-[1080px] mx-auto relative w-full">
        <div className="flex flex-col h-full items-center justify-start m-auto w-full">
          <div className="flex flex-col gap-3.5 items-center justify-start w-full">
            <div className="flex flex-col items-center max-w-[1910px] mx-auto md:px-5 w-full">
              <Header className="flex md:flex-col flex-row md:gap-5 items-center justify-center w-full" />
            </div>
            <div className="h-[1003px] md:px-5 relative w-full">
              <Img
                className="h-[1003px] m-auto object-cover w-full"
                src="images/img_backgroundimg.png"
                alt="backgroundimg"
              />
              <div className="absolute flex flex-col items-center justify-start right-[0] top-[19%] w-1/5">
                <Img
                  className="h-[405px] md:h-auto object-cover w-full"
                  src="images/img_blue31.png"
                  alt="blueThirtyOne"
                />
              </div>
              <div className="absolute bottom-[0] flex flex-col items-center justify-start right-[38%] w-1/5">
                <Img
                  className="h-[405px] md:h-auto object-cover w-full"
                  src="images/img_blue21.png"
                  alt="blueTwentyOne"
                />
              </div>
              <div className="absolute bottom-[0] flex flex-col items-center justify-start left-[0] w-1/5">
                <Img
                  className="h-[405px] md:h-auto object-cover w-full"
                  src="images/img_blue12.png"
                  alt="blueTwelve"
                />
              </div>
            </div>
          </div>
        </div>
        <Img
          className="absolute bottom-[0px] h-[976px] i justify-center m-auto object-cover top-[0] md:w-full"
          src="images/img_sewingline.png"
          alt="sewingline"
        />
      </div>
    </>
  );
};

export default LandingPage;
