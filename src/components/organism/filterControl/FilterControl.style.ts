import styled from "styled-components";

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px 0;
`;

export const FilterList = styled.div`
  display: flex;
  height: 40px;
`;

export const ItemFilter = styled.button`
  width: fit-content;
  height: 100%;
  border-radius: 20px;
  padding: 0 20px;
  background-color: ${({ theme }) => theme.palette.white};
  border: ${({ theme }) => `1px solid ${theme.palette.gray.gray200}`};
`;
