import styled from "styled-components";

export const Padding = styled.div`
  padding: ${({ theme }) => `0 ${theme.padding.layout}`};
`;

export const Layout = styled.div`
  min-height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  background-color: ${({ theme }) => theme.palette.white};
  border-radius: 12px;
`;

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
