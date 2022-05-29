import React from "react";
import Card from "../Card";
import StockData from "../../Data/StockData";

const Stocks = () => {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2">
        {StockData.map((Data) => (
          <Card Data={Data} key={Data.id} />
        ))}
      </div>
      {/* <Outlet /> */}
    </>
  );
};

export default Stocks;
