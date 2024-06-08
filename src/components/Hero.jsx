import React from "react";
import { Button, heroImages } from "../contants/Imports";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="wrapper mt-[5.2rem]">
      <div className="relative md:grid md:grid-cols-4 h-[90vh]">
        <div className="absolute z-[99] w-full h-full top-0 left-0 flxColStart justify-center hero-banner ">
          <div className="banner-inner lg:px-32 w-full relative flxColStart  max-md:flxcolCenter max-md:text-center gap-6">
            <p className="header-Id">POTTA JEWELLERIES</p>
            <h1 className="big-head max-md:max-w-[35rem] md:max-w-[45rem]">
              <span className="">Distinctive Porcelain</span>{" "}
              <span className="primaryTextCol">&</span> Stone Collection
            </h1>
            <p className="text-sm opacity-70 leading-6 max-md:max-w-[15rem] md:max-w-[30rem]">
              Exquisite and Contemporary Pottery Handcrafted by Our Master
              Artisan in Porcelain and Stone
            </p>
            <Link to={"/shop"} className="mt-7">
              <Button name={"shop collection"} />
            </Link>
          </div>
        </div>
        {heroImages.map((itm) => (
          <div
            key={Math.random()}
            className={`relative max-md:${itm.active} max-md:w-full max-md:h-full max-md:left-0 max-md:top-0 bg-black`}
          >
            <img
              className="h-full object-cover w-full"
              src={itm.img}
              alt="vase image"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hero;
