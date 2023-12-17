import styled from "styled-components";
import { colorsObject } from "../../utils/constants";

const CardContainer = styled.div`
  // min-width: 320px;
  background: ${(props) =>
    props.$backgroundColor ? colorsObject.light : "none"};
  box-shadow: ${(props) =>
    props.$boxShadow
      ? "-30px -30px 130px rgba(228, 230, 241, 0.5), 12px 12px 20px rgba(162, 181, 189, 0.08)"
      : "none"};
  border-radius: ${(props) => (props.$backgroundColor ? "8px" : "0")};
  overflow: hidden;
  padding: ${(props) => (props.$backgroundColor ? "1rem" : "1rem 1.25rem")};
  margin: ${(props) => (props.$backgroundColor ? "1rem 1.25rem" : 0)};
  position: relative;
  background-image: ${(props) =>
    props.backgroundBg ? `url(${props.backgroundBg})` : "none"};
  background-repeat: ${(props) => (props.backgroundBg ? "no-repeat" : "none")};
  background-position-y: ${(props) => (props.backgroundBg ? "10%" : "0")};
  background-position-x: ${(props) => (props.backgroundBg ? "95%" : "0")};
`;

const CardHeader = styled.h3`
  margin: 0;
  padding: ${(props) => (props.$backgroundColor ? "0 0 1rem" : "0")};
  font-family: "Proxima-Nova-Bold";
  font-weight: 700;
  font-size: 16px;
  line-height: 18px;
  color: ${colorsObject.secondary};
  border-bottom: ${(props) => (props.$backgroundColor ? "1px solid #eee" : "0")};
`;

const CardContent = styled.div``;
/**
 * Renders a card component with a title and children.
 * @param {string} title - The title of the card. Optional.
 * @param {ReactNode} children - The content of the card.
 * @returns {JSX.Element} - The card component.
 */
export default function Card({
  title,
  children,
  $backgroundColor,
  backgroundBg,
  $boxShadow,
}) {
  // If no title is provided, use a default value.
  const cardHeader = title;
  return (
    <CardContainer
      $backgroundColor={$backgroundColor}
      backgroundBg={backgroundBg}
      $boxShadow={$boxShadow}
    >
      <CardHeader $backgroundColor={$backgroundColor}>{cardHeader}</CardHeader>
      <CardContent>{children}</CardContent>
    </CardContainer>
  );
}
