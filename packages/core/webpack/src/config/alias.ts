/**
 * Created by: Júnior Conquista (junior@rarolabs.com.br)
 * @see https://webpack.js.org/configuration/dev-server/
 */
import dashify from "dashify";
import glob from "glob";
import { join } from "path";
import { rootDir } from "../utils/constants";

const paths = glob.sync(`${join(rootDir, "./packages/react/src/*/*/src")}`);

const packages = paths.reduce((prev: { [key: string]: string }, curr) => {
  const key = `@bmg-ds/${dashify(curr.split("/")[10])}`;
  prev[key] = curr;
  return prev;
}, {});

export const aliasItems = {
  "@bmg-ds/tokens": join(rootDir, "./packages/tokens"),
  "@bmg-ds/styles": join(rootDir, "./packages/styles/src"),
  "@bmg-ds/webpack": join(rootDir, "./packages/core/webpack/src"),
  ...packages,
};
