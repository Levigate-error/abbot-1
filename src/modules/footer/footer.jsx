import React from "react";

const Footer = (props) => {
  const { items } = props;

  if (!items?.length) {
    return null;
  }

  return (
    <div className="footer">
      {items.map((item) => (
        <p className="footer-item">
          <span className="footer-item-title">{item.title}</span>
          {" — "}
          <span className="footer-item-text">{item.text}</span>
        </p>
      ))}
    </div>
  )
};

export { Footer };
