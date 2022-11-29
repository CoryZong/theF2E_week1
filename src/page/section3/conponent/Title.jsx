import React from "react";

export const Title = ({ cnText, enText }) => {
  return (
    <div className="title">
      <h1 className="cn">{cnText}</h1>
      <h1 className="en">{enText}</h1>
    </div>
  );
};
