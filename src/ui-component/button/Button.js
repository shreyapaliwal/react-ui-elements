import styled, { css } from "styled-components";

import { colorsObject } from "../../../utils/constants";

const Button = styled.button`
  background-color: ${(props) =>
    props.$variant === "primary" ? colorsObject.primary : "#EEEEEE"};
  border: none;
  border-radius: 8px;
  outline: none;
  min-width: 148px;
  color: ${colorsObject.secondary};
  padding: ${(props) => props.padding || "8px 40px"};
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-family: ${(props) =>
    props.boldFont ? "Roboto-Bold" : "Roboto-Regular"};
  font-size: 16px;
  margin: ${(props) =>
    props.margin || "4px 2px"};
  cursor: pointer;
  font-size: 16px;
  line-height: 14px;
  font-style: normal;
  font-weight: 700;
  height: ${(props) => (props.size === "small" ? "40px" : "48px")};

  ${(props) =>
    props.$fullWidth &&
    css`
      width: 100%;
    `}

  &:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  }
`;

export default Button;
