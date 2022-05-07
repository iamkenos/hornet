import { execute } from "@commands/element/execute";

import { JS_ELEM_EXEC_FUNC } from "@commands/utils";

import { givenJestMocksAreReset } from "@test/fixtures/utils/steps";
const data = { any: "any" };

describe("@commands: element/execute()", () => {
  afterEach(() => {
    givenJestMocksAreReset();
  });

  it("S01: should execute an element function", async() => {
    const element = givenElementMocks();
    const { execute } = givenElementSpies();

    await element.execute(data.any);
    expect(execute).toHaveBeenCalledWith(JS_ELEM_EXEC_FUNC, element, data.any);
  });
});

function givenElementMocks() {
  const element: WebdriverIO.Element = jest.fn() as any;
  element.execute = execute;
  return element as WebdriverIO.Element;
}

function givenElementSpies() {
  const execute = jest.spyOn(browser, "execute");

  return { execute };
}


