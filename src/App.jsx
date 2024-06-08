import React from "react";
import {
  Home,
  Hero,
  Nav,
  Footer,
  About,
  Contact,
  Details,
  Cart,
  Category,
} from "./contants/Imports";
import { Route, Routes } from "react-router";
import GlobalState from "./ContextApi/GlobalState";
import Shop from "./Pages/Shop";

const App = () => {
  return (
    <GlobalState>
      <section className="flxColCenter select-none">
        <Nav style={"flx"} />
        <Cart />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/shop" element={<Shop />}></Route>
          <Route path="/shop/:category" element={<Category />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/details/:name" element={<Details />}></Route>
        </Routes>
        <Footer />
      </section>
    </GlobalState>
  );
};

export default App;
