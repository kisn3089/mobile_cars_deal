import { CSSProperties } from "react";

export type ImgSizeType = "small" | "medium" | "large";
export interface ImageType extends React.ComponentProps<"img"> {
  customStyle?: CSSProperties;
}
