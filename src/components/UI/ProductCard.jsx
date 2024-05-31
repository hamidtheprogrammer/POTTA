import React from "react";

const ProductCard = ({ styles, name, price, img }) => {
  return (
    <div
      className={`relative flxColStart gap-5 border-b-[1px] border-black/50 hover:border-yellow-800 pb-3 transition duration-500 hover:cursor-pointer product-container ${styles} max-md:w-[80vw] `}
    >
      <div className="relative overflow-hidden w-full flxcolCenter">
        <img
          className="transition duration-700 hover:scale-[1.05] w-full object-cover"
          src="https://images.unsplash.com/photo-1554577621-1a3def0b656c?q=80&w=386&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
        <div className="top-0 left-0 h-full w-full absolute product-mask transition duration-500"></div>
      </div>
      <div>
        <p className="opacity-[0.6]">{name}</p>
        <p className="font-[500] text-[1rem]">{price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
