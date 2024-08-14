import { DefaultTheme } from "styled-components";
import { toRem } from "../util/toRem";
import { AppearUp, FadeIn, skeletonEffect } from "./animation";

export type FontSizeType = typeof fontSize;
export type FontWeightType = typeof fontWeight;
export type PaletteType = typeof palette;
export type TransitionType = typeof transition;
export type TransTimeType = typeof transTime;
export type AnimationType = typeof animation;
export type PaddingType = typeof padding;
export type WidthType = typeof width;

const fontSize = {
  10: toRem(10),
  12: toRem(12),
  14: toRem(14),
  16: toRem(16),
  18: toRem(18),
  20: toRem(20),
  22: toRem(22),
  24: toRem(24),
};

const fontWeight = {
  400: 400,
  500: 500,
  700: 700,
};

const padding = {
  layout: "20px",
};

const width = {
  maxWidth: "420px",
};

const palette = {
  primary: {
    brand: "#0279ff", // price
    brand100: "#e4edfb", // label bgColor
    brand200: "#00b8ff", // label bgColor
    brand300: "#28323c", // label bgColor
    black: "#374553", // main text
  },
  gray: {
    gray100: "#f2f4f6", // label bgColor &
    gray200: "#e9ebee", // image bgColor & border
    gray300: "#646f7c", // sub text
    gray400: "#edeff1", // out bgColor
  },
  white: "#fff",
  black: "#000",
};

const transTime = {
  short: "0.3s",
  medium: "0.6s",
  long: "1.2s",
};

const transition = {
  smooth: "cubic-bezier(0.17, 0.67, 0.58, 0.93)",
};

const animation = {
  skeletonEffect: skeletonEffect,
  appearUp: AppearUp,
  fadeIn: FadeIn,
};

export const theme: DefaultTheme = {
  fontSize,
  fontWeight,
  palette,
  transition,
  transTime,
  animation,
  padding,
  width,
};
