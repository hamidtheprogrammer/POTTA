import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { category } from "../../contants";

const Filter = ({ subCategories, styles }) => {
  const [filters, setFilters] = useState([
    { isOpen: false, name: "Price", content: [80, 100, 120, 140] },
    { isOpen: false, name: "subcategory", content: subCategories },
    {
      isOpen: false,
      name: "Categories",
      content: ["earring", "bracelet", "necklace"],
    },
  ]);

  const searchParams = useSearchParams();

  const expandFilter = (idx) => {
    setFilters((prevFilters) =>
      prevFilters.map((itm, index) =>
        index === idx ? { ...itm, isOpen: !itm.isOpen } : itm
      )
    );
  };

  const handleFilterChange = (filterValue, filterType, remove) => {
    let filter = "";
    let subCategory = [];
    let price = [];

    switch (filterType) {
      case "subCategory":
        remove
          ? subCategory.push(filterValue)
          : subCategory.filter((itm) => itm !== filterValue);
        break;
      case "subCategory":
        remove
          ? price.push(filterValue)
          : price.filter((itm) => itm !== filterValue);
        break;
      default:
        break;
    }
    console.log(subCategory);
    console.log(price);
  };
  return (
    <div className={`${styles}  bg-white mt-5 w-[95%] p-5 pt-0`}>
      {filters.map((itm, index) => (
        <div className="border-b-[1px] py-3" key={index}>
          <h1
            onClick={() => {
              expandFilter(index);
            }}
            className="flxBtw cursor-pointer"
          >
            <p>{itm.name}</p>
            <p>{">"}</p>
          </h1>
          {itm.isOpen && (
            <ul className="space-y-4 mt-3">
              {itm.content.map((ctn) => (
                <li key={ctn} className="flxrowCenter gap-2 text-sm">
                  <input
                    onChange={() => {
                      checked
                        ? handleFilterChange(ctn, itm.name)
                        : handleFilterChange(ctn, itm.name, remove);
                    }}
                    className="cursor-pointer h-[1rem] w-[1rem]"
                    type="checkbox"
                  />
                  <p>{ctn}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
};

export default Filter;
