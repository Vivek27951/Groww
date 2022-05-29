import React from "react";
import Navbar from "../components/Navbar";
import GoldData from "../Data/GoldData";

const Gold = () => {
  return (
    <div>
      <Navbar />
      <div className="h-0.5 bg-gray-500"></div>
      <div className="flex items-center justify-center w-full h-screen m-5 ">
        <table className="border-4 w-[800px] h-[800px] border-[#00d09c]">
          <tr className="text-2xl text-white border-b-4 border-[#00d09c] ">
            <th>City</th>
            <th>22 Carat Gold</th>
            <th>24 Carat Gold</th>
          </tr>
          {GoldData.map((val, key) => {
            return (
              <tr
                key={key}
                className="text-lg font-bold text-blue-800 border-b-2 border-[#00d09c] "
              >
                <td className="text-center">{val.City}</td>
                <td className="text-center">{val.Carat22}</td>
                <td className="text-center">{val.Carat24}</td>
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  );
};

export default Gold;
