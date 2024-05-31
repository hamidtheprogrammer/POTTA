import React from "react";
import { Home, Hero, Nav } from "./contants/Imports";
import { Route, Routes } from "react-router";
import GlobalState from "./ContextApi/GlobalState";
import Shop from "./Pages/Shop";

const App = () => {
  return (
    <GlobalState>
      <section className="flxColCenter select-none">
        <Nav style={"flx"} />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/shop" element={<Shop />}></Route>
          <Route></Route>
          <Route></Route>
        </Routes>
      </section>
    </GlobalState>
  );
};

export default App;
