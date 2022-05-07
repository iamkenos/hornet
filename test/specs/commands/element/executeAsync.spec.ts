import { executeAsync } from "@commands/element/executeAsync";

import { JS_ELEM_EXEC_ASYNC_FUNC } from "@commands/utils";

import { givenJestMocksAreReset } from "@test/fixtures/utils/steps";
const data = { any: "any" };

describe("@commands: element/executeAsync()", () => {
  afterEach(() => {
    givenJestMocksAreReset();
  });

  it("S01: should execute an element async function", async() => {
    const element = givenElementMocks();
    const { execute } = givenElementSpies();

    await element.executeAsync(data.any);
    expect(execute).toHaveBeenCalledWith(JS_ELEM_EXEC_ASYNC_FUNC, element, data.any);
  });
});

function givenElementMocks() {
  const element: WebdriverIO.Element = jest.fn() as any;
  element.executeAsync = executeAsync;
  return element as WebdriverIO.Element;
}

function givenElementSpies() {
  const execute = jest.spyOn(browser, "execute");

  return { execute };
}


