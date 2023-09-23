import React from "react";
import { StyledTag } from "./tag.styled";

type Props = {
  children: React.ReactNode;
  primary?: boolean;
  color?: string;
};

function Tag(props: Props) {
  return (
    <>
      {props.primary ? (
        <StyledTag $primary>{props.children}</StyledTag>
      ) : (
        <StyledTag color={props.color} >{props.children}</StyledTag>
      )}
    </>
  );
}

export default Tag;
