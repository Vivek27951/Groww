import React from "react";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import MutualFundsData from "../Data/MutualFundsData";

const MutualFunds = () => {
  return (
    <div>
      <Navbar />
      <div className="h-0.5 bg-gray-500"></div>
      <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2">
        {MutualFundsData.map((Data) => (
          <Card Data={Data} key={Data.id} />
        ))}
      </div>
    </div>
  );
};

export default MutualFunds;
