import { setAttribute } from "@commands/element/setAttribute";

import { JS_ELEM_SET_ATTRIBUTE } from "@commands/utils/constants";

import { givenJestMocksAreReset } from "@test/fixtures/utils/steps";
const data = { any: "any", foo: "foo" };

describe("@commands: element/setAttribute()", () => {
  afterEach(() => {
    givenJestMocksAreReset();
  });

  it("S01: should set an element's attribute", async() => {
    const element = givenElementMocks();
    const { execute } = givenElementSpies();

    await element.setAttribute({ key: data.any, value: data.foo });
    expect(execute).toHaveBeenCalledWith(JS_ELEM_SET_ATTRIBUTE, element, data.any, data.foo);
  });

});

function givenElementMocks() {
  const element: WebdriverIO.Element = jest.fn() as any;
  element.setAttribute = setAttribute;
  return element as WebdriverIO.Element;
}

function givenElementSpies() {
  const execute = jest.spyOn(browser, "execute");

  return { execute };
}


