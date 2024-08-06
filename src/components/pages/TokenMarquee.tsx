import React from "react";
import Marquee from "react-fast-marquee";

const Token = () => {
  return (
    <div className="flex items-center gap-8 mr-8">
      <img className="w-8 h-8" alt="Star" src="/star-3.svg" />
      <p className="text-gray-100 text-3xl font-striker">Token</p>
    </div>
  );
};

const TokenMarquee = () => (
  <div className="bg-[linear-gradient(180deg,_#cefc00,_#f1eb00)] absolute bottom-0 z-40">
    <Marquee>
      {Array(50)
        .fill("")
        .map((_, idx) => (
          <Token key={idx} />
        ))}
    </Marquee>
  </div>
);

export default TokenMarquee;
