import React from "react";

const Button = ({ name }) => {
  return (
    <button className="text-xs tracking-[0.1rem] hover:bg-black hover:-translate-y-[0.5rem] transition duration-500 transform primaryBgCol text-white uppercase px-9 py-5">
      {name}
    </button>
  );
};

export default Button;
