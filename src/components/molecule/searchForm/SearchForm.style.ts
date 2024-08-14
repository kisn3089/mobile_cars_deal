import styled from "styled-components";

export const Relative = styled.div`
  position: relative;
`;

export const InputSearch = styled.input`
  width: 100%;
  height: 44px;
  margin-top: 4px;
  border-radius: 20px;
  border: none;
  padding: 0 20px;
  font-size: ${({ theme }) => theme.fontSize[14]};
  font-weight: ${({ theme }) => theme.fontWeight[700]};
  color: ${({ theme }) => theme.palette.primary.black};

  &:focus {
    outline: ${({ theme }) => `1px solid ${theme.palette.primary.brand200}`};
  }
`;

export const SvgSearch = styled.img`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translate3d(-50%, -50%, 0);
  object-fit: contain;
  width: 24px;
  height: 24px;
  cursor: pointer;
`;
