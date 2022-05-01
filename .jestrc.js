const { pathsToModuleNameMapper: map } = require("ts-jest");
const { compilerOptions } = require("./tsconfig");

module.exports = {
  collectCoverage: true,
  collectCoverageFrom: ["<rootDir>/src/**/*.ts"],
  coverageDirectory: "<rootDir>/test/.coverage",
  coverageThreshold: {
    global: {
      branches: 50,
      functions: 50,
      lines: 50,
      statements: 50
    }
  },
  moduleNameMapper: {
    /** allows usage of tsconfig paths in spec files */
    ...map(compilerOptions.paths, { prefix: "<rootDir>/" }),
    /** see [this](https://github.com/adaltas/node-csv/issues/309#issuecomment-1005315810) for details */
    "^csv-stringify/sync": "<rootDir>/node_modules/csv-stringify/dist/cjs/sync.cjs"
  },
  modulePaths: ["node_modules", "<rootDir>/src"],
  roots: ["<rootDir>/test"],
  preset: "ts-jest",
  setupFilesAfterEnv: ["<rootDir>/test/fixtures/setup.ts"],
  /** changes default snapshot folder from `___snapshots___` to same folder as spec */
  snapshotResolver: "./.jest-snapshot-resolver.js"
};
