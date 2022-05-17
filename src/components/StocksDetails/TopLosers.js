import React from "react";
import { TOP_LOSERS } from "../../Data/StockExtraData";
import Card from "../Card";
import StockNav from "../StockNav";

const TopLosers = () => {
  console.log("TOP_LOSERS", TOP_LOSERS);
  return (
    <div>
      <StockNav />
      <div className="flex justify-center">
        <div className="h-0.5 bg-gray-400 w-full lg:w-2/5 md:w-3/4"></div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2">
        {TOP_LOSERS.map((stock) => (
          <Card stock={stock} key={stock.id} />
        ))}
      </div>
    </div>
  );
};

export default TopLosers;
