import React from "react";
import Groww from "../Images/GrowwImage.png";

const Home = () => {
  return (
    <div
      className="min-h-screen pt-20"
      style={{ background: "linear-gradient(#00d09c, #9198e5)" }}
    >
      <div className="flex flex-col items-center lg:flex lg:justify-around lg:flex-row">
        {/* <div> */}
        <div className="flex flex-col md:my-20">
          <div className="flex">
            <img
              src={Groww}
              alt="Groww"
              className="w-40 border-2 rounded-full"
            />
            <div className="flex items-center justify-center ml-2">
              <div className="font-semibold tracking-widest text-white text-7xl">
                Groww
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="my-10 font-mono text-xl font-medium text-blue-700">
              There's just one right way
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center p-20">
          <div>
            <div className="font-serif text-xl italic text-white">
              tu bhi invest kar na bro!
            </div>
            <div className="font-sans text-5xl">
              <span className="text-blue-700">Invest with </span>
              <span className="text-[#459c87]">Groww</span>
            </div>
          </div>
          <div>
            <ul className="mt-5 text-slate-600 md:mt-64">
              <li>- Zero Fees, No transaction charges, No hidden fees.</li>
              <li>- 100% paperless online free Demat account</li>
              <li>- No DP charges on buy and low brokerage on executed ord</li>
              <li>- Learn to invest in mutual funds with as low as Rs 500</li>
              <li>- Get ₹100 cashback on first transaction</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
