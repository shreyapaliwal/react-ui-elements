import styled from "styled-components";
import { colorsObject } from "../../../utils/constants";

const FlexDiv = styled.div`
  display: flex;
  flex-direction: ${(props) => props.$flexDirection || "row"};
  justify-content: ${(props) => props.justifyContent || "flex-start"};
  align-items: ${(props) => props.$alignItems || "stretch"};
  padding: ${(props) => props.$padding || "0px"};
  margin: ${(props) => props.$margin || 0}px;
  background-color: ${(props) =>
    props.$backgroundColor || "none"};
  border-radius: ${(props) => props.borderRadius || 0};
  height: ${(props) => props.displayHeight || "auto"};
  position: ${(props) => (props.divPosition ? props.divPosition : "")};
  box-shadow: ${(props) => props.boxShadow || "none"};
`;

export default FlexDiv;
