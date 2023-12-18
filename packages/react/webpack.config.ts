import path from "path";
import { configuration } from "@bmg-ds/webpack/src";

const baseConfig = {
  output: {
    path: path.resolve(__dirname, "dist"),
    library: "@bmg-ds/components",
  },
};

const config = configuration.getConfiguration(baseConfig);
delete config.externals;
config.externals = configuration.externalLibs;

export default () => config;
