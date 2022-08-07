import { ExpectedConditions } from "@conditions/ExpectedConditions";

import { ExpectedCondition } from "@conditions/ExpectedCondition";

import { givenBrowserConfig, givenJestMocksAreReset } from "@test/fixtures/utils/steps";
const data = { any: "any" };

class Condition extends ExpectedCondition {
  public constructor(not?: boolean) {
    super(not);
  }
}

describe("@conditions: ExpectedConditions constructor", () => {
  beforeEach(() => {
    givenBrowserConfigIsDefined();
  });

  afterEach(() => {
    givenBrowserConfigIsUndefined();
    givenJestMocksAreReset();
  });

  it("S01: should set properties upon instantiation", async() => {
    const conditions = new ExpectedConditions(data.any);

    const actual = [
      (conditions as any).name,
      (conditions as any).conditions,
      (conditions as any).evaluations,
      (conditions as any).timeout,
    ];
    expect(actual).toMatchSnapshot();
  });
});

describe("@conditions: ExpectedConditions.getResult()", () => {
  beforeEach(() => {
    givenBrowserConfigIsDefined();
  });

  afterEach(() => {
    givenBrowserConfigIsUndefined();
    givenJestMocksAreReset();
  });

  it("S01: should get the result", async() => {
    const conditions: any = new ExpectedConditions();
    conditions.evaluations.set(data.any, data.any);

    const actual = conditions.getResult();
    expect(actual).toMatchSnapshot();
  });
});

describe("@conditions: ExpectedConditions.setName()", () => {
  beforeEach(() => {
    givenBrowserConfigIsDefined();
  });

  afterEach(() => {
    givenBrowserConfigIsUndefined();
    givenJestMocksAreReset();
  });

  it("S01: should set the name property value", async() => {
    const conditions = new ExpectedConditions();

    const actual = conditions.setName(data.any);
    expect(actual).toMatchSnapshot();
  });
});

describe("@conditions: ExpectedConditions.setAction()", () => {
  beforeEach(() => {
    givenBrowserConfigIsDefined();
  });

  afterEach(() => {
    givenBrowserConfigIsUndefined();
    givenJestMocksAreReset();
  });

  it("S01: should set the action property value", async() => {
    const conditions = new ExpectedConditions();

    const actual = conditions.setAction(() => data.any);
    expect(actual).toMatchSnapshot();
  });
});

describe("@conditions: ExpectedConditions.setTimeout()", () => {
  beforeEach(() => {
    givenBrowserConfigIsDefined();
  });

  afterEach(() => {
    givenBrowserConfigIsUndefined();
    givenJestMocksAreReset();
  });

  it("S01: should set the timeout property value", async() => {
    const conditions = new ExpectedConditions();

    const actual = conditions.setTimeout(1);
    expect(actual).toMatchSnapshot();
  });
});

describe("@conditions: ExpectedConditions.addCondition()", () => {
  beforeEach(() => {
    givenBrowserConfigIsDefined();
  });

  afterEach(() => {
    givenBrowserConfigIsUndefined();
    givenJestMocksAreReset();
  });

  it("S01: should add a new condition", async() => {
    const conditions = new ExpectedConditions();

    const actual = conditions.addCondition(new Condition());
    expect(actual).toMatchSnapshot();
  });
});

describe("@conditions: ExpectedConditions.evaluate()", () => {
  beforeEach(() => {
    givenBrowserConfigIsDefined();
  });

  afterEach(() => {
    givenBrowserConfigIsUndefined();
    givenJestMocksAreReset();
  });

  it("S01: should return the result on evaluate", async() => {
    const conditions:any = new ExpectedConditions();
    conditions.result = data.any;

    const actual = await conditions.evaluate();
    expect(actual).toMatchSnapshot();
  });

  it("S02: should return the result even if an error is encountered", async() => {
    const conditions:any = new ExpectedConditions();
    conditions.result = data.any;
    conditions.expect = jest.fn().mockImplementation(() => { throw new Error("message"); });

    const actual = await conditions.evaluate();
    expect(actual).toMatchSnapshot();
  });
});

describe("@conditions: ExpectedConditions.expect()", () => {
  beforeEach(() => {
    givenBrowserConfigIsDefined();
  });

  afterEach(() => {
    givenBrowserConfigIsUndefined();
    givenJestMocksAreReset();
  });

  it("S01: should return the result on expect if result is passed", async() => {
    const conditions: any = new ExpectedConditions().addCondition(new Condition());
    browser.waitUntil = jest.fn().mockImplementation(fn => fn());

    const actual = await conditions.expect();
    expect(actual).toMatchSnapshot();
    expect(conditions.conditions).toEqual([]);
  });

  it("S02: should return the result on expect if result is passed with actions set", async() => {
    const conditions: any = new ExpectedConditions().addCondition(new Condition());
    browser.waitUntil = jest.fn().mockImplementation(fn => fn());

    const actual = await conditions.setAction(() => data.any).expect();
    expect(actual).toMatchSnapshot();
  });

  it("S03: should throw new error on expect if wait until yields an error", async() => {
    const conditions: any = new ExpectedConditions().addCondition(new Condition());
    browser.waitUntil = jest.fn().mockImplementation(() => { throw new Error(data.any); });
    let error: Error;

    try {
      await conditions.expect();
    } catch (e) {
      error = e;
    } finally {
      expect(error).toBeDefined();
      expect(error.message).toEqual(data.any);
      expect(conditions.conditions).toEqual([]);
    }
  });

  it("S03: should throw new error on expect if wait until yields an error with a custom message", async() => {
    const conditions: any = new ExpectedConditions().addCondition(new Condition());
    conditions.result = { message: data.any + data.any };
    browser.waitUntil = jest.fn().mockImplementation(() => { throw new Error(data.any); });
    let error: Error;

    try {
      await conditions.expect();
    } catch (e) {
      error = e;
    } finally {
      expect(error).toBeDefined();
      expect(error.message).toEqual(data.any + data.any);
    }
  });
});

function givenBrowserConfigIsDefined() {
  browser.config = givenBrowserConfig();
}

function givenBrowserConfigIsUndefined() {
  browser.config = undefined;
}
