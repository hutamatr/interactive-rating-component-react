import React from "react";

const Card = (props) => {
  const { className, children } = props;
  return (
    <div
      className={`relative m-auto max-w-xs rounded-lg bg-dark-blue px-5 py-6 ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;
