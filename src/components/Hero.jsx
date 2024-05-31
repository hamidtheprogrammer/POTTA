import React from "react";
import Button from "./UI/Button";
import heroImage from "C:/Users/HAMID/Downloads/POTTA/src/assets/Realistic-porselain-vase-for-flowers-or-plants-isolated-on-transparent-background-PNG.png";
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
        <div className="h-[300px] w-[300px]">
          <img src={heroImage} alt="vase image" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
