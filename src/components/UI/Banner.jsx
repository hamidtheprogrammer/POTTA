import React from "react";

const Banner = ({ head }) => {
  return (
    <article className="shop-banner banner-inner">
      <h1 className="big-head relative z-1">{head}</h1>
      <p className="details-text relative z-1">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus
        aliquam assumenda incidunt, repellendus odit rerum ipsum itaque fugiat
        nihil reprehenderit molestias ducimus perspiciatis illum quis odio. Non
        laborum soluta ex.
      </p>
    </article>
  );
};

export default Banner;
