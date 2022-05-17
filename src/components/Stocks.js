import React from "react";
import Card from "./Card";
import StockData from "../Data/StockData";
import StockNav from "./StockNav";

const Stocks = () => {
  return (
    <>
      <StockNav />
      <div className="flex justify-center">
        <div className="h-0.5 bg-gray-500 w-full lg:w-2/5 md:w-3/4"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2">
        {StockData.map((stock) => (
          <Card stock={stock} key={stock.id} />
        ))}
      </div>
    </>
  );
};

export default Stocks;
