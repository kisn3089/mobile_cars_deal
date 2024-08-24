import { DefaultTheme } from "styled-components";
import { toRem } from "../util/toRem";

export type FontSizeType = typeof fontSize;
export type FontWeightType = typeof fontWeight;
export type PaletteType = typeof palette;

const fontSize = {
  14: toRem(14),
  18: toRem(18),
  32: toRem(32),
};

const fontWeight = {
  400: 400,
  700: 700,
};

const palette = {
  primary: {
    brand: "#0279ff", // price
    black: "#374553", // main text
  },
  gray: {
    gray100: "#e9ebee", // image bgColor & border
    gray200: "#646f7c", // sub text
    gray300: "#f2f4f6", // label bgColor &
  },
  white: "#fff",
  black: "#000",
};

export const theme: DefaultTheme = {
  fontSize,
  fontWeight,
  palette,
};
