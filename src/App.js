import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AllStocks from "./components/StocksDetails/AllStocks";
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
import Footer from "./components/Footer";

const App = () => {
  useEffect(() => {
    (function (d, m) {
      var kommunicateSettings = {
        appId: "25ff8cf9eb11112b6467ad19b447e13d1",
        popupWidget: true,
        automaticChatOpenOnNavigation: true,
      };
      var s = document.createElement("script");
      s.type = "text/javascript";
      s.async = true;
      s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
      var h = document.getElementsByTagName("head")[0];
      h.appendChild(s);
      window.kommunicate = m;
      m._globals = kommunicateSettings;
    })(document, window.kommunicate || {});
  });

  return (
    <div
      className="flex flex-col justify-between min-h-screen"
      style={{ background: "linear-gradient( #9198e5 ,#00d09c)" }}
    >
      <div className="p-10">
        <div className="flex justify-center">
          <img src={Groww} alt="Groww" className="w-10" />
          <div className="flex items-center justify-center ml-2">
            <div className="text-3xl font-semibold tracking-widest text-neutral-700">
              Groww :)
            </div>
          </div>
        </div>
        <Router>
          <Routes>
            <Route path="/Groww" exact element={<Home />} />
            <Route path="/Stocks" element={<Stocks />}>
              <Route index element={<AllStocks />} />
              <Route path="TopGainers" element={<TopGainers />} />
              <Route path="TopLosers" element={<TopLosers />} />
              <Route path="StocksInNews" element={<StockInNews />} />
              <Route path="MostValuable" element={<MostValuable />} />
            </Route>

            <Route path="/Gold" exact element={<Gold />} />
            <Route path="/MutualFunds" exact element={<MutualFunds />} />
            {/* <Route path="/Stocks/TopGainers" exact element={<TopGainers />} /> */}
            {/* <Route path="/Stocks/TopLosers" exact element={<TopLosers />} /> */}
            {/* <Route path="/Stocks/StocksInNews" exact element={<StockInNews />} /> */}
            {/* <Route path="/Stocks/MostValuable" exact element={<MostValuable />} /> */}
            <Route path="/Stocks/:id/:id" element={<DetailStock />} />
            <Route path="/Stocks/:id" element={<DetailStock />} />
          </Routes>
        </Router>
      </div>
      <Footer />
    </div>
  );
};

export default App;
