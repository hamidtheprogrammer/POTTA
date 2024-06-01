import React from "react";
import {
  Banner,
  FillStore,
  ProductCard,
  useResetScrollBar,
} from "../contants/Imports";
import { store } from "../contants";

const Shop = () => {
  useResetScrollBar();
  return (
    <section className="banner flxcolCenter ">
      <Banner head={"Shop"} />

      <main className="mt-36 text-center flxcolCenter gap-9">
        <p className="header-Id">OUR ONLINE SHOP</p>
        <h1 className="big-head">Shop Collection</h1>
      </main>
      <FillStore products={store} />
    </section>
  );
};

export default Shop;
