import React from "react";
import {Header} from "../header/header.jsx";
import {Footer} from "../footer/footer.jsx";

const Container = ({ children, ...props }) => {
  const { subArticlesItems } = props;

  return (
    <div className="page-wrapper">
      <Header />
      {children}
      <Footer items={subArticlesItems} />
    </div>
  );
};

export { Container };