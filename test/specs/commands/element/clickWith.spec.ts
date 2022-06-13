import { clickWith } from "@commands/element/clickWith";

import { ClickAction, JS_MOUSE_CLICK } from "@commands/utils";

import { givenJestMocksAreReset } from "@test/fixtures/utils/steps";

describe("@commands: element/clickWith()", () => {
  afterEach(() => {
    givenJestMocksAreReset();
  });

  it("S01: should support click with left mouse button", async() => {
    const element = givenElementMocks();
    const { moveIntoView, doubleClick, click, execute } = givenElementSpies(element);

    await element.clickWith();
    expect(moveIntoView).not.toHaveBeenCalled();
    expect(execute).not.toHaveBeenCalled();
    expect(doubleClick).not.toHaveBeenCalled();
    expect(click).toHaveBeenCalledWith(undefined);
  });

  it("S02: should move element into view if specified", async() => {
    const element = givenElementMocks();
    const { moveIntoView } = givenElementSpies(element);
    const move = { xOffset: 1, yOffset: 2 };

    await element.clickWith({ move });
    expect(moveIntoView).toHaveBeenCalledWith(move);
  });

  it("S03: should support click with js", async() => {
    const element = givenElementMocks();
    const { execute } = givenElementSpies(element);

    await element.clickWith({ button: ClickAction.SCRIPT });
    expect(execute).toHaveBeenCalledWith(JS_MOUSE_CLICK, element);
  });

  it("S04: should support double click", async() => {
    const element = givenElementMocks();
    const { doubleClick } = givenElementSpies(element);

    await element.clickWith({ button: ClickAction.DOUBLE });
    expect(doubleClick).toHaveBeenCalled();
  });

  it("S05: should support click with left mouse button if button is null", async() => {
    const element = givenElementMocks();
    const { click } = givenElementSpies(element);
    const move = { xOffset: 1, yOffset: 2 };
    const button = null;

    await element.clickWith({ move, button });
    expect(click).toHaveBeenCalledWith({ move, button: ClickAction.LEFT });
  });

  it("S06: should move element into view if specified", async() => {
    const element = givenElementMocks();
    const { click, pause } = givenElementSpies(element);
    const delay = 1000;

    await element.clickWith({ delay });
    expect(click).toHaveBeenCalledWith({ delay });
    expect(pause).toHaveBeenCalledWith(delay);
  });
});

function givenElementMocks() {
  const element: WebdriverIO.Element = jest.fn() as any;
  element.clickWith = clickWith;
  element.moveIntoView = jest.fn();
  element.doubleClick = jest.fn();
  element.click = jest.fn();
  return element as WebdriverIO.Element;
}

function givenElementSpies(element: WebdriverIO.Element) {
  const moveIntoView = jest.spyOn(element, "moveIntoView");
  const doubleClick = jest.spyOn(element, "doubleClick");
  const click = jest.spyOn(element, "click");
  const execute = jest.spyOn(browser, "execute");
  const pause = jest.spyOn(browser, "pause");

  return { moveIntoView, doubleClick, click, execute, pause };
}


