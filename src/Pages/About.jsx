import React, { useEffect } from "react";
import { Banner, useResetScrollBar } from "../contants/Imports";
import { about, category } from "../contants";
import { Link } from "react-router-dom";

const About = ({ aboutdts }) => {
  useResetScrollBar();
  const aboutdetails = () => (
    <>
      <aside className="max-md:flxcolCenter md:flxrowCenter md:justify-center gap-20 w-full mt-7">
        {category.map((item) => (
          <Link
            key={item.name}
            className={` ${item.color} h-[280px] w-[280px] flxcolCenter justify-center gap-6 hover:opacity-85 hover:scale-[1.05] transition duration-500 transform`}
            to={item.href}
          >
            <div className="relative w-[80%] h-[80%] rounded-full aspect-square overflow-hidden">
              <img
                className="h-full w-full object-cover"
                src={item.image}
                alt=""
              />
            </div>
            <p className="">{item.name}</p>
          </Link>
        ))}
      </aside>
      <aside className="max-md:flxColStart max-md:px-9 md:justify-center md:flxrowCenter gap-20 mt-20 relative w-[90%]">
        {about.map((abt) => (
          <div key={abt.header} className="flxColStart gap-5">
            <h1 className="text-3xl max-w-[400px] text-balance font-[400]">
              {abt.header}
            </h1>
            <p className="text-sm text-black/60 font-[500] leading-[1.3rem] max-w-[550px] md:max-w-[500px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Distinctio nihil esse quam impedit ex ipsa dolore veniam tempore
              inventore sed nulla aspernatur aut blanditiis error doloribus,
              fugit minus facere ullam!
            </p>
          </div>
        ))}
      </aside>
    </>
  );

  const aboutFull = () => (
    <section className="banner flxcolCenter ">
      <Banner head={"About"} />
      {aboutdetails()}
    </section>
  );
  return aboutdts ? aboutdetails() : aboutFull();
};

export default About;
