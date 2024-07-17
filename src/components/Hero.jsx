import React from "react";
import hero from "../../src/assets/images/hero.png";

const Hero = () => {
  return (
      <section
      id="home"
      className="min-h-screen flex py-10 md:flex-row flex-col items-center">
    <div className="flex-1 flex items-center justify-center h-full">
      <img src={hero} alt="" className="md:w-11/12 h-full object-cover" />
    </div>
        <div className="flex-1">

        </div>
  </section>
      );
};

export default Hero;
