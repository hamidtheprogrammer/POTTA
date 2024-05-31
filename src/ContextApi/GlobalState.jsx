import { createContext, useState } from "react";
import React from "react";
import { store } from "../contants";
export const GlobalContext = createContext();

const GlobalState = ({ children }) => {
  const [products, setProducts] = useState(store);
  const [currentPage, setCurrentPage] = useState("home");

  const getCurrentPage = (page) => {
    setCurrentPage(page);
  };
  return (
    <GlobalContext.Provider value={{ products, currentPage, getCurrentPage }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalState;
