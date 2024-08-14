import styled from "styled-components";

export const DeadSpace = styled.div`
  width: 100%;
  height: 220px;
  background-color: ${({ theme }) => theme.palette.gray.gray200};
`;

export const SquareSkeleton = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  min-height: 100px;
  padding: 12px;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.palette.white};
  box-shadow: ${({ theme }) =>
    `0px 0px 10px 5px ${theme.palette.gray.gray100}`};
`;

export const NameSpace = styled.p`
  width: 90px;
  height: 22px;
`;
