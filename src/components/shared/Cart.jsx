import React from "react";
import { useContext } from "react";
import { GlobalContext } from "../../ContextApi/GlobalState";

const Cart = () => {
  const { getCart, setIsCartOpen, isCartOpen, removeItemFromCart } =
    useContext(GlobalContext);
  return (
    <section
      className={`fixed top-0 z-[9999] md:w-1/2 bg-white max-md:w-full max-w-[500px] min-h-[100vh] ${
        !isCartOpen && "translate-x-[-100%] opacity-0"
      } transition duration-700 pl-10 pt-7`}
    >
      <div className="flxBtw flex-row pr-10">
        <h1 className="">Your Cart</h1>
        <button
          className="text-lg"
          onClick={() => {
            setIsCartOpen(false);
          }}
        >
          X
        </button>
      </div>
      <hr className="my-5 w-full relative left-0" />
      <ul className="flxColStart gap-5">
        {getCart?.map((item) => (
          <li key={item.name} className="flxrowCenter gap-2">
            <div className="h-[100px] w-[80px] ">
              <img
                className="relative h-full w-full object-cover"
                src={item?.img}
                alt=""
              />
            </div>
            <div className="flxColStart">
              <p className="text-lg font-[430]">{item.name}</p>
              <span className="text-sm font-[430] text-black/60">
                <p>Quantity: {item.quantity}</p>
                <p>{item.price}</p>
              </span>
              <button
                onClick={() => {
                  removeItemFromCart(item);
                }}
                className="hover:underline hover:primaryTextCol text-[0.9rem]"
              >
                Remove
              </button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Cart;
