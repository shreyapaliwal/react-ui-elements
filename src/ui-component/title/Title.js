import styled from "styled-components";

import { colorsObject } from "../../../utils/constants";

const Title = styled.h1`
  font-size: ${(props) => {
    switch (props.$variant) {
      case "small":
        return "14px";
      case "medium":
        return "16px";
      case "large":
        return "18px";
      default:
        return "20px";
    }
  }};
  margin: ${(props) => props.$margin || 0};
  padding: ${(props) => props.$padding || 0};
  font-style: normal;
  font-family:  ${(props) =>
    props.fontFamily || "Roboto-Bold"};
  font-weight: ${(props)=>props.fontWeight||700};
  line-height: ${(props) => {
    switch (props.$variant) {
      case "small":
        return "18px";
      case "medium":
        return "20px";
      case "large":
        return "22px";
      default:
        return "24px";
    }
  }};
  color: ${(props)=>props.color||colorsObject.secondary};
  justify-content: ${(props) => props.$justifyContent || "flex-start"};
  background-color: ${(props) => props.$background || "none"};
  text-align: ${(props) => props.$textAlign || "none"};
  height: ${(props) => props.$displayHeight || "auto"};
  // overflow-y: ${(props) => (props.$displayHeight ? "scroll" : "hidden")};
  width: ${(props) => props.$displayWidth || "auto"};
`;

export default Title;
