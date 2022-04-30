import React from "react";

const Button = (props) => {
  const { className, children } = props;
  return (
    <button
      className={`rounded-full bg-new-orange py-3 text-white ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
