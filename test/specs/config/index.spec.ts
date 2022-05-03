import { configure } from "@config";

import fs from "fs-extra";
import path from "path";
import reporter from "@wdio/allure-reporter";

import commands from "@commands";
import { MimeType } from "@common/utils/enums";
import { AllureAdapter } from "@common/utils/AllureAdapter";
import { FilesAdapter } from "@common/utils/FilesAdapter";
const data = { any: "any", foo: "foo", bar: "bar", baz: "baz", qux: "qux" };

jest.mock("glob");
jest.mock("fs-extra", () => ({ ...jest.requireActual("fs-extra") as any, removeSync: jest.fn(), mkdirsSync: jest.fn() }));
jest.mock("path", () => ({ ...jest.requireActual("path") as any, join: jest.fn(), resolve: jest.fn().mockImplementation((...segment: string[]) => segment[1]), isAbsolute: jest.fn() }));
jest.mock("@common/utils/FilesAdapter", () => ({ FilesAdapter: { resolveGlob: jest.fn().mockImplementation((baseDir: string, fileGlob: string[]) => Array(fileGlob.length).fill(data.any + fileGlob) ) } }));
jest.mock("@common/utils/AllureAdapter", () => ({ AllureAdapter: { reporter: () => reporter, cli: jest.fn() }}));
describe("@config: configure()", () => {
  it("S01: should return the base configuration", () => {
    const pathDirnameSpy = jest.spyOn(path, "dirname");
    const pathResolveSpy = jest.spyOn(path, "resolve");
    const filesResolveGlobSpy = jest.spyOn(FilesAdapter, "resolveGlob");

    const actual = configure({ baseDir: data.any });
    expect(actual).toMatchSnapshot();
    expect(pathDirnameSpy).toHaveBeenCalledTimes(1);
    expect(pathResolveSpy).toHaveBeenCalledTimes(13);
    expect(filesResolveGlobSpy).toHaveBeenCalledTimes(5);
  });
});

describe("@config: configure().reporters", () => {
  it("S02: should have output file format for the junit reporter", () => {
    const config = configure({ baseDir: data.any });
    const [, junit] = config.reporters;
    const [, junitcf] = junit as any;

    const actual = junitcf.outputFileFormat({ cid: 1 });
    const expected ="wdio-1-junit-reporter.xml";
    expect(actual).toEqual(expected);
  });
});

describe("@config: configure().onPrepare()", () => {
  it("S01: should have an on prepare hook", async() => {
    const config = configure({ baseDir: data.any });
    const hookSpy = jest.spyOn(config.hooks, "onPrepare" as any);
    const fsRemoveSyncSpy = jest.spyOn(fs, "removeSync");
    const fsMakeDirSyncSpy = jest.spyOn(fs, "mkdirsSync");

    await (config as any).onPrepare(config, data.foo);
    expect(hookSpy).toHaveBeenCalledWith(config, data.foo);
    expect(fsRemoveSyncSpy).toHaveBeenCalledTimes(7);
    expect(fsMakeDirSyncSpy).toHaveBeenCalledTimes(3);
  });
});

describe("@config: configure().beforeSession()", () => {
  it("S01: should have a before session hook", async() => {
    const config = configure({ baseDir: data.any });
    const hookSpy = jest.spyOn(config.hooks, "beforeSession" as any);

    await (config as any).beforeSession(config, data.foo, data.bar, data.baz);
    expect(hookSpy).toHaveBeenCalledWith(config, data.foo, data.bar, data.baz);
    expect(config.cucumberOpts.tagExpression).toEqual("");
    expect(config.cucumberOpts.timeout).toEqual(config.stepTimeout);
  });

  it("S02: should adjust step timeout if in de-bug mode", async() => {
    const config = { ...configure({ baseDir: data.any }), debug: true };

    await (config as any).beforeSession(config, data.foo, data.bar, data.baz);
    expect(config.cucumberOpts.timeout).toEqual(24 * 60 * 60 * 1000);
  });
});

describe("@config: configure().before()", () => {
  it("S01: should have a before hook", async() => {
    const config = configure({ baseDir: data.any });
    const hookSpy = jest.spyOn(config.hooks, "before" as any);
    const commandsAddBrowserCommandsSpy = jest.spyOn(commands, "addBrowserCommands");
    const commandsAddElementCommandsSpy = jest.spyOn(commands, "addElementCommands");
    const browserAddCommandSpy = jest.spyOn(browser, "addCommand");

    await (config as any).before(data.foo, data.bar);
    expect(hookSpy).toHaveBeenCalledWith(data.foo, data.bar);
    expect(commandsAddBrowserCommandsSpy).toHaveBeenCalledTimes(1);
    expect(commandsAddElementCommandsSpy).toHaveBeenCalledTimes(1);
    expect(browserAddCommandSpy).toHaveBeenCalledTimes(30);
  });
});

describe("@config: configure().beforeCommand()", () => {
  it("S01: should have a beforeCommand hook", async() => {
    const config = configure({ baseDir: data.any });
    const hookSpy = jest.spyOn(config.hooks, "beforeCommand" as any);

    await (config as any).beforeCommand(data.foo, data.bar);
    expect(hookSpy).toHaveBeenCalledWith(data.foo, data.bar);
  });
});

describe("@config: configure().beforeFeature()", () => {
  it("S01: should have a before feature hook", async() => {
    const config = configure({ baseDir: data.any });
    const hookSpy = jest.spyOn(config.hooks, "beforeFeature" as any);
    const browserStoreWindowSizeSpy = jest.spyOn(browser, "storeWindowSize");

    await (config as any).beforeFeature(data.foo, data.bar);
    expect(hookSpy).toHaveBeenCalledWith(data.foo, data.bar);
    expect(browserStoreWindowSizeSpy).toHaveBeenCalledTimes(1);
  });
});

describe("@config: configure().beforeScenario()", () => {
  it("S01: should have a before scenario hook", async() => {
    const config = configure({ baseDir: data.any });
    const hookSpy = jest.spyOn(config.hooks, "beforeScenario" as any);
    const world = { pickle: { } };

    await (config as any).beforeScenario(world, data.bar);
    expect(hookSpy).toHaveBeenCalledWith(world, data.bar);
  });

  it("S02: should add epic label", async() => {
    const config = configure({ baseDir: data.any });
    const reporterAddLabelSpy = jest.spyOn(reporter, "addLabel");
    const world = { pickle: { tags: [{ name: "@RELEASE-one" }] } };

    await (config as any).beforeScenario(world, data.bar);
    expect(reporterAddLabelSpy).toHaveBeenCalledWith("epic", "RELEASE-ONE");
  });

  it("S03: should add issue", async() => {
    const config = configure({ baseDir: data.any });
    const reporterAddIssueSpy = jest.spyOn(reporter, "addIssue");
    const world = { pickle: { tags: [{ name: "@ISSUE-FOO-123" }] } };

    await (config as any).beforeScenario(world, data.bar);
    expect(reporterAddIssueSpy).toHaveBeenCalledWith("FOO-123");
  });

  it("S04: should add test id", async() => {
    const config = configure({ baseDir: data.any });
    const reporterAddTestIdSpy = jest.spyOn(reporter, "addTestId");
    const world = { pickle: { tags: [{ name: "@ID-FOO-123" }] } };

    await (config as any).beforeScenario(world, data.bar);
    expect(reporterAddTestIdSpy).toHaveBeenCalledWith("FOO-123");
  });

  it("S05: should add tag", async() => {
    const config = configure({ baseDir: data.any });
    const reporterAddLabelSpy = jest.spyOn(reporter, "addLabel");
    const world = { pickle: { tags: [{ name: "@debug" }] } };

    await (config as any).beforeScenario(world, data.bar);
    expect(reporterAddLabelSpy).toHaveBeenCalledWith("tag", "DEBUG");
  });
});

describe("@config: configure().beforeStep()", () => {
  it("S01: should have a before step hook", async() => {
    const config = configure({ baseDir: data.any });
    const hookSpy = jest.spyOn(config.hooks, "beforeStep" as any);

    await (config as any).beforeStep(data.foo, data.bar, data.baz);
    expect(hookSpy).toHaveBeenCalledWith(data.foo, data.bar, data.baz);
  });

  it("S02: should add docstring attachment", async() => {
    const config = configure({ baseDir: data.any });
    const reporterAddAttachmentSpy = jest.spyOn(reporter, "addAttachment");
    const step = { argument: { docString: { content: data.any } } };

    await (config as any).beforeStep(step, data.bar, data.baz);
    expect(reporterAddAttachmentSpy).toHaveBeenCalledWith("DocString", step.argument.docString.content, MimeType.TEXT_PLAIN);
  });
});

describe("@config: configure().afterStep()", () => {
  it("S01: should have an after step hook", async() => {
    const config = configure({ baseDir: data.any });
    const hookSpy = jest.spyOn(config.hooks, "afterStep" as any);

    await (config as any).afterStep(data.foo, data.bar, data.baz, data.qux);
    expect(hookSpy).toHaveBeenCalledWith(data.foo, data.bar, data.baz, data.qux);
  });

  it("S02: should add screenshot attachment on error", async() => {
    const config = configure({ baseDir: data.any });
    const browserTakeScreenshotSpy = jest.spyOn(browser, "takeScreenshot");
    const result = { error: data.any };

    await (config as any).afterStep(data.foo, data.bar, result);
    expect(browserTakeScreenshotSpy).toHaveBeenCalled();
  });
});

describe("@config: configure().afterScenario()", () => {
  it("S01: should have an after scenario hook", async() => {
    const config = configure({ baseDir: data.any });
    const hookSpy = jest.spyOn(config.hooks, "afterScenario" as any);
    const browserRestoreWindowSizeSpy = jest.spyOn(browser, "restoreWindowSize");
    const browserCleanSpy = jest.spyOn(browser, "clean");
    browser.config = config;

    await (config as any).afterScenario(data.foo, data.bar, data.baz);
    expect(hookSpy).toHaveBeenCalledWith(data.foo, data.bar, data.baz);
    expect(browserRestoreWindowSizeSpy).toHaveBeenCalledTimes(1);
    expect(browserCleanSpy).toHaveBeenCalledTimes(1);
    browser.config = undefined;
  });
});

describe("@config: configure().afterFeature()", () => {
  it("S01: should have an after feature hook", async() => {
    const config = configure({ baseDir: data.any });
    const hookSpy = jest.spyOn(config.hooks, "afterFeature" as any);

    await (config as any).afterFeature(data.foo, data.bar);
    expect(hookSpy).toHaveBeenCalledWith(data.foo, data.bar);
  });
});

describe("@config: configure().afterCommand()", () => {
  it("S01: should have an after command hook", async() => {
    const config = configure({ baseDir: data.any });
    const hookSpy = jest.spyOn(config.hooks, "afterCommand" as any);

    await (config as any).afterCommand(data.foo, data.bar, data.baz, data.qux);
    expect(hookSpy).toHaveBeenCalledWith(data.foo, data.bar, data.baz, data.qux);
  });
});

describe("@config: configure().after()", () => {
  it("S01: should have an after hook", async() => {
    const config = configure({ baseDir: data.any });
    const hookSpy = jest.spyOn(config.hooks, "after" as any);

    await (config as any).after(data.foo, data.bar, data.baz);
    expect(hookSpy).toHaveBeenCalledWith(data.foo, data.bar, data.baz);
  });
});

describe("@config: configure().afterSession()", () => {
  it("S01: should have an after session hook", async() => {
    const config = configure({ baseDir: data.any });
    const hookSpy = jest.spyOn(config.hooks, "afterSession" as any);

    await (config as any).afterSession(data.foo, data.bar, data.baz);
    expect(hookSpy).toHaveBeenCalledWith(data.foo, data.bar, data.baz);
  });
});

describe("@config: configure().onComplete()", () => {
  it("S01: should have an on complete hook", async() => {
    const config = configure({ baseDir: data.any });
    const hookSpy = jest.spyOn(config.hooks, "onComplete" as any);
    const pathJoinSpy = jest.spyOn(path, "join");
    const allureCliSpy = jest.spyOn(AllureAdapter, "cli");

    await (config as any).onComplete(data.foo, config, data.baz, data.qux);
    expect(hookSpy).toHaveBeenCalledWith(data.foo, config, data.baz, data.qux);
    expect(pathJoinSpy).toHaveBeenCalled();
    expect(allureCliSpy).toHaveBeenCalledWith(["-q", "generate", undefined, "-c", "-o", undefined]);
  });
});

describe("@config: configure().onReload()", () => {
  it("S01: should have an on complete hook", async() => {
    const config = configure({ baseDir: data.any });
    const hookSpy = jest.spyOn(config.hooks, "onReload" as any);

    await (config as any).onReload(data.foo, data.bar);
    expect(hookSpy).toHaveBeenCalledWith(data.foo, data.bar);
  });
});

