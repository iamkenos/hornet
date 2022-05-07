import { uploadFile } from "@commands/element/uploadFile";

import path from "path";

import { givenJestMocksAreReset } from "@test/fixtures/utils/steps";
const data = { any: "any", foo: "foo" };

describe("@commands: element/uploadFile()", () => {
  beforeEach(() => {
    givenBrowserConfigIsDefined();
  });

  afterEach(() => {
    givenBrowserConfigIsUndefined();
    givenJestMocksAreReset();
  });

  it("S01: should upload a file to an element", async() => {
    const element = givenElementMocks();
    const { setValue } = givenElementSpies(element);

    await element.uploadFile(data.foo);
    expect(setValue).toHaveBeenCalledWith(path.join(data.any, data.foo));
  });

});

function givenElementMocks() {
  const element: WebdriverIO.Element = jest.fn() as any;
  element.uploadFile = uploadFile;
  element.setValue = jest.fn();
  return element as WebdriverIO.Element;
}

function givenElementSpies(element: WebdriverIO.Element) {
  const setValue = jest.spyOn(element, "setValue");

  return { setValue };
}

function givenBrowserConfigIsDefined() {
  browser.config.baseDir = data.any;
}

function givenBrowserConfigIsUndefined() {
  browser.config = undefined;
}


