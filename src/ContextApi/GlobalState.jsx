import { createContext, useEffect, useState } from "react";
import React from "react";
import { store } from "../contants";
import { color } from "framer-motion";
import { Cart } from "../contants/Imports";
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
    const checkItem = products.find((prod) => prod.name === item.name);
    let incrementItem = getCart.find((prod) => prod.name === item.name);
    if (incrementItem) {
      incrementItem = { ...incrementItem, quantity: incrementItem.quantity++ };
      checkItem.quantity--;
      return;
    }
    if (checkItem?.quantity > 0) {
      const addItem = { ...checkItem, quantity: 1 };
      setGetCart((prevCart) => [...prevCart, addItem]), checkItem.quantity--;
    }
  };

  const removeItemFromCart = (item) => {
    const checkProduct = products.find((prod) => prod.name === item.name);
    checkProduct.quantity += item.quantity;
    setGetCart((prevCart) => prevCart.filter((itm) => item.name !== itm.name));
  };

  const fillFiltered = () => {
    setFilteredProducts(
      products.filter(
        (itm) =>
          (filter.category &&
            filter.category.toLowerCase() === itm.category.toLowerCase()) ||
          (filter.color &&
            filter.color.toLowerCase() === itm.color.toLowerCase())
      )
    );
  };

  useEffect(() => {}, [filter]);

  useEffect(() => {
    // console.log(filteredProducts);
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
