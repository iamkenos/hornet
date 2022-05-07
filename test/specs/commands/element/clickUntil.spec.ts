import { clickUntil } from "@commands/element/clickUntil";

import { ExpectedConditions } from "@conditions/ExpectedConditions";

import { givenJestMocksAreReset } from "@test/fixtures/utils/steps";

describe("@commands: element/clickUntil()", () => {
  afterEach(() => {
    givenJestMocksAreReset();
  });

  it("S01: should call expected conditions expect with click action", async() => {
    const element: WebdriverIO.Element = jest.fn() as any;
    const conditions = new ExpectedConditions();
    conditions.setAction = jest.fn().mockImplementation((arg) => arg());
    element.clickWith = jest.fn();
    element.clickUntil = clickUntil;

    const conditionsSetNameSpy = jest.spyOn(conditions, "setName");
    const conditionsSetActionSpy = jest.spyOn(conditions, "setAction");
    const conditionsExpectSpy = jest.spyOn(conditions, "expect");
    const elementClickWithSpy = jest.spyOn(element, "clickWith");
    await element.clickUntil(conditions);

    expect(conditionsSetNameSpy).toHaveBeenCalledWith(clickUntil.name);
    expect(conditionsSetActionSpy).toHaveBeenCalledTimes(1);
    expect(conditionsExpectSpy).toHaveBeenCalledTimes(1);
    expect(elementClickWithSpy).toHaveBeenCalledTimes(1);
  });
});
