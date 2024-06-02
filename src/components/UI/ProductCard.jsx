import React from "react";
import Button from "./Button";

const ProductCard = ({
  styles,
  name,
  price,
  img,
  category,
  quantity,
  quick,
  addItem,
}) => {
  const quickProductCard = () => (
    <div
      className={`product-wrapper product-container hover:cursor-pointer border-b-[1px] border-black/50 hover:border-yellow-800 md:max-w-[500px]`}
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
        <p className="font-[500] text-[1rem]">${price}</p>
      </div>
    </div>
  );

  const detailedProductCard = () => (
    <div className={`product-wrapper  gap-20`}>
      <div className="relative overflow-hidden w-full flxcolCenter ">
        <img
          className="transition duration-700 hover:scale-[1.05] w-full object-cover"
          src="https://images.unsplash.com/photo-1554577621-1a3def0b656c?q=80&w=386&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
        <div className="top-0 left-0 h-full w-full absolute product-mask transition duration-500"></div>
      </div>
      <div className="flxColStart gap-4">
        <p className="header-Id">PRODUCT DETAILS</p>
        <p className="big-head">{name}</p>
        <p className="font-[500] text-[1rem]">${price}</p>
        <p className="details-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat sed
          quasi sint corporis! Eaque ad recusandae, asperiores ipsam doloremque
          numquam, iure eveniet vel vitae enim aliquam mollitia minus nemo
          quibusdam!
        </p>
        <p>
          <span className="font-[430]">Category: </span>{" "}
          <span className="details-text ">{category}</span>
        </p>
        <p>
          <span className="font-[430]">Quantity: </span>{" "}
          <span className="details-text ">{quantity}</span>
        </p>
        <div onClick={addItem} className="mt-5 cursor-pointer">
          {quantity > 0 ? (
            <Button name={"ADD TO CART"} />
          ) : (
            <span className="text-red-600">Out Of Stock</span>
          )}
        </div>
      </div>
    </div>
  );

  return quick ? quickProductCard() : detailedProductCard();
};

export default ProductCard;
