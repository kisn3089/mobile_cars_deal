import styled, { css } from "styled-components";

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px 0;
`;

export const FilterList = styled.div`
  height: 36px;
  display: flex;
  gap: 0 4px;
`;

export const ItemFilter = styled.button<{ $isActive?: boolean }>`
  min-width: fit-content;
  height: 100%;
  border-radius: 20px;
  padding: 0 20px;
  font-size: ${({ theme }) => theme.fontSize[14]};
  font-weight: ${({ theme }) => theme.fontWeight[500]};
  color: ${({ theme, $isActive }) =>
    $isActive ? theme.palette.primary.brand200 : theme.palette.primary.black};
  background-color: ${({ theme }) => theme.palette.white};
  outline: ${({ theme, $isActive }) =>
    `1px solid ${
      $isActive ? theme.palette.primary.brand200 : theme.palette.gray.gray200
    }`};
  transition: ${({ theme }) =>
    `${theme.transTime.short} ${theme.transition.smooth}`};

  &:hover {
    outline: ${({ theme }) => `1px solid ${theme.palette.primary.brand200}`};
  }
`;
