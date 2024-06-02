import React, { useEffect, useState } from "react";
import { NavbarItems, MobileNav, logo } from "../../contants/Imports";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { GlobalContext } from "../../ContextApi/GlobalState";

const Nav = () => {
  const { currentPage, isCartOpen, setIsCartOpen, getCart } =
    useContext(GlobalContext);
  const [sideNav, setSideNav] = useState(false);

  const hideNav = () => {
    isCartOpen && hideCart();
    setSideNav((prevSideNav) => !prevSideNav);
  };

  const hideCart = () => {
    setIsCartOpen((prevCart) => !prevCart);
  };

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
      <MobileNav
        click={() => {
          setSideNav(false);
        }}
        isOpen={sideNav}
        currentSection={currentPage}
      />
      <nav className="shadow-lg relative z-[99] flxBtw py-7 bg-white px-7 md:px-5  lg:px-32 max-sm:py-6">
        <div id="logo" className="text-2xl">
          <Link to={"/"}>
            <img className="w-20 object-cover " src={logo} alt="" />
          </Link>
        </div>

        <section className="flex relative w-[70%] justify-end gap-10">
          <NavbarItems styles={`flex max-md:hidden gap-9`} />

          <div
            id=""
            className="text-xl relative max-md:w-[20%] flxBtw text-black/70"
          >
            <i
              onClick={hideCart}
              className="cursor-pointer fa-solid fa-cart-shopping relative"
            >
              {getCart.length !== 0 && (
                <div className="text-white text-xs justify-center absolute z-[99] top-0 right-0 translate-x-[50%] translate-y-[-50%] primaryBgCol h-[25px] w-[25px] rounded-full flxcolCenter">
                  {getCart?.length}
                </div>
              )}
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
