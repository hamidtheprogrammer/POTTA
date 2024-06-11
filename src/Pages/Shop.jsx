import React, { useEffect, useState } from "react";
import {
  Banner,
  FillStore,
  FilterMobileView,
  useResetScrollBar,
} from "../contants/Imports";
import { useContext } from "react";
import { GlobalContext } from "../ContextApi/GlobalState";
import { useSearchParams } from "react-router-dom";

const Shop = () => {
  const [searchParams] = useSearchParams();
  const [isOpen, setIsOpen] = useState(false);
  const { products } = useContext(GlobalContext);
  const subCategories = [
    "gold",
    "beaded",
    "pendant",
    "charm",
    "cuff",
    "stud",
    "hoop",
    "dangle",
  ];
  useResetScrollBar();

  useEffect(() => {
    console.log(searchParams.get("category"));
  }, [searchParams]);
  return (
    <section className="banner flxcolCenter ">
      <FilterMobileView
        click={() => {
          setIsOpen((prev) => !prev);
        }}
        isOpen={isOpen}
        subCat={subCategories}
      />
      <Banner head={"Shop"} />
      <section
        className="cursor-pointer"
        onClick={() => {
          setIsOpen((prev) => !prev);
        }}
      >
        Filter
      </section>
      <main className="mt-36 text-center flxcolCenter gap-9">
        <p className="header-Id">OUR ONLINE SHOP</p>
        <h1 className="big-head">Shop Collection</h1>
      </main>
      <FillStore products={products} />
    </section>
  );
};

export default Shop;
