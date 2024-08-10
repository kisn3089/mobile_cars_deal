import { DefaultTheme } from "styled-components";
import { toRem } from "../util/toRem";
import { skeletonEffect } from "./animation";

export type FontSizeType = typeof fontSize;
export type FontWeightType = typeof fontWeight;
export type PaletteType = typeof palette;
export type TransitionType = typeof transition;
export type TransTimeType = typeof transTime;
export type AnimationType = typeof animation;

const fontSize = {
  12: toRem(12),
  14: toRem(14),
  16: toRem(16),
  18: toRem(18),
  20: toRem(20),
  28: toRem(28),
  32: toRem(32),
};

const fontWeight = {
  400: 400,
  500: 500,
  700: 700,
};

const palette = {
  primary: {
    brand: "#0279ff", // price
    black: "#374553", // main text
  },
  gray: {
    gray100: "#f2f4f6", // label bgColor &
    gray200: "#e9ebee", // image bgColor & border
    gray300: "#646f7c", // sub text
  },
  white: "#fff",
  black: "#000",
};

const transTime = {
  short: "0.3s",
  long: "1.2s",
};

const transition = {
  smooth: "cubic-bezier(0.17, 0.67, 0.58, 0.93)",
};

const animation = {
  skeletonEffect: skeletonEffect,
};

export const theme: DefaultTheme = {
  fontSize,
  fontWeight,
  palette,
  transition,
  transTime,
  animation,
};
