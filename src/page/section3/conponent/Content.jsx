import React from "react";

export const Content = ({ contentArray }) => {
  return (
    <div className="content">
      {contentArray.map((item, index) => {
        return <p key={index}>{item}</p>;
      })}
    </div>
  );
};
