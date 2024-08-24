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

export const Dim = styled.div`
  width: ${({ theme }) => theme.width.maxWidth};
  height: 400px;
  background-color: rgba(0, 0, 0, 0.7);
`;
