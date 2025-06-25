import React from "react";
import { FaCircle } from "react-icons/fa";

function Hero({ heroData, heroCount, setHeroCount }) {
  return (
    <div className="w-full h-[calc(100vh-80px)] flex flex-col lg:flex-row items-center justify-between px-[5%] gap-5">
      
      <div className="flex-1 text-[#88d9ee] text-center lg:text-left">
        <p className="text-[20px] md:text-[40px] lg:text-[55px] font-semibold">{heroData.text1}</p>
        <p className="text-[20px] md:text-[40px] lg:text-[55px] font-semibold">{heroData.text2}</p>

        <div className="flex justify-center lg:justify-start gap-[10px] mt-6">
          {[0, 1, 2, 3].map((i) => (
            <FaCircle
              key={i}
              className={`w-[14px] cursor-pointer ${
                heroCount === i ? "fill-orange-400" : "fill-white"
              }`}
              onClick={() => setHeroCount(i)}
            />
          ))}
        </div>
      </div>

     
      <div className="flex-1 h-full flex justify-center items-center">
        <img
          src={heroData.image}
          alt="Hero"
          className="max-h-[80vh] w-auto object-contain rounded-xl"
        />
      </div>
    </div>
  );
}

export default Hero;
