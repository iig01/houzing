import React from "react";
import { Container } from "./style";

const Input = ({
  type,
  onChange,
  placeholder,
  name,
  value,
  defaultValue,
  width,
  height,
}) => {
  return (
    <Container
      onChange={onChange}
      name={name}
      placeholder={placeholder}
      value={value}
      defaultValue={defaultValue}
      type={type}
      width={width}
      height={height}
    />
  );
};

export default Input;
