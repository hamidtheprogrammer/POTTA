import React, { useState } from "react";
import Filter from "./Filter";

const FilterMobileView = ({ subCat, isOpen, click }) => {
  return (
    <section
      className={`mobile-filter fixed z-[9999] transition duration-500 ${
        !isOpen && "translate-x-[120%]"
      }  bg-gray-200 top-0 w-full flxcolCenter`}
    >
      <h1 className="bg-white py-2 text-xl w-full relative flxBtw px-4">
        <p>Filters</p>
        <p onClick={click} className="cursor-pointer">
          X
        </p>
      </h1>
      <Filter subCategories={subCat} styles={"bg-white mt-5 w-[95%] p-5"} />
    </section>
  );
};

export default FilterMobileView;
