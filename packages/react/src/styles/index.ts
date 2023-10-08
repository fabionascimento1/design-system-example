import { createStitches, defaultThemeMap } from "@stitches/react";
import {
  colors,
  fontSizes,
  fontWeights,
  fonts,
  lineHeights,
  radii,
  space,
} from "@arenapro/tokens";

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  themeMap: {
    ...defaultThemeMap,
    height: "space",
    width: "space",
  },
  theme: {
    colors,
    fontSizes,
    fontWeights,
    lineHeights,
    fonts,
    radii,
    space,
  },
});
