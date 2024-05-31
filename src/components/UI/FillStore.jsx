import React from "react";
import ProductCard from "./ProductCard";

const FillStore = ({ products }) => {
  return (
    <div className="relative w-full  md:px-10 mt-16 max-md:flxcolCenter gap-8 md:grid md:grid-cols-3">
      {products.map((item) => (
        <ProductCard
          key={item.name}
          name={item.name}
          price={item.price}
          img={""}
          // styles={"max-md:w-[100%] bg-yellow-500"}
        />
      ))}
    </div>
  );
};

export default FillStore;
