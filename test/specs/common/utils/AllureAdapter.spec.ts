import { AllureAdapter } from "@common/utils/AllureAdapter";

import reporter from "@wdio/allure-reporter";
import cli from "allure-commandline";
import fs from "fs-extra";
import path from "path";

import * as string from "@common/utils/string";
import { BufferEncoding, MimeType } from "@common/utils/enums";

import { givenJestMocksAreReset, givenMock } from "@test/fixtures/utils/steps";
const data = { title: "foo" };

jest.mock("@wdio/allure-reporter");
jest.mock("allure-commandline");
describe("@common: utils/AllureAdapter.cli()", () => {
  afterEach(() => {
    givenJestMocksAreReset();
  });

  it("S01: should invoke the command line interface", async() => {
    const cliMock = givenMock(cli);
    const args = ["-q", "generate", __dirname, "-c", "-o", __dirname];

    await AllureAdapter.cli(args);
    expect(cliMock).toHaveBeenCalledWith(args);
  });
});

describe("@common: utils/AllureAdapter.reporter()", () => {
  afterEach(() => {
    givenJestMocksAreReset();
  });

  it("S01: should return the wdio reporter instance", () => {
    const reporterMock = givenMock(reporter);

    const actual = AllureAdapter.reporter();
    const expected = reporterMock;
    expect(actual).toEqual(expected);
  });
});

describe("@common: utils/AllureAdapter.attachFile()", () => {
  afterEach(() => {
    givenJestMocksAreReset();
  });

  it("S01: should add attachment to the allure report", () => {
    const reporterAddAttachmentMock = givenMock(reporter.addAttachment);
    const filename = "bar";
    const attachment = { baz: "quz" };
    const mimetype = MimeType.APP_JSON;

    AllureAdapter.attachFile(data.title, filename, attachment, mimetype);
    expect(reporterAddAttachmentMock).toHaveBeenCalledWith(`${data.title}: ${filename}`, attachment, mimetype);
  });
});

describe("@common: utils/AllureAdapter.attachImage()", () => {
  afterEach(() => {
    givenJestMocksAreReset();
  });

  it("S01: should add image attachment to the allure report", () => {
    const filename = path.resolve(__dirname, "../../../fixtures/files/png.png");
    const content = Buffer.from(fs.readFileSync(filename) as any, BufferEncoding.BASE64);

    AllureAdapter.attachFile = jest.fn();
    AllureAdapter.attachImage(data.title, filename);
    expect(AllureAdapter.attachFile).toHaveBeenCalledWith(data.title, filename, content, MimeType.IMG_PNG);
  });

  it("S02: should not add image attachment to the allure report if the file is non-existing", () => {
    const filename = path.resolve(__dirname, "../../../fixtures/files/foo.png");

    AllureAdapter.attachFile = jest.fn();
    AllureAdapter.attachImage(data.title, filename);
    expect(AllureAdapter.attachFile).not.toHaveBeenCalled();
  });
});

describe("@common: utils/AllureAdapter.attachJSON()", () => {
  afterEach(() => {
    givenJestMocksAreReset();
  });

  it("S01: should add json attachment to the allure report", () => {
    const filename = path.resolve(__dirname, "../../../fixtures/files/json.json");
    const content = fs.readFileSync(filename, BufferEncoding.UTF8);

    AllureAdapter.attachFile = jest.fn();
    AllureAdapter.attachJSON(data.title, filename);
    expect(AllureAdapter.attachFile).toHaveBeenCalledWith(data.title, filename, JSON.parse(content), MimeType.APP_JSON);
  });

  it("S02: should add json attachment to the allure report: object", () => {
    const stringIsJSONMock = givenMock(string.isJSON, true);
    const filename = path.resolve(__dirname, "../../../fixtures/files/json.json");
    const content = fs.readFileSync(filename, BufferEncoding.UTF8);

    // @ts-ignore
    string.isJSON = jest.fn();
    stringIsJSONMock.mockReturnValue(true);
    AllureAdapter.attachFile = jest.fn();
    AllureAdapter.attachJSON(data.title, filename);
    expect(AllureAdapter.attachFile).toHaveBeenCalledWith(data.title, filename, content, MimeType.APP_JSON);
  });

  it("S03: should not add json attachment to the allure report if the file is non-existing", () => {
    const filename = path.resolve(__dirname, "../../../fixtures/files/foo.json");

    AllureAdapter.attachFile = jest.fn();
    AllureAdapter.attachJSON(data.title, filename);
    expect(AllureAdapter.attachFile).not.toHaveBeenCalled();
  });
});
