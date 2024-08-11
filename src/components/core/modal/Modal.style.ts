import styled from "styled-components";

export const Center = styled.div`
  position: fixed;
  min-width: 100vw;
  min-height: 100vh;
  top: 0;
  left: 0;
  z-index: 19;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Dim = styled.section`
  width: ${({ theme }) => theme.width.maxWidth};
  min-height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
`;
