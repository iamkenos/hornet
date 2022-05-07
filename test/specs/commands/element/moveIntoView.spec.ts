import { moveIntoView } from "@commands/element/moveIntoView";

import { givenJestMocksAreReset } from "@test/fixtures/utils/steps";

describe("@commands: element/moveIntoView()", () => {
  afterEach(() => {
    givenJestMocksAreReset();
  });

  it("S01: should move element into view", async() => {
    const element = givenElementMocks();
    const { scrollIntoView, moveTo } = givenElementSpies(element);

    await element.moveIntoView();
    expect(scrollIntoView).toHaveBeenCalledWith({ block: "center" });
    expect(moveTo).toHaveBeenCalledWith(undefined);
  });
});

function givenElementMocks() {
  const element: WebdriverIO.Element = jest.fn() as any;
  element.moveIntoView = moveIntoView;
  element.scrollIntoView = jest.fn();
  element.moveTo = jest.fn();
  return element as WebdriverIO.Element;
}

function givenElementSpies(element: WebdriverIO.Element) {
  const scrollIntoView = jest.spyOn(element, "scrollIntoView");
  const moveTo = jest.spyOn(element, "moveTo");

  return { scrollIntoView, moveTo };
}


