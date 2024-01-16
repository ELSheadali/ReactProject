import React from "react";

import { Img, Text } from "components";
import Header from "components/Header";

const PaymentPage: React.FC = () => {
  return (
    <>
      <div className="bg-indigo-A100 flex flex-col items-center justify-start mx-auto pb-2.5 pr-2.5 w-full">
        <Header className="flex md:flex-col flex-row md:gap-5 items-center justify-center mb-[1006px] md:px-5 w-full" />
      </div>
    </>
  );
};

export default PaymentPage;
