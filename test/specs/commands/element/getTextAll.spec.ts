import { getTextAll } from "@commands/element/getTextAll";

import { givenJestMocksAreReset } from "@test/fixtures/utils/steps";
const data = { any: "any", selector: "foo" };

describe("@commands: element/getTextAll()", () => {
  afterEach(() => {
    givenJestMocksAreReset();
  });

  it("S01: should call get text on all elements", async() => {
    const element = givenElementMocks();

    const actual = await element.getTextAll();
    const expected = Array(2).fill(data.any);
    expect(actual).toEqual(expected);
    expect(element.$$).toHaveBeenCalledWith(data.selector);
  });
});

function givenElementMocks() {
  const element: WebdriverIO.Element = jest.fn() as any;
  element.selector = data.selector;
  element.$$ = jest.fn().mockReturnValue(Array(2).fill({ getText: () => data.any }));
  element.getTextAll = getTextAll;
  return element as WebdriverIO.Element;
}
