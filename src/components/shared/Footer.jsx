import React from "react";
import { logo } from "../../contants/Imports";
import { contact } from "../../contants";

const Footer = () => {
  return (
    <>
      <hr className="hr" />
      <section className="w-full wrapper flxcolCenter pt-36 bg-gray-50">
        <div className="flxcolCenter gap-8">
          <img src={logo} alt="logo" />
          <p className="details-text max-w-[400px] text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
            deserunt commodi vitae nihil nulla laborum
          </p>
        </div>
        <div className="mt-14 max-md:flxcolCenter md:flxrowCenter gap-16 k">
          {contact.map((c) => (
            <div key={c.name} className="flxcolCenter gap-4 w-[12rem]">
              <i className={`${c.icon} text-4xl text-black/60`}></i>
              <p>{c.name}</p>
              <p className="details-text max-w-[250px] text-center">
                {c.details}
              </p>
            </div>
          ))}
        </div>
        <hr className="hr" />
        <p className="text-xs mt-11 mb-7 flxcolCenter text-center">
          Template designed by
          <a
            href="https://www.dorianhoxha.com/"
            className="underline hover:primaryTextCol"
          >
            Dorianhoxa
          </a>
        </p>
      </section>
    </>
  );
};

export default Footer;
