import React from "react";

export const Content = ({ contentArray }) => {
  return (
    <div className="content">
      {contentArray.map((item) => {
        return <p>{item}</p>;
      })}
    </div>
  );
};
