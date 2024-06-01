import React from "react";
import NavbarItems from "./NavbarItems";

const MobileNav = ({ isOpen, click }) => {
  return (
    <nav onClick={click} className="md:hidden mobile-nav">
      <NavbarItems
        styles={`mobilenav z-[1] fixed top-0 left-0 flxColStart bg-white w-full  ${
          isOpen ? "translate-y-[5rem]" : "-translate-y-[20rem]"
        }`}
      />
    </nav>
  );
};

export default MobileNav;
