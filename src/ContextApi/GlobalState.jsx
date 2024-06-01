import { createContext, useEffect, useState } from "react";
import React from "react";
import { store } from "../contants";
import { color } from "framer-motion";
export const GlobalContext = createContext();

const GlobalState = ({ children }) => {
  const [products, setProducts] = useState(store);
  const [currentPage, setCurrentPage] = useState("home");
  const [getCart, setGetCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [filter, setFilter] = useState({ category: "bowl", color: "white" });

  const getCurrentPage = (page) => {
    setCurrentPage(page);
  };
  const addToCart = (item) => {
    setGetCart((prevCart) => [...prevCart, item]);
  };

  const removeItemFromCart = (item) => {
    setGetCart((prevCart) => prevCart.filter((itm) => item.name === itm.name));
  };

  const fillFiltered = () => {
    setFilteredProducts(
      products.filter(
        (itm) =>
          (filter.category && filter.category === itm.category) ||
          (filter.color && filter.color === itm.color)
      )
    );
  };

  useEffect(() => {
    fillFiltered();
  }, [filter]);

  useEffect(() => {
    console.log(filteredProducts);
  }, [filteredProducts]);

  return (
    <GlobalContext.Provider
      value={{
        products,
        currentPage,
        getCurrentPage,
        addToCart,
        removeItemFromCart,
        getCart,
        isCartOpen,
        setIsCartOpen,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalState;
