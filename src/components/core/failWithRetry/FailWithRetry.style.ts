import styled from "styled-components";

export const Ment = styled.h1`
  font-size: ${({ theme }) => theme.fontSize[24]};
  font-weight: ${({ theme }) => theme.fontWeight[700]};
  text-align: center;
  white-space: pre-line;
  line-height: 150%;
`;

export const RetrySvg = styled.img`
  cursor: pointer;
  object-fit: contain;
`;

export const NoCar = styled.img`
  cursor: pointer;
  object-fit: contain;
  height: 100px;
`;
