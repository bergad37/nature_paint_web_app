import React from "react";

const Button = ({ children, className, onClick, type, ...rest }) => {
  return (
    <button
      className={` rounded-md ${className}`}
      {...rest}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
