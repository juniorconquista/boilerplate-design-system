import path from "path";

export const argTypesConvert = (properties: any) =>
  Object.keys(properties).reduce(
    (
      prev: { [key: string]: { control: string; options: string[] } },
      curr: string,
    ) => {
      let options: string[] = [];
      if (Array.isArray(properties[curr])) {
        options = properties[curr];
      } else if (typeof properties[curr] === "object") {
        options = Object.keys(properties[curr]);
      }
      prev[curr] = {
        control: options?.length > 6 ? "select" : "radio",
        options,
      };
      return prev;
    },
    {},
  );

export const convertTsConfigPathsToWebpackAliases = () => {
  const rootDir = path.resolve(__dirname, "../");
  const tsconfig = require("../tsconfig.json");
  const tsconfigPaths = Object.entries(tsconfig.compilerOptions.paths);

  const paths = tsconfigPaths.reduce(
    (aliases: any, [realPath, mappedPath]: any) => {
      const packageName = mappedPath[0].split("/")[5];
      const alias = `${mappedPath[0]}/${packageName}.tsx`;
      aliases[realPath] = path.join(rootDir, alias);
      return aliases;
    },
    {},
  );

  paths["@bmg-ds/tokens"] = path.join(rootDir, "packages/tokens");
  paths["@bmg-ds/icons"] = path.join(rootDir, "packages/icons");
  paths["@bmg-ds/styles"] = path.join(rootDir, "packages/styles/src/index.ts");
  paths["@bmg-ds/webpack"] = path.join(
    rootDir,
    "packages/core/webpack/src/index.ts",
  );
  paths["@bmg-ds/typings"] = path.join(
    rootDir,
    "packages/core/typings/src/index.ts",
  );
  paths[".storybook"] = path.join(rootDir, ".storybook");
  return paths;
};
