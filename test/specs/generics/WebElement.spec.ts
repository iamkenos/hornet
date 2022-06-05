import { WebElement } from "@generics/WebElement";

import { ElementConditions } from "@conditions/element";
import { NavigationBar } from "@test/fixtures/components/navigation-bar.component";
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

describe("@generics: WebElement.getByIndexedXPath()", () => {
  afterEach(() => {
    givenJestMocksAreReset();
  });

  it("S01: should return a new element instance with the selector set as the element's indexed xpath", async() => {
    const webelement = new WebElement(data.selector);

    const actual = await webelement.getByIndexedXPath(2);
    expect(actual).toMatchSnapshot();
  });

  it("S02: should return a new element instance of the given type with the selector set as the element's indexed xpath", async() => {
    const webelement = new NavigationBar();

    const actual = await webelement.getByIndexedXPath(2, NavigationBar);
    expect(actual).toMatchSnapshot();
  });

  it("S03: should return a new element instance of the given type with the selector set as the element's indexed xpath, having a parent", async() => {
    const webelement = new NavigationBar(data.selector);

    const actual = await webelement.getByIndexedXPath(2, NavigationBar);
    expect(actual).toMatchSnapshot();
  });
});

describe("@generics: WebElement.getByAbsoluteXPathAll()", () => {
  afterEach(() => {
    givenJestMocksAreReset();
  });

  it("S01: should return an array of new webelement instance instance with the selectors set as the absolute xpath", async() => {
    const $$Mock = givenMock($$);
    const browserExecuteMock = givenMock(browser.execute);
    const webelement = new WebElement(data.selector);

    $$Mock.mockReturnValue([data.any, data.selector]);
    browserExecuteMock.mockReturnValueOnce(data.selector);
    browserExecuteMock.mockReturnValueOnce(data.any);
    const actual = await webelement.getByAbsoluteXPathAll();
    expect(actual).toMatchSnapshot();
    expect(browserExecuteMock).toHaveBeenCalledTimes(2);
  });
});

describe("@generics: WebElement.getByAbsoluteXPath()", () => {
  afterEach(() => {
    givenJestMocksAreReset();
  });

  it("S01: should return a new element instance with the selector set as the absolute xpath", async() => {
    const $$Mock = givenMock($$);
    const browserExecuteMock = givenMock(browser.execute);
    const webelement = new WebElement(data.selector);

    $$Mock.mockReturnValue([data.any, data.selector]);
    browserExecuteMock.mockReturnValueOnce(data.selector);
    browserExecuteMock.mockReturnValueOnce(data.any);
    const actual = await webelement.getByAbsoluteXPath();
    const expected = new WebElement(data.selector);
    expect(actual).toEqual(expected);
  });

  it("S02: should return a new element instance with the selector set as the absolute xpath while providing an index", async() => {
    const $$Mock = givenMock($$);
    const browserExecuteMock = givenMock(browser.execute);
    const webelement = new WebElement(data.selector);

    $$Mock.mockReturnValue([data.any, data.selector]);
    browserExecuteMock.mockReturnValueOnce(data.selector);
    browserExecuteMock.mockReturnValueOnce(data.any);
    const actual = await webelement.getByAbsoluteXPath(1);
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

