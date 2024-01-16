// src\pages\Assortmen\index.tsx
import React from "react";
import ItemCard from "components/ItemCard";
import Header from "components/Header";
import CardData from "components/ItemCard/CardData";

const AssortmentPage: React.FC = () => {
  return (
    <div className="bg-indigo-A100 flex flex-col font-balootamma items-center justify-start mx-auto pb-2.5 pr-2.5 w-full">
      <div className="flex flex-col items-center justify-start max-w-[1910px] mb-[600px] mx-auto md:px-5 w-full">
        <Header className="flex md:flex-col flex-row md:gap-5 items-center justify-center w-full" />
        <div className="flex flex-row items-center justify-between mt-3 w-[90%] md:w-full">
          {CardData.map((item) => (
            <div key={item.id} style={{ marginTop: "80px" }}>
              <ItemCard cardData={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AssortmentPage;
