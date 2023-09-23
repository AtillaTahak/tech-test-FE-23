import React from "react";
import { StyledButtonSearch } from "./button.styled";

type Props = {
  children: React.ReactNode;
  primary?: boolean;
};

const Button = (props: Props) => {
  return (
    <>
      {props.primary ? (
        <StyledButtonSearch $primary>{props.children}</StyledButtonSearch>
      ) : (
        <StyledButtonSearch>{props.children}</StyledButtonSearch>
      )}
    </>
  );
};

export default Button;
