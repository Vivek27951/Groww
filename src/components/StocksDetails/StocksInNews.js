import React from "react";
import { STOCKS_IN_NEWS } from "../../Data/StockExtraData";
import Card from "../Card";

const TopLosers = () => {
  console.log("STOCKS_IN_NEWS  ", STOCKS_IN_NEWS);
  return (
    <div>
      {/* <StockNav />
      <div className="flex justify-center">
        <div className="h-0.5 bg-gray-400 w-full lg:w-2/5 md:w-3/4"></div>
      </div> */}
      <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2">
        {STOCKS_IN_NEWS.map((Data) => (
          <Card Data={Data} key={Data.id} />
        ))}
      </div>
    </div>
  );
};

export default TopLosers;
