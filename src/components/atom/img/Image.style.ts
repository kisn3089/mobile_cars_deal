import styled from "styled-components";
import { ImageType } from "./Image.type";

export const StyleImg = styled.img<ImageType>`
  ${({ theme }) => `
        object-fit: contain;
        border: ${`1px solid ${theme.palette.primary.brand}`};
        border-radius: 10px;  
    `}
`;

export const ImgCenter = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
