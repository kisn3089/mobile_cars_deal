import styled from "styled-components";

export const NotFoundLayout = styled.section`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 48px;
`;

export const NotFoundMessage = styled.h1`
  font-size: ${({ theme }) => theme.fontSize[24]};
  font-weight: ${({ theme }) => theme.fontWeight[700]};
`;

export const BackMain = styled.button`
  padding: 10px 34px;
  color: ${({ theme }) => theme.palette.primary.brand100};
  background-color: ${({ theme }) => theme.palette.primary.brand300};
  border-radius: 8px;
  font-size: ${({ theme }) => theme.fontSize[14]};
  font-weight: ${({ theme }) => theme.fontWeight[700]};
  transition: ${({ theme }) => theme.transTime.short};

  &:hover {
    color: ${({ theme }) => theme.palette.primary.brand200};
    background-color: ${({ theme }) => theme.palette.black};
  }
`;
