import styled from "styled-components";
import { ImageType } from "./Image.type";

export const StyleImg = styled.img<ImageType>`
  ${({ theme }) => `
        object-fit: contain;
        border-radius: 10px;
        background-color: ${theme.palette.gray.gray200};
        padding: 8px;
    `}
`;
