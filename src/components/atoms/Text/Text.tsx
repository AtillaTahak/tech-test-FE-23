import React from "react";
import {
  StyledTextP,
  StyledTextH1,
  StyledTextH2,
  StyledTextH3,
  StyledTextH4,
  StyledTextH5,
  StyledTextH6,
  StyledTextHSpan,
} from "./text.styled";

type Props = {
  children: React.ReactNode;
  type?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
  primary?: boolean;
};

const Text = (props: Props) => {
  switch (props.type) {
    case "h1":
      return (
        <>
          {props.primary ? (
            <StyledTextH1 $primary>{props.children}</StyledTextH1>
          ) : (
            <StyledTextH1>{props.children}</StyledTextH1>
          )}
        </>
      );
    case "h2":
      return (
        <>
          {props.primary ? (
            <StyledTextH2 $primary>{props.children}</StyledTextH2>
          ) : (
            <StyledTextH2>{props.children}</StyledTextH2>
          )}
        </>
      );
    case "h3":
      return (
        <>
          {props.primary ? (
            <StyledTextH3 $primary>{props.children}</StyledTextH3>
          ) : (
            <StyledTextH3>{props.children}</StyledTextH3>
          )}
        </>
      );
    case "h4":
      return (
        <>
          {props.primary ? (
            <StyledTextH4 $primary>{props.children}</StyledTextH4>
          ) : (
            <StyledTextH4>{props.children}</StyledTextH4>
          )}
        </>
      );
    case "h5":
      return (
        <>
          {props.primary ? (
            <StyledTextH5 $primary>{props.children}</StyledTextH5>
          ) : (
            <StyledTextH5>{props.children}</StyledTextH5>
          )}
        </>
      );
    case "h6":
      return (
        <>
          {props.primary ? (
            <StyledTextH6 $primary>{props.children}</StyledTextH6>
          ) : (
            <StyledTextH6>{props.children}</StyledTextH6>
          )}
        </>
      );
    case "p":
      return (
        <>
          {props.primary ? (
            <StyledTextP $primary>{props.children}</StyledTextP>
          ) : (
            <StyledTextP>{props.children}</StyledTextP>
          )}
        </>
      );
    case "span":
      return (
        <>
          {props.primary ? (
            <StyledTextHSpan $primary>{props.children}</StyledTextHSpan>
          ) : (
            <StyledTextHSpan>{props.children}</StyledTextHSpan>
          )}
        </>
      );
    default:
      return (
        <>
          {props.primary ? (
            <StyledTextP $primary>{props.children}</StyledTextP>
          ) : (
            <StyledTextP>{props.children}</StyledTextP>
          )}
        </>
      );
  }
};

export default Text;
