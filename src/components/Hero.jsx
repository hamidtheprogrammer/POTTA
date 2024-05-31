import React from "react";

import { Button, heroImage, heroImage2 } from "../contants/Imports";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="banner mt-20">
      <div className="banner-inner max-md:flxcolCenter lg:w-[90%] max-md:gap-10">
        <div className="relative flxColStart md:w-[45%]  max-md:flxcolCenter max-md:text-center max-md:w-[60vw] gap-5">
          <p className="header-Id">POTTA POTTERY</p>
          <h1 className="big-head">
            <span className="text-nowrap">Distinctive Porcelain</span>{" "}
            <span className="primaryTextCol">&</span> Stone Collection
          </h1>
          <p className="text-sm opacity-70 leading-6">
            Exquisite and Contemporary Pottery Handcrafted by Our Master Artisan
            in Porcelain and Stone
          </p>
          <Link to={"/shop"} className="mt-7">
            <Button name={"shop collection"} />
          </Link>
        </div>
        <div className="relative h-[300px] w-[300px]">
          <img src={heroImage} alt="vase image" />
          <img
            className="absolute w-[100%] h-[100%] top-0 left-0"
            src={""}
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
