import React from "react";

const TextInput = ({ className, ...rest }) => {
  return <input className={`border rounded-md ${className}`} {...rest} />;
};

export default TextInput;
