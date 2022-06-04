import { ExpectedCondition } from "@conditions/ExpectedCondition";

const data = { any: "any" };

class Condition extends ExpectedCondition {
  public constructor(not?: boolean) {
    super(not);
  }
}

describe("@conditions: ExpectedCondition constructor", () => {
  it("S01: should set properties upon instantiation", async() => {
    const condition = new Condition();

    const actual = [
      (condition as any).name,
      (condition as any).not,
      (condition as any).timeout,
      (condition as any).expected,
      (condition as any).actual,
      (condition as any).passed,
      (condition as any).result,
      (condition as any).on,
      (condition as any).element,
    ];
    expect(actual).toMatchSnapshot();
  });
});

describe("@conditions: ExpectedCondition.setElement()", () => {
  it("S01: should set the element property value", async() => {
    const condition = new Condition().setElement({ selector: data.any } as any);

    const actual = (condition as any).element;
    expect(actual).toMatchSnapshot();
  });
});

describe("@conditions: ExpectedCondition.evaluate() constructor", () => {
  it("S01: should return a passed result", async() => {
    const condition: any = new Condition().setElement({ selector: data.any, index: 2 } as any);
    condition.expected = data.any;
    condition.actual = data.any;
    condition.passed = condition.actual === condition.expected;

    const actual = await condition.evaluate();
    expect(actual).toMatchSnapshot();
  });

  it("S02: should return a failed result", async() => {
    const condition: any = new Condition(false);
    condition.on = data.any;
    condition.expected = [data.any];
    condition.actual = [data.any];
    condition.passed = JSON.stringify(condition.actual) === JSON.stringify(condition.expected);

    const actual = await condition.evaluate();
    expect(actual).toMatchSnapshot();
  });
});
