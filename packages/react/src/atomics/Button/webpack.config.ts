import path from "path";
import { configuration } from "@bmg-ds/webpack/src";

const config = {
  output: {
    path: path.resolve(__dirname, "dist"),
    library: "@bmg-ds/button",
  },
};

export default () => configuration.getConfiguration(config);
