import styled from "styled-components";

const InitialWrapper = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const MainLoaderWrapper = styled.div`
  width: 30px;
  aspect-ratio: 1;
  display: grid;
  -webkit-mask: conic-gradient(from 22deg, #0003, #000);
  mask: conic-gradient(from 22deg, #0003, #000);
  animation: load 1s steps(8) infinite;

  &,
  &:before {
    --_g: linear-gradient(#ffa726 0 0) 50%; 
    background: var(--_g) / 34% 8% space no-repeat,
      var(--_g) / 8% 34% no-repeat space;
  }
  &:before {
    content: "";
    transform: rotate(45deg);
  }
  @keyframes load {
    from {
      transform: rotate(0turn);
    }
    to {
      transform: rotate(1turn);
    }
  }
`;
export default function ApiLoader() {
  return (
    <InitialWrapper>
      <MainLoaderWrapper></MainLoaderWrapper>
    </InitialWrapper>
  );
}