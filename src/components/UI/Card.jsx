import React from "react";

const Card = (props) => {
  const { className, children } = props;
  return (
    <div
      className={`relative m-auto max-w-sm rounded-3xl bg-dark-blue p-8 ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;
