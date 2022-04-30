import React from "react";

const Button = (props) => {
  const { className, children, onClick, type } = props;
  return (
    <button
      className={`rounded-full bg-new-orange py-2.5 text-white ${className}`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
