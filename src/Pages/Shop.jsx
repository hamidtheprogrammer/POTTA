import React from "react";
import { FillStore, ProductCard } from "../contants/Imports";
import { store } from "../contants";

const Shop = () => {
  return (
    <section className="banner flxcolCenter ">
      <article className="shop-banner banner-inner">
        <h1 className="big-head relative z-1">Shop</h1>
        <p className="details-text relative z-1">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Necessitatibus aliquam assumenda incidunt, repellendus odit rerum
          ipsum itaque fugiat nihil reprehenderit molestias ducimus perspiciatis
          illum quis odio. Non laborum soluta ex.
        </p>
      </article>
      <main className="mt-36 text-center flxcolCenter gap-9">
        <p className="header-Id">OUR ONLINE SHOP</p>
        <h1 className="big-head">Shop Collection</h1>
      </main>
      <FillStore products={store} />
    </section>
  );
};

export default Shop;
