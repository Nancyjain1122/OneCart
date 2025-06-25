import React, { useState, useEffect } from "react";
import Hero from "../component/Hero.jsx";
import Product from "../pages/Product.jsx"; 
import cc from "../assets/cc.jpg";
import pantwoman4 from "../assets/pantwoman4.jpg";
import slider3 from "../assets/slider3.jpg";
import shirtman1 from "../assets/shirtman1.jpg";
import NewLetterBox from "../component/NewLetterBox.jsx";
import Footer from "../component/Footer.jsx";
import OurPolicy from "../component/OurPolicy.jsx";

function Home() {
  const heroData = [
    { text1: "Discover the Best of Bold Fashion", text2: "Limited Time Only!", image: cc },
    { text1: "Explore Our Best Collection", text2: "Shop Now!", image: pantwoman4 },
    { text1: "Choose your Perfect Fashion Fit", text2: "Now on Sale!", image: slider3 },
    { text1: "Step Into Style Today", text2: "Don't Miss Out!", image: shirtman1 }
  ];

  const [heroCount, setHeroCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setHeroCount((prevCount) => (prevCount + 1) % heroData.length);
    }, 3000); 

    return () => clearInterval(interval);
  }, [heroData.length]);

  return (
    <div className="w-full min-h-screen bg-gradient-to-l from-[#141414] to-[#0c2025] pt-[80px]">
      <Hero
        heroData={heroData[heroCount]}
        heroCount={heroCount}
        setHeroCount={setHeroCount}
      />
      
      <Product /> 
      <OurPolicy />
      <NewLetterBox />
      <Footer />
    </div>
  );
}

export default Home;
