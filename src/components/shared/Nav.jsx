import React, { useEffect, useState } from "react";
import { NavbarItems, MobileNav, logo } from "../../contants/Imports";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { GlobalContext } from "../../ContextApi/GlobalState";

const Nav = () => {
  const { currentPage } = useContext(GlobalContext);
  const [sideNav, setSideNav] = useState(false);

  const hideNav = () => {
    setSideNav((prevSideNav) => !prevSideNav);
  };
  useEffect(() => {}, [sideNav]);

  useEffect(() => {
    const navContainer = document.querySelector(`.nav-container`);
    document.addEventListener("click", (e) => {
      if (sideNav && navContainer && !navContainer.contains(e.target)) {
        setSideNav(false);
      }
    });

    return () => {
      document.removeEventListener("click", () => {}); // Clean up the event listener
    };
  }, []);
  return (
    <header className="wrapper fixed z-[999] top-0 nav-container">
      <MobileNav isOpen={sideNav} currentSection={currentPage} />
      <nav className="shadow-lg relative z-[99] flxBtw py-7 bg-white px-7 md:px-5  lg:px-32 max-sm:py-6">
        <div id="logo" className="text-2xl">
          <Link to={"/"}>
            <img className="w-20 object-cover " src={logo} alt="" />
          </Link>
          {/* <img
            src="../assets/Screenshot 2024-05-29 062948.png"
            alt="Potta logo"
          /> */}
        </div>

        <section className="flex relative w-[70%] justify-end gap-10">
          <NavbarItems styles={`flex max-md:hidden gap-9`} />

          <div
            id=""
            className="text-xl relative max-md:w-[20%] flxBtw text-black/70"
          >
            <i className="cursor-pointer fa-solid fa-cart-shopping relative">
              <div className="absolute h-[100%] w-[1px] bg-black/10 top-[-25%] -translate-x-4"></div>
            </i>

            <i
              onClick={hideNav}
              className="cursor-pointer fa-solid fa-bars md:hidden"
            ></i>
          </div>
        </section>
      </nav>
    </header>
  );
};

export default Nav;
