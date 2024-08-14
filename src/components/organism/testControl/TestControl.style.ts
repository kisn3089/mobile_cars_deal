import styled from "styled-components";

export const Absolute = styled.div`
  position: fixed;
  top: 50%;
  left: 10%;
  transform: translate3d(50%, -50%, 0);
  box-shadow: ${({ theme }) =>
    `0px 0px 10px 1px ${theme.palette.primary.brand400}`};
  border-radius: 12px;
  padding: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 12px;

  @media screen and (max-width: 900px) {
    display: none;
  }
`;

export const Circle = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 100%;
  padding: 4px;
  background-color: ${({ theme }) => theme.palette.white};
  box-shadow: ${({ theme }) =>
    `0px 0px 10px 5px ${theme.palette.primary.brand100}`};
  cursor: pointer;
`;

export const Svg = styled.img`
  width: 100%;
  height: 100%;
`;
