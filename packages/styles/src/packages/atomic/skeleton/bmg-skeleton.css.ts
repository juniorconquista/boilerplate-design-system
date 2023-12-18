import { style, keyframes } from "@vanilla-extract/css";
import {
  createRainbowSprinkles,
  defineProperties as defineRainbowProperties,
} from "rainbow-sprinkles";

import { mediaQueries, varsThemeBase } from "../../../themes";
import { borderRadiusProperties } from "../../../properties";

/* -------------------------------------------------------------------------------------------------
 * Style
 * -----------------------------------------------------------------------------------------------*/

const skeletonAnimation = keyframes({
  "0%": {
    left: 0,
    opacity: 0,
    right: "initial",
    width: "0%",
  },
  "40%": {
    left: 0,
    opacity: 0.5,
    right: "initial",
    width: "100%",
  },
  "50%": {
    left: "initial",
    right: 0,
    width: "100%",
  },
  "90%": {
    left: "initial",
    opacity: 0,
    right: 0,
    width: "0%",
  },
  "100%": {
    left: 0,
    right: "initial",
  },
});

const base = style({
  backgroundColor: varsThemeBase.colors.neutral.surfaceHighlight,
  position: "relative",
  overflow: "hidden",
  ":before": {
    content: "",
    position: "absolute",
    height: "100%",
    left: "0",
    top: "0",
    width: "0%",
    backgroundColor: varsThemeBase.colors.neutral.surface,
    animationName: skeletonAnimation,
    animationDuration: "3000ms",
    animationIterationCount: "infinite",
    animationTimingFunction: "ease",
  },
});

export const styles = {
  base,
};

/* -------------------------------------------------------------------------------------------------
 * Sprinkle
 * -----------------------------------------------------------------------------------------------*/

const skeletonBorderRadiusProperties = {
  none: "0",
  ...borderRadiusProperties,
};

const properties = {
  borderRadius: skeletonBorderRadiusProperties,
};

const defineProperties = defineRainbowProperties({
  conditions: {
    xs: {
      "@media": mediaQueries.xs(),
    },
    md: {
      "@media": mediaQueries.md(),
    },
    lg: {
      "@media": mediaQueries.lg(),
    },
    xl: {
      "@media": mediaQueries.xl(),
    },
  },
  defaultCondition: "xs",
  dynamicProperties: {
    width: true,
    height: true,
    borderRadius: skeletonBorderRadiusProperties,
  },
});

const sprinkle = createRainbowSprinkles(defineProperties);

export const skeletonSprinkle = {
  sprinkle,
  properties,
};
