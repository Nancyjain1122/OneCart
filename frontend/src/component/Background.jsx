import React from 'react';
import back1 from "../assets/back1.jpg";
import slider2 from "../assets/slider2.jpg";
import slider3 from "../assets/slider3.jpg";
import shirtman1 from "../assets/shirtman1.jpg";

function Background({ heroCount }) {
  if (heroCount === 0) {
    return <img src={back1} alt="" className="w-[100%] h-[100%] object-cover float-left overflow-auto" />;
  } else if (heroCount === 1) {
    return <img src={slider2} alt="" className="w-[100%] h-[100%] object-cover float-left overflow-auto" />;
  } else if (heroCount === 2) {
    return <img src={slider3} alt="" className="w-[100%] h-[100%] object-cover float-left overflow-auto" />;
  } else {
    return <img src={shirtman1} alt="" className="w-[100%] h-[100%] object-cover float-left overflow-auto" />;
  }
}

export default Background;
