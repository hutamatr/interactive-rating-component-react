import React from "react";

const Button = (props) => {
  const { className, children } = props;
  return (
    <button
      className={`rounded-lg bg-new-orange px-5 py-2 text-white ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
