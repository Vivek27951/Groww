import React from "react";
import { NavLink } from "react-router-dom";
const navbar = () => {
  const NavLinkStyle = ({ isActive }) => {
    return {
      color: isActive ? "#00d09c" : "black",
      fontWeight: isActive ? "bold" : "normal",
    };
  };

  return (
    <div className="flex text-xl font-medium list-none">
      <li className="px-5 hover:text-[#00d09c]">
        <NavLink to="/Stocks" style={NavLinkStyle}>
          Stocks
        </NavLink>
      </li>
      <li className="px-5 hover:text-[#00d09c]">
        <NavLink to="/mutualFunds" style={NavLinkStyle}>
          Mutual Funds
        </NavLink>
      </li>
      <li className="px-5 hover:text-[#00d09c]">
        <NavLink to="/Gold" style={NavLinkStyle}>
          Gold
        </NavLink>
      </li>
    </div>
  );
};
export default navbar;
