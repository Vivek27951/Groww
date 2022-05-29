import React, { useEffect, useState } from "react";
import StockData from "../Data/StockData";
import Navbar from "./Navbar";
import {
  MOST_VALUABLE,
  STOCKS_IN_NEWS,
  TOP_GAINERS,
  TOP_LOSERS,
} from "../Data/StockExtraData";
import StockNav from "./StockNav";

const DetailStock = () => {
  const [currStock, setcurrStock] = useState(null);
  useEffect(() => {
    let currId = window.location.href.split("/");
    currId = currId[currId.length - 1];

    // console.log("currId", currId);

    const TotalStocks = StockData.concat(
      MOST_VALUABLE,
      STOCKS_IN_NEWS,
      TOP_GAINERS,
      TOP_LOSERS
    );

    // console.log("Data", TotalStocks);

    for (let i = 0; i < TotalStocks.length; i++) {
      if (TotalStocks[i].company.isin === currId) {
        setcurrStock(TotalStocks[i]);
        break;
      }
    }
    // console.log("comp", currStock);
  }, []);
  return (
    <>
      <Navbar />
      <div className="h-0.5 bg-gray-500"></div>
      <StockNav />
      <div className="flex justify-center">
        <div className="h-0.5 bg-gray-500 w-full lg:w-2/5 md:w-3/4"></div>
      </div>
      <div className="flex flex-col items-center">
        <div>
          <img
            className="mx-4 my-4"
            src={currStock ? currStock.company.imageUrl : null}
            alt="company logo"
          />
          <h2 className="flex justify-center text-3xl font-medium tracking-wide text-[#08efb6] underline">
            {currStock ? currStock.company.companyName : null}
          </h2>
        </div>
        <div className="p-10 mt-20 text-lg">
          <div className="flex justify-around m-5 space-x-16">
            <p className="text-blue-700">
              <span className="text-gray-600">Open :</span> <span>&#8377;</span>
              {currStock ? currStock.stats.open : null}
            </p>
            <p className="text-blue-700">
              <span className="text-gray-600">Ltp :</span> <span>&#8377;</span>
              {currStock ? currStock.stats.ltp : null}
            </p>
            <p className="text-blue-700">
              <span className="text-gray-600">High :</span> <span>&#8377;</span>
              {currStock ? currStock.stats.high : null}
            </p>
            <p className="text-blue-700">
              <span className="text-gray-600">Low :</span> <span>&#8377;</span>
              {currStock ? currStock.stats.low : null}
            </p>
            <p className="text-blue-700">
              <span className="text-gray-600">Close :</span>{" "}
              <span>&#8377;</span>
              {currStock ? currStock.stats.close : null}
            </p>
          </div>
          <div className="flex justify-around m-5 space-x-16">
            <p className="text-blue-700">
              <span className="text-gray-600">Low Price Range :</span>{" "}
              <span>&#8377;</span>
              {currStock ? currStock.stats.lowPriceRange : null}
            </p>
            <p className="text-blue-700">
              <span className="text-gray-600">High Price Range :</span>{" "}
              <span>&#8377;</span>
              {currStock ? currStock.stats.highPriceRange : null}
            </p>
            <p className="text-blue-700">
              <span className="text-gray-600">Market Cap :</span>{" "}
              <span>&#8377;</span>
              {currStock ? currStock.stats.marketCap : null}
            </p>
          </div>
          <div className="flex justify-center">
            <p className="text-blue-700">
              <span className="text-gray-600">Day Change :</span>{" "}
              <span>&#8377;</span>
              {currStock ? currStock.stats.dayChange : null} (
              {currStock ? currStock.stats.dayChangePerc : null}%)
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailStock;
