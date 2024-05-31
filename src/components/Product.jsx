import React, { useState } from "react";
import { about, category } from "../contants";
import { Button, FillStore } from "../contants/Imports.jsx";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { GlobalContext } from "../ContextApi/GlobalState";
import pic from "C:/Users/HAMID/Downloads/POTTA/src/assets/pngegg.png";

const Product = () => {
  const { products } = useContext(GlobalContext);
  const [forYouProducts, setForYouProducts] = useState([
    products[0],
    products[1],
  ]);

  const [newArrivals, setNewArrivals] = useState(() => {
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
    <section className="wrapper relative flxcolCenter py-36 gap-11">
      <p className="header-Id">PRODUCT CATEGORIES</p>
      <h1 className="big-head">
        Porcelain <span className="primaryTextCol">&</span> Pottery
      </h1>
      <aside className="max-md:flxcolCenter md:flxrowCenter md:justify-center gap-9 w-full mt-7">
        {category.map((item) => (
          <Link
            key={item.name}
            className={`rounded-full ${item.color} h-[200px] w-[200px] hover:opacity-85 hover:scale-[1.05] transition duration-500 transform`}
            to={item.href}
          >
            <div className="relative rounded-full h-[70%] w-[70%] mx-auto top-[50%] translate-y-[-50%] border-white border-4 flxcolCenter justify-center text-white">
              <i className={`${item.image} text-6xl`}></i>
              <p>{item.name}</p>
            </div>
          </Link>
        ))}
      </aside>
      <aside className="max-md:flxColStart max-md:px-9 md:justify-center md:flxrowCenter gap-20 mt-20 relative w-[90%]">
        {about.map((abt) => (
          <div className="flxColStart gap-5">
            <h1 className="text-3xl max-w-[400px] text-balance font-[400]">
              {abt.header}
            </h1>
            <p className="text-sm text-black/60 font-[500] leading-[1.3rem] max-w-[550px] md:max-w-[500px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Distinctio nihil esse quam impedit ex ipsa dolore veniam tempore
              inventore sed nulla aspernatur aut blanditiis error doloribus,
              fugit minus facere ullam!
            </p>
          </div>
        ))}
      </aside>
      <hr className="hr" />
      <div className="w-full relative mt-32 flxcolCenter gap-40 md:px-10">
        {forYouProducts.map((product, index) => (
          <div className="relative w-full max-md:flxcolCenter md:gap-9 max-md:gap-10 md:flxrowCenter">
            <div
              className={`relative max-md:w-[90%] md:w-[90%] flxcolCenter ${
                index === 1 && "md:order-2"
              } `}
            >
              <div className="absolute h-[50%] w-full bg-gray-100 z-[-1] translate-y-[50%] "></div>
              <img
                className="h-[500px] aspect-auto"
                src="https://assets-global.website-files.com/5ba96977bf120e1b45986c06/5bb9668024337c19082edcaf_orientovase.png"
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
              <p className="underline cursor-pointer hover:opacity-70 text-black/85">
                View Details
              </p>
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
