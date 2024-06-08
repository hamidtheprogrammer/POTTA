import React, { useEffect, useState } from "react";
import { Banner, FillStore, useFetch } from "../contants/Imports";
import { useParams } from "react-router";

const Category = () => {
  const { category } = useParams();
  const [categorizedProducts, setCategorizedProducts] = useState([]);
  const { data } = useFetch(`http://localhost:8000/shop/${category}`);

  useEffect(() => {
    setCategorizedProducts(data);
  }, [data]);
  return (
    <section className="banner flxcolCenter">
      <Banner head={category + "s"} />
      <main className="mt-36 text-center flxcolCenter gap-9">
        <p className="header-Id">OUR ONLINE SHOP</p>
        <h1 className="big-head">Shop {category}s</h1>
      </main>
      {categorizedProducts && <FillStore products={categorizedProducts} />}
    </section>
  );
};

export default Category;
