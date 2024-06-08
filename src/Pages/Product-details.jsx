import React from "react";
import { useParams } from "react-router";
import { useContext } from "react";
import { GlobalContext } from "../ContextApi/GlobalState";
import { Banner, ProductCard, useResetScrollBar } from "../contants/Imports";

const Details = () => {
  useResetScrollBar();
  const { products, addToCart } = useContext(GlobalContext);
  const params = useParams();
  const product = products.find((itm) => params.name === itm.name);

  return (
    <section className="wrapper w-full">
      <Banner head={"Details"} />
      <main className="w-full max-md:flxcolCenter mt-24">
        {product && (
          <ProductCard
            addItem={() => {
              product && addToCart(product);
            }}
            key={product.name}
            name={product.name}
            price={product.price}
            category={product.category}
            quantity={product.quantity}
            img={product.img}
          />
        )}
      </main>
    </section>
  );
};

export default Details;
