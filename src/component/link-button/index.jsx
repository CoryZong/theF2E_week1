import React from "react";
import "./index.scss";

export const LinkButton = ({ buttonText }) => {
  return (
    <button className="link-button">
      <span>{buttonText}</span>
    </button>
  );
};
