import type { StorybookConfig } from "@storybook/react-webpack5";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { VanillaExtractPlugin } from "@vanilla-extract/webpack-plugin";

import { convertTsConfigPathsToWebpackAliases } from "./utils";

const config: StorybookConfig = {
  stories: ["../packages/react/*/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {
      builder: {
        useSWC: true,
      },
    },
  },
  docs: {
    autodocs: "tag",
  },
  webpackFinal(config) {
    config.plugins?.push(
      new VanillaExtractPlugin(),
      new MiniCssExtractPlugin(),
    );
    config.resolve = {
      ...config.resolve,
      alias: {
        ...config.resolve?.alias,
        ...convertTsConfigPathsToWebpackAliases(),
      },
    };
    return config;
  },
};

export default config;
