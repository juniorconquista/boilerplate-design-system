import type { Config } from "@jest/types";

const config: Config.InitialOptions = {
  setupFilesAfterEnv: ["./jest.setup.ts"],
  testEnvironment: "jsdom",
  verbose: true,
  moduleNameMapper: {
    // core
    "@bmg-ds/typings": "<rootDir>/packages/core/typings/src",
    // commons
    "@bmg-ds/styles": "<rootDir>/packages/styles/src",
    // atomics
    "@bmg-ds/button": "<rootDir>/packages/react/src/atomics/Button/src",
    "@bmg-ds/skeleton": "<rootDir>/packages/react/src/atomics/Skeleton/src",
    // composites
  },
  transform: {
    "^.+\\.css\\.ts$": "babel-jest",
    ".+\\.(ts|tsx)$": "ts-jest",
  },
  coveragePathIgnorePatterns: [
    "dist",
    ".scripts",
    "packages/core/typings",
  ],
};
export default config;
