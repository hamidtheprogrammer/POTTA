import React from "react";
import { Banner, FillStore, useResetScrollBar } from "../contants/Imports";
import { useContext } from "react";
import { GlobalContext } from "../ContextApi/GlobalState";

const Shop = () => {
  const { products } = useContext(GlobalContext);
  useResetScrollBar();
  return (
    <section className="banner flxcolCenter ">
      <Banner head={"Shop"} />

      <main className="mt-36 text-center flxcolCenter gap-9">
        <p className="header-Id">OUR ONLINE SHOP</p>
        <h1 className="big-head">Shop Collection</h1>
      </main>
      <FillStore products={products} />
    </section>
  );
};

export default Shop;
