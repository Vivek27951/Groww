import React from "react";
import { NavLink } from "react-router-dom";

const StockNav = () => {
  const NavLinkStyle = ({ isActive }) => {
    return {
      color: isActive ? "#00d09c" : "black",
      fontWeight: isActive ? "bold" : "normal",
    };
  };

  return (
    <div className="flex justify-center mt-5 text-sm font-medium list-none">
      <li className="px-5 hover:text-[#00d09c]">
        <NavLink to="/Stocks/TopGainers" style={NavLinkStyle}>
          TOP GAINERS
        </NavLink>
      </li>
      <li className="px-5 hover:text-[#00d09c]">
        <NavLink to="/Stocks/TopLosers" style={NavLinkStyle}>
          TOP LOSERS
        </NavLink>
      </li>
      <li className="px-5 hover:text-[#00d09c]">
        <NavLink to="/Stocks/StocksInNews" style={NavLinkStyle}>
          STOCKS IN NEWS
        </NavLink>
      </li>
      <li className="px-5 hover:text-[#00d09c]">
        <NavLink to="/Stocks/MostValuable" style={NavLinkStyle}>
          MOST VALUABLE
        </NavLink>
      </li>
    </div>
  );
};

export default StockNav;
