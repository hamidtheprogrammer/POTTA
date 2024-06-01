import React from "react";
import { Hero, Nav, Product, useResetScrollBar } from "../contants/Imports";

const Home = () => {
  useResetScrollBar();
  return (
    <>
      <Hero />
      <Product />
    </>
  );
};

export default Home;
