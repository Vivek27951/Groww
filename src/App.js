import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Stocks from "./components/Stocks";
import Gold from "./components/Gold";
import MutualFunds from "./components/MutualFunds";
import Groww from "./Images/GrowwImage.png";
import DetailStock from "./components/DetailStock";
import TopLosers from "./components/StocksDetails/TopLosers";
import TopGainers from "./components/StocksDetails/TopGainers";
import StockInNews from "./components/StocksDetails/StocksInNews";
import MostValuable from "./components/StocksDetails/MostValuable";
import Home from "./components/Home";

const App = () => {
  return (
    <div className="min-h-screen bg-slate-300">
      <div className="p-10">
        <div className="flex justify-center">
          <img src={Groww} alt="Groww" className="w-10" />
          <div className="flex items-center justify-center ml-2">
            <div className="text-3xl font-semibold tracking-widest text-neutral-700">
              Groww
            </div>
          </div>
        </div>
        <Router>
          <Navbar />
          <div className="h-0.5 bg-gray-500"></div>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/Stocks" exact element={<Stocks />} />
            <Route path="/Gold" exact element={<Gold />} />
            <Route path="/MutualFunds" exact element={<MutualFunds />} />
            <Route path="/Stocks/TopGainers" exact element={<TopGainers />} />
            <Route path="/Stocks/TopLosers" exact element={<TopLosers />} />
            <Route
              path="/Stocks/StocksInNews"
              exact
              element={<StockInNews />}
            />
            <Route
              path="/Stocks/MostValuable"
              exact
              element={<MostValuable />}
            />
            <Route path="/Stocks/:id/:id" element={<DetailStock />} />
            <Route path="/Stocks/:id" element={<DetailStock />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
};

export default App;
