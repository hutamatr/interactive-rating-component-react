import React from "react";

const Card = (props) => {
  const { className, children } = props;
  return (
    <section
      className={`relative mx-auto max-w-xs rounded-lg bg-dark-blue px-5 py-6 ${className}`}
    >
      {children}
    </section>
  );
};

export default Card;
