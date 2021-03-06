import { FilesAdapter } from "@common/utils/FilesAdapter";

import path from "path";
import glob from "glob";
import { givenJestMocksAreReset, givenMock } from "@test/fixtures/utils/steps";

jest.mock("glob", () => ({ ...jest.requireActual("glob") as any, sync: jest.fn() }));
jest.mock("path", () => ({ ...jest.requireActual("path") as any, resolve: jest.fn(), isAbsolute: jest.fn() }));
describe("@common: utils/FilesAdapter.resolveGlob()", () => {
  afterEach(() => {
    givenJestMocksAreReset();
  });

  it("S01: should return an array of resolved globs", () => {
    const pathResolveMock = givenMock(path.resolve);
    const globSyncMock = givenMock(glob.sync);
    const globData = ["../../../fixtures/utils/steps.ts"];
    const resolved = jest.requireActual("path").resolve(__dirname, globData[0]);

    pathResolveMock.mockReturnValue(resolved);
    globSyncMock.mockReturnValue([resolved]);
    const actual = FilesAdapter.resolveGlob(__dirname, globData);
    const expected = resolved;
    expect(actual.length).toEqual(1);
    expect(actual[0]).toEqual(expected);
  });

  it("S02: should return an empty array if glob doesn't resolve to a single match", () => {
    const pathResolveMock = givenMock(path.resolve);
    const globSyncMock = givenMock(glob.sync);
    const globData = ["fixtures/**/steps.ts"];

    pathResolveMock.mockReturnValue(globData[0]);
    globSyncMock.mockReturnValue([]);
    const actual = FilesAdapter.resolveGlob(__dirname, globData);
    const expected = [];
    expect(actual).toEqual(expected);
  });

  it("S03: should throw an error if glob doesn't resolve to a single match and called in strict mode", () => {
    const pathIsAbsoluteMock = givenMock(path.isAbsolute);
    const globSyncMock = givenMock(glob.sync);
    const globData = ["fixtures/**/steps.ts"];
    let error: Error;

    try {
      pathIsAbsoluteMock.mockReturnValue(true);
      globSyncMock.mockReturnValue([]);
      FilesAdapter.resolveGlob(__dirname, globData, true);
    } catch (e) {
      error = e;
    } finally {
      expect(error).toBeDefined();
      expect(error.message).toEqual("Unable to resolve any existing file from the given paths. See warnings.");
    }
  });
});
