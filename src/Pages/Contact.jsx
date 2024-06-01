import React from "react";
import { Banner, useResetScrollBar } from "../contants/Imports";

const Contact = () => {
  useResetScrollBar();
  return (
    <section className="banner flxcolCenter ">
      <Banner head={"Contact"} />
    </section>
  );
};

export default Contact;
