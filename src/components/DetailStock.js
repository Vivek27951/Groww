import React, { useEffect, useState } from "react";
import StockData from "../Data/StockData";
import {
  MOST_VALUABLE,
  STOCKS_IN_NEWS,
  TOP_GAINERS,
  TOP_LOSERS,
} from "../Data/StockExtraData";

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
    <div>
      <div className="">
        <img
          className="mx-4 my-4"
          src={currStock ? currStock.company.imageUrl : null}
          alt="company logo"
        />
        <br />
        <h2>{currStock ? currStock.company.companyName : null}</h2>
        <br />
        <div className="">
          <p>LTP: {currStock ? currStock.stats.ltp : null}</p>
          <p>HIGH: {currStock ? currStock.stats.high : null}</p>
          <p>LOW: {currStock ? currStock.stats.low : null}</p>
        </div>
      </div>
    </div>
  );
};

export default DetailStock;
