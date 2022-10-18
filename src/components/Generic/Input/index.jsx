import React, { forwardRef } from "react";
import { Container, Icon, Wrapper } from "./style";

const Input = forwardRef(
  (
    {
      type,
      onChange,
      placeholder,
      name,
      value,
      defaultValue,
      width,
      height,
      icon,
    },
    ref
  ) => {
    return (
      <Wrapper>
        <Icon>{icon}</Icon>
        <Container
          ref={ref}
          icon={icon}
          onChange={onChange}
          name={name}
          placeholder={placeholder}
          value={value}
          defaultValue={defaultValue}
          type={type}
          width={width}
          height={height}
        />
      </Wrapper>
    );
  }
);

export default Input;
