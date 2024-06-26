import React from "react";
import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";

const FillStore = ({ products }) => {
  return (
    <div className="relative w-full md:px-10 mt-16 max-md:flxcolCenter  gap-8 md:grid  md:grid-cols-3">
      {products?.map((item) => (
        <Link key={item._id} to={`/details/${item._id}`}>
          <ProductCard
            quick
            name={item.name}
            price={item.price}
            img={item.img}
          />
        </Link>
      ))}
    </div>
  );
};

export default FillStore;
