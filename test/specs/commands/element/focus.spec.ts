import { focus } from "@commands/element/focus";

import { givenJestMocksAreReset } from "@test/fixtures/utils/steps";

describe("@commands: element/focus()", () => {
  afterEach(() => {
    givenJestMocksAreReset();
  });

  it("S01: should focus to an element", async() => {
    const element = givenElementMocks();
    const { focus, execute } = givenElementSpies(element);

    await element.focus();
    expect(focus).toHaveBeenCalled();
    expect(execute).toHaveBeenCalledWith(expect.any(Function), element);
  });
});

function givenElementMocks() {
  const element: WebdriverIO.Element = jest.fn() as any;
  element.focus = focus;
  browser.execute = jest.fn().mockImplementation((arg1) => arg1({ focus: jest.fn() }));
  return element as WebdriverIO.Element;
}

function givenElementSpies(element: WebdriverIO.Element) {
  const focus = jest.spyOn(element, "focus");
  const execute = jest.spyOn(browser, "execute");

  return { focus, execute };
}


