import { CSSProperties } from "react";

export interface ImageType extends React.ComponentProps<"img"> {
  customStyle?: CSSProperties;
}
