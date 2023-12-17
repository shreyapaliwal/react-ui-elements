import styled from "styled-components";

const Image = styled.img`
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "auto"};
  border-radius: 4px;
  margin:${(props)=>props.$margin||"0"}
`;

export default Image;
