import { WebElement } from "@generics/WebElement";

import { ElementConditions } from "@conditions/element";
import { givenJestMocksAreReset, givenMock } from "@test/fixtures/utils/steps";
const data = { any: "any", selector: "foo" };

describe("@generics: WebElement constructor", () => {
  afterEach(() => {
    givenJestMocksAreReset();
  });

  it("S01: should set selector and parent upon instantiation", () => {
    const webelement = new WebElement(data.selector);

    const actual = webelement.selector;
    const expected = data.selector;
    expect(actual).toEqual(expected);
  });
});

describe("@generics: WebElement.$()", () => {
  afterEach(() => {
    givenJestMocksAreReset();
  });

  it("S01: should return the element instance", async() => {
    const $Mock = givenMock($);
    const webelement = new WebElement(data.selector);

    $Mock.mockReturnValue(data.any);
    const actual = await webelement.$();
    const expected = data.any;
    expect($Mock).toHaveBeenCalledWith(data.selector);
    expect(actual).toEqual(expected);
  });

  it("S02: should return the indexed element instance", async() => {
    const $$Mock = givenMock($$);
    const webelement = new WebElement(data.selector);

    $$Mock.mockReturnValue([undefined, data.any]);
    const actual = await webelement.$(1);
    const expected = data.any;
    expect(actual).toEqual(expected);
    expect($$Mock).toHaveBeenCalledWith(data.selector);
  });
});

describe("@generics: WebElement.$$()", () => {
  afterEach(() => {
    givenJestMocksAreReset();
  });

  it("S01: should return the elements instance", async() => {
    const $$Mock = givenMock($$);
    const webelement = new WebElement(data.selector);

    $$Mock.mockReturnValue([undefined, data.any]);
    const actual = await webelement.$$();
    const expected = [undefined, data.any];
    expect(actual).toEqual(expected);
    expect($$Mock).toHaveBeenCalledWith(data.selector);
  });
});

describe("@generics: WebElement.byAbsoluteXPath()", () => {
  afterEach(() => {
    givenJestMocksAreReset();
  });

  it("S01: should return a new element instance with the selector set as the absolute xpath", async() => {
    const $Mock = givenMock($);
    const browserExecuteMock = givenMock(browser.execute);
    const webelement = new WebElement(data.selector);

    $Mock.mockReturnValue(data.any);
    browserExecuteMock.mockReturnValue(data.any);
    const actual = await webelement.byAbsoluteXPath();
    const expected = new WebElement(data.any);
    expect(actual).toEqual(expected);
  });
});

describe("@generics: WebElement.conditions()", () => {
  afterEach(() => {
    givenJestMocksAreReset();
  });

  it("S01: should return a new element conditions instance", async() => {
    const $Mock = givenMock($);
    const webelement = new WebElement(data.selector);

    $Mock.mockReturnValue(data.any);
    const actual = await webelement.conditions();
    const expected = new ElementConditions(data.any as any);
    expect(actual).toEqual(expected);
  });
});

describe("@generics: WebElement.toTextArray()", () => {
  afterEach(() => {
    givenJestMocksAreReset();
  });

  it("S01: should return the text of all element instances as an array", async() => {
    const $$Mock = givenMock($$);
    const webelement = new WebElement(data.selector);

    $$Mock.mockReturnValue(Array(2).fill({ getText: () => data.any }));
    const actual = await webelement.toTextArray();
    const expected = Array(2).fill(data.any);
    expect(actual).toEqual(expected);
    expect($$Mock).toHaveBeenCalledWith(data.selector);
  });
});
