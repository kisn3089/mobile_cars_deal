import "styled-components";
import {
  FontSizeType,
  FontWeightType,
  PaletteType,
  TransitionType,
  TransTimeType,
  AnimationType,
  PaddingType,
  WidthType,
} from "./theme";

declare module "styled-components" {
  export interface DefaultTheme {
    fontSize: FontSizeType;
    fontWeight: FontWeightType;
    palette: PaletteType;
    transition: TransitionType;
    transTime: TransTimeType;
    animation: AnimationType;
    padding: PaddingType;
    width: WidthType;
  }
}
