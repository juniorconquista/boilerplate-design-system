/**
 * Created by: Júnior Conquista (junior@rarolabs.com.br)
 * @see https://webpack.js.org/configuration/externals/
 */
export const externalLibs = {
  react: "react",
  "react-dom": "react-dom",
};

export const externalPackages = {
  "@bmg-ds/styles": "@bmg-ds/styles",
  "@bmg-ds/icons": "@bmg-ds/icons",
  "@bmg-ds/tokens": "@bmg-ds/tokens",
};

export const externalItems = { ...externalLibs, ...externalPackages };
