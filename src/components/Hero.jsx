import React from "react";
import { FaGithub } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";


import hero from "../../src/assets/images/hero.png";

const Hero = () => {
  const social_media = [
    "logo-github",
    "logo-instagram",
  ];
  return (
      <section
          id="home"
          className="min-h-screen flex py-10 md:flex-row flex-col items-center"
      >
        <div className="flex-1 flex items-center justify-center h-full">
          <img src={hero} alt="" className="md:w-11/12 h-full object-cover"/>
        </div>
        <div className="flex-1">
          <div className="md:text-left text-center">
            <h1 className="md:text-4xl text-2xl md:leading-normal leading-10 text-white font-bold">
            <span className="text-cyan-600 md:text-5xl text-4xl">
              Hello!
              <br/>
            </span>
               <span className="md:text-3xl text-3xl">My Name is Ali Qasemzadeh</span>
            </h1>
            <h4 className="md:text-2xl text-lg md:leading-normal leading-5 mt-4 font-bold text-gray-600">
              Fullstack Developer
            </h4>
            <button className="btn-primary mt-8">Contact Me</button>
            <div className="mt-8 text-3xl flex items-center md:justify-start justify-center gap-5">
              {social_media?.map((icon) => (
                  <div
                      key={icon}
                      className="text-gray-600 hover:text-white cursor-pointer "
                  >
                    <ion-icon name={icon}></ion-icon>
                  </div>
              ))}
            </div>
          </div>
        </div>
      </section>
  );
};

export default Hero;
