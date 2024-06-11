import { createContext, useEffect, useState } from "react";
import React from "react";
import useFetch from "../FetchApi/useFetch";
import { stores } from "../contants";
export const GlobalContext = createContext();

const GlobalState = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({
    isAuthenticated: false,
    user: null,
  });
  const [products, setProducts] = useState(stores);
  const [currentPage, setCurrentPage] = useState("home");
  const [getCart, setGetCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { data } = useFetch({ url: "http://localhost:8000/shop", get: true });

  const getCurrentPage = (page) => {
    setCurrentPage(page);
  };
  const addToCart = (item) => {
    const checkItem = products.find((prod) => prod._id === item._id);
    let incrementItem = getCart.find((prod) => prod._id === item._id);

    // if (incrementItem) {
    //   incrementItem = { ...incrementItem, quantity: incrementItem.quantity++ };
    //   checkItem.quantity--;
    //   return;
    // }
    // if (checkItem?.quantity > 0) {
    //   const addItem = { ...checkItem, quantity: 1 };
    //   setGetCart((prevCart) => [...prevCart, addItem]), checkItem.quantity--;
    // }
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

  useEffect(() => {
    // setProducts(data);
  }, [data]);

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
        currentUser,
        setCurrentUser,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalState;
