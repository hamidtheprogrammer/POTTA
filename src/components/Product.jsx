import React, { useState } from "react";
import { About, Button, FillStore } from "../contants/Imports.jsx";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { GlobalContext } from "../ContextApi/GlobalState";

const Product = () => {
  const { products } = useContext(GlobalContext);
  const [forYouProducts, setForYouProducts] = useState(
    products?.length && [products[0], products[1]]
  );

  const [newArrivals, setNewArrivals] = useState(() => {
    if (!products?.length) return;
    let productList = [];
    let counter = 0;
    while (counter < 9) {
      let randomId = Math.ceil(Math.random() * 30);
      products?.map((product, idx) => {
        idx === randomId &&
          (() => {
            let productExists = Boolean(
              productList?.find((itm) => itm.name === product.name)
            );
            !productExists && productList.push(product), counter++;
          })();
      });
    }

    return productList;
  });
  return (
    <section className="wrapper relative flxcolCenter pt-36 gap-11">
      <p className="header-Id">PRODUCT CATEGORIES</p>
      <h1 className="big-head">
        Porcelain <span className="primaryTextCol">&</span> Pottery
      </h1>
      <About aboutdts />
      <hr className="hr" />
      <div className="w-full relative mt-32 flxcolCenter gap-40 md:px-10">
        {forYouProducts?.map((product, index) => (
          <div
            key={index}
            className="relative w-full max-md:flxcolCenter md:gap-9 max-md:gap-10 md:flxrowCenter"
          >
            <div
              className={`relative max-md:w-[90%] md:w-[90%] flxcolCenter ${
                index === 1 && "md:order-2"
              } `}
            >
              <img
                className="h-[500px] aspect-square"
                src={product.img}
                alt="product image"
              />
            </div>
            <main
              className={`relative w-[90%] flxColStart gap-6 ${
                index === 1 && "md:order-1"
              }`}
            >
              <h1 className="text-2xl max-w-[400px] text-balance font-[500] ">
                {product.name}
              </h1>
              <p className="details-text md:max-w-[350px] text-[0.83rem] font-[500] ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
                totam molestias optio at veniam adipisci minus perspiciatis
                officiis facilis dolorem voluptas harum dolorum ea,
                reprehenderit velit soluta id, omnis fugiat.
              </p>
              <Link
                to={`/details/${product.name}`}
                className="underline cursor-Linkointer hover:opacity-70 text-black/85"
              >
                View Details
              </Link>
            </main>
          </div>
        ))}
      </div>
      <hr className="hr" />
      <main className="mt-10 text-center flxcolCenter gap-9">
        <p className="header-Id">OUR ONLINE SHOP</p>
        <h1 className="big-head">Shop New Arrivals</h1>
      </main>
      <FillStore products={newArrivals} />
      <Link to={"/shop"} className="mt-10">
        <Button name={"See All Products"} />
      </Link>
      <article className="shop-banner banner-inner mt-10">
        <p className="header-Id">POTTA POTTERY</p>
        <h1 className="big-head relative z-1 ">Start Shopping Now</h1>
        <p className="details-text relative z-1">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Necessitatibus aliquam assumenda incidunt, repellendus odit rerum
        </p>
        <Link to={"/shop"} className="mt-3">
          <Button name={"Enter Shop"} />
        </Link>
      </article>
    </section>
  );
};

export default Product;
