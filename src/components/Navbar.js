import React from "react";
import { Link } from "react-router-dom";
const navbar = () => {
  return (
    <div className="flex text-xl font-medium list-none">
      <li className="px-5 hover:text-[#00d09c]">
        <Link to="/Stocks">Stocks</Link>
      </li>
      <li className="px-5 hover:text-[#00d09c]">
        <Link to="/mutualFunds">Mutual Funds</Link>
      </li>
      <li className="px-5 hover:text-[#00d09c]">
        <Link to="/Gold">Gold</Link>
      </li>
    </div>
  );
};
export default navbar;
