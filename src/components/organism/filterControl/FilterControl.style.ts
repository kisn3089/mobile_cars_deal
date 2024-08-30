import styled from "styled-components";

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px 0;
  padding: 0 8px;
`;

export const FilterList = styled.div`
  height: 36px;
  display: flex;
  gap: 0 4px;
`;

export const ItemFilter = styled.button<{ $isActive?: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: fit-content;
  height: 100%;
  border-radius: 20px;
  padding: 10px 20px;
  font-size: ${({ theme }) => theme.fontSize[12]};
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
