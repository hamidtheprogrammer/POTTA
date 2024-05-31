import React from "react";
import { NavItems } from "../../contants";
import { Link, useLocation } from "react-router-dom";

const NavbarItems = ({ styles, currentSection }) => {
  let location = useLocation();

  location =
    location.pathname === "/"
      ? "home"
      : location.pathname.startsWith(`/`)
      ? location.pathname.substring(1)
      : location.pathname;
  return (
    <section className={`text-sm ${styles}`}>
      {NavItems.map((item) => (
        <Link
          className={`text-[0.75rem] font-[600] max-md:py-6 max-md:px-5 max-md:border-t-[1px] relative max-md:w-full hover:text-black tracking-[0.1rem] uppercase ${
            location === item.id ? "primaryTextCol" : "text-black/55"
          } `}
          key={item.id}
          to={item.link}
          apnav
        >
          {item.name}
        </Link>
      ))}
    </section>
  );
};

export default NavbarItems;
