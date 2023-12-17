import styled from "styled-components";
import { colorsObject } from "../../../utils/constants";

const ParagraphContainer = styled.p`
  font-weight: ${(props) => props.fontWeight || 400};
  font-family: ${(props) =>
    props.fontWeight ? "Proxima-Nova-Bold" : "Proxima-Nova-Regular"};
  font-size: ${(props) =>
    props.fontSize || props.size === "small" ? "14px" : "14px"};
  line-height: ${(props) => (props.size === "small" ? "18px" : "20px")};
  color: ${(props) => props.color || colorsObject.secondary};
  letter-spacing: 0.004em;
  margin: ${(props) => props.$margin || "0"};
  padding: ${(props) => props.$padding || "0"};
  width: ${(props) => props.width || "100%"};
  text-align: ${(props) => props.$align || "left"};
`;

export default function Paragraph({
  $margin,
  width,
  children,
  size,
  $align,
  $padding,
  fontWeight
}) {
  return (
    <ParagraphContainer
      size={size}
      $margin={$margin}
      $align={$align}
      width={width}
      $padding={$padding}
      fontWeight={fontWeight}
    >
      {children}
    </ParagraphContainer>
  );
}
