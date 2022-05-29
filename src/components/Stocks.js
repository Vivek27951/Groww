import React from "react";
import StockNav from "./StockNav";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const Stocks = () => {
  return (
    <>
      <Navbar />
      <div className="h-0.5 bg-gray-500"></div>
      <StockNav />
      <div className="flex justify-center">
        <div className="h-0.5 bg-gray-500 w-full lg:w-2/5 md:w-3/4"></div>
      </div>
      <Outlet />
    </>
  );
};

export default Stocks;
