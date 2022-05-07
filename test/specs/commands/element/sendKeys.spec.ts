import { sendKeys } from "@commands/element/sendKeys";

import { givenJestMocksAreReset } from "@test/fixtures/utils/steps";
const data = { any: "any" };

describe("@commands: element/sendKeys()", () => {
  afterEach(() => {
    givenJestMocksAreReset();
  });

  it("S01: should send keyboard events to an element", async() => {
    const element = givenElementMocks();
    const { focus, pause, keys } = givenElementSpies(element);

    await element.sendKeys(data.any);
    expect(focus).toHaveBeenCalledTimes(1);
    expect(pause).toHaveBeenCalledTimes(2);
    expect(keys).toHaveBeenCalledWith(data.any);
  });

  it("S02: should send keyboard chord events to an element", async() => {
    const element = givenElementMocks();
    const { focus, pause, keys } = givenElementSpies(element);

    await element.sendKeys([data.any]);
    expect(focus).toHaveBeenCalledTimes(1);
    expect(pause).toHaveBeenCalledTimes(2);
    expect(keys).toHaveBeenCalledWith([data.any]);
  });
});

function givenElementMocks() {
  const element: WebdriverIO.Element = jest.fn() as any;
  element.sendKeys = sendKeys;
  element.focus = jest.fn();
  return element as WebdriverIO.Element;
}

function givenElementSpies(element: WebdriverIO.Element) {
  const focus = jest.spyOn(element, "focus");
  const pause = jest.spyOn(browser, "pause");
  const keys = jest.spyOn(browser, "keys");

  return { focus, pause, keys };
}


