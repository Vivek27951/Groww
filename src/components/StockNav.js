import React from "react";
import { Link } from "react-router-dom";

const StockNav = () => {
  return (
    <div className="flex justify-center mt-5 text-sm font-medium list-none">
      <li className="px-5 hover:text-[#00d09c]">
        <Link to="/Stocks/TopGainers">TOP GAINERS</Link>
      </li>
      <li className="px-5 hover:text-[#00d09c]">
        <Link to="/Stocks/TopLosers">TOP LOSERS</Link>
      </li>
      <li className="px-5 hover:text-[#00d09c]">
        <Link to="/Stocks/StocksInNews">STOCKS IN NEWS</Link>
      </li>
      <li className="px-5 hover:text-[#00d09c]">
        <Link to="/Stocks/MostValuable">MOST VALUABLE</Link>
      </li>
    </div>
  );
};

export default StockNav;
