import styled from "styled-components";

export const Absolute = styled.div`
  position: fixed;
  top: 50%;
  left: 3%;
  transform: translate3d(25%, -50%, 0);
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

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  gap: 8px;
`;

export const ControlContent = styled.p`
  font-size: ${({ theme }) => theme.fontSize[14]};
  font-weight: ${({ theme }) => theme.fontWeight[500]};
`;

export const Circle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  /* border-radius: 100%; */
  border-radius: 8px;
  padding: 0px 12px;
  background-color: ${({ theme }) => theme.palette.white};
  box-shadow: ${({ theme }) =>
    `0px 0px 10px 5px ${theme.palette.primary.brand100}`};
  cursor: pointer;
`;

export const Svg = styled.img`
  width: 24px;
  height: 24px;
`;
