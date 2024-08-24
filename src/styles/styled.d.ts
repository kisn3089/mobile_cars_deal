import "styled-components";
import { FontSizeType, FontWeightType, PaletteType } from "./theme";

declare module "styled-components" {
  export interface DefaultTheme {
    fontSize: FontSizeType;
    fontWeight: FontWeightType;
    palette: PaletteType;
  }
}
