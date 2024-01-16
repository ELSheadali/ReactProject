import React from "react";

import { Img, Text } from "components";

import { useNavigate } from "react-router-dom";

type HeaderProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  Partial<{}>;

const Header: React.FC<HeaderProps> = (props) => {
  const navigate = useNavigate();

  return (
    <>
      <header className={props.className}>
        <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between max-w-[1913px] mx-auto md:px-5 w-full">
          <div className="sm:h-[215px] h-[63px] relative w-[93%] md:w-full">
            <div className="absolute flex flex-col h-full inset-y-[0] items-center justify-start my-auto right-[17%] w-[59%]">
              <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between w-full">
                <Text
                  className="common-pointer font-baloo relative right-[120px] text-2xl md:text-[22px] text-black-900 sm:text-xl uppercase"
                  size="txtBalooRegular24"
                  onClick={() => navigate("/assortmen")}
                >
                  Assortment
                </Text>
                <Text
                  className="common-pointer md:text-5xl sm:text-[42px] text-[56px] text-black-900"
                  size="txtRubikGlitchRegular56"
                  onClick={() => navigate("/")}
                >
                  CLOTHING SHOP
                </Text>
                <Text
                  className="left-[120px] relative text-2xl md:text-[22px] text-black-900 sm:text-xl uppercase"
                  size="txtBalooRegular24"
                >
                  About us
                </Text>
              </div>
            </div>
            <Img
              className="absolute h-0.5 inset-[0] justify-center m-auto object-cover right-[0] w-full"
              src="images/img_line1.png"
              alt="lineOne"
            />
          </div>
          <Img
            className="common-pointer h-[54px] relative right-2 w-[54px]"
            src="images/img_cart.svg"
            alt="cart"
            onClick={() => navigate("/shoppingcart")}
          />
          <Img
            className="h-[42px] relative right-[5px] w-[42px]"
            src="images/img_contrast.svg"
            alt="contrast"
          />
        </div>
      </header>
    </>
  );
};

Header.defaultProps = {};

export default Header;
